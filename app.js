const perf_hooks = require('perf_hooks');
const { fork } = require('child_process');
const { Worker } = require('worker_threads');
const { readFileSync } = require('fs');
const file = readFileSync('./file.mp4');

const performanceObserver = new perf_hooks.PerformanceObserver((items) => {
  items.getEntries().forEach(entry => console.log(`${entry.name}: ${entry.duration}`));
});
performanceObserver.observe({ entryTypes: ['measure'] });

const workerFunction = (array) => {

  return new Promise((resolve) => {
    performance.mark('worker start');
    const worker = new Worker('./worker.js', { workerData: { array, file } });
    worker.on('message', (msg) => {
      performance.mark('worker end');
      performance.measure('worker', 'worker start', 'worker end');
      resolve(msg);
    });
  });
};

const forkFunction = (array) => {
  return new Promise((resolve) => {
    performance.mark('fork start');
    const forkProcess = fork('./fork.js');
    forkProcess.send({ array, file });

    forkProcess.on('message', (msg) => {
      performance.mark('fork end');
      performance.measure('fork', 'fork start', 'fork end');
      resolve(msg);
    });
    forkProcess.send('disconnect');
  });
};

const main = async () => {
  const res1 = await workerFunction([25, 19, 48, 30]);
  const res2 = await forkFunction([25, 19, 48, 30]);
  console.log(res1);
  console.log(res2);
};

main();
