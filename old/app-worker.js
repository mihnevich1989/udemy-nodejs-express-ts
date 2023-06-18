const perf_hooks = require('perf_hooks');
const { Worker } = require('worker_threads');


const performanceObserver = new perf_hooks.PerformanceObserver((items, observe) => {
  console.log(items.getEntriesByName('main'));
  observe.disconnect();
});
performanceObserver.observe({ entryTypes: ['measure'] });


const compute = (array) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', {
      workerData: { array }
    });

    worker.on('message', (msg) => {
      console.log(worker.threadId);
      resolve(msg);
    });

    worker.on('error', (err) => {
      reject(err);
    });

    worker.on('exit', () => {
      console.log('Worker done!');
    });
  });
};

const main = async () => {
  try {
    performance.mark('start');

    const result = await Promise.all([
      compute([25, 20, 19, 48, 30, 50]),
      compute([25, 20, 19, 48, 30, 50]),
      compute([25, 20, 19, 48, 30, 50]),
      compute([25, 20, 19, 48, 30, 50])
    ]);
    console.log(result);

    performance.mark('end');
    performance.measure('main', 'start', 'end');
  } catch (error) {
    console.error(error.message);
  }

};

setTimeout(() => {
  console.log('Timeout 2s');
}, 2000);

main();
