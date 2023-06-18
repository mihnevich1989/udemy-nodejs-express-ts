const factorial = require('./factorial');
const perf_hooks = require('perf_hooks');

const performanceObserver = new perf_hooks.PerformanceObserver((items, observe) => {
  console.log(items.getEntriesByName('main'));
  observe.disconnect();
});
performanceObserver.observe({ entryTypes: ['measure'] });


const compute = (array) => {
  const arr = [];
  for (let i = 0; i < 100000000; i++) {
    arr.push(i * i);

  }
  return array.map(el => factorial(el));
};

const main = () => {
  performance.mark('start');
  const result = [
    compute([25, 20, 19, 48, 30, 50]),
    compute([25, 20, 19, 48, 30, 50]),
    compute([25, 20, 19, 48, 30, 50]),
    compute([25, 20, 19, 48, 30, 50])
  ];
  console.log(result);
  performance.mark('end');
  performance.measure('main', 'start', 'end');
};

setTimeout(() => {
  console.log('Timeout 2s');
}, 2000);

main();
