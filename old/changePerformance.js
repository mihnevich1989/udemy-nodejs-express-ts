const perf_hooks = require('perf_hooks');

test = perf_hooks.performance.timerify(test);


// вывод информации о производительности без использования console.log(performance.getEntriesByName('slow'));
const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
  console.log(items.getEntries());
  const entry = items.getEntriesByName('slow').pop();
  console.log(`${entry.name}: ${entry.duration}`);
  observer.disconnect();
});
performanceObserver.observe({ entryTypes: ['measure', 'function'] });

function test() {
  const arr = [];
  for (let i = 0; i < 10000000; i++) {
    arr.push(i * i);
  }
}

function slow() {
  performance.mark('start'); // старт замера производительности
  const arr = [];
  for (let i = 0; i < 10000000; i++) {
    arr.push(i * i);
  }
  performance.mark('end'); // окончание замера производительности
  performance.measure('slow', 'start', 'end'); // измерение производительности между стартом и окончанием.
  //console.log(performance.getEntriesByName('slow')); // вывод информации о производительности 
}
slow();
test();

/* для имзерения куска кода, использовать
  const perf_hooks = require('perf_hooks'); 
  performance.mark('start');
  performance.mark('end');
  performance.measure('тут название функции', 'start', 'end');
  далее эти значение передвавать в const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {})
  либо как console.log(items.getEntries());
  либо const entry = items.getEntriesByName('slow')
  в конце в теле PerformanceObserver прописывать observer.disconnect();
  и после new perf_hooks.PerformanceObserver
  вызывать performanceObserver.observe({ entryTypes: ['measure'] });
*/

/* для измерения какой то функции, использовать
  const perf_hooks = require('perf_hooks');
  название функции = perf_hooks.performance.timerify(название функции);
  в const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {})
  заполнить тело callback 
    console.log(items.getEntries());
    const entry = items.getEntriesByName('slow').pop();
    console.log(`${entry.name}: ${entry.duration}`);
    observer.disconnect();
    либо свой вариант
  после вызвать 
  performanceObserver.observe({ entryTypes: ['function'] });
*/
