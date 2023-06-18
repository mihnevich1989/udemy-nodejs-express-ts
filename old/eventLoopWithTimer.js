const fs = require('fs');

console.log('Init');
setTimeout(() => {
  console.log(performance.now(), 'Timer: 0s');
}, 100);

setImmediate(() => {
  console.log('Immediate');
});

fs.readFile(__filename, (err, data) => {
  console.log('file readed');
});

setTimeout(() => {
  for (var i = 0; i < 1000000000; i++) { }
  console.log('Loop is done');
  Promise.resolve().then(() => {
    console.log('Promise inside timeout loop');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('Promise resolve');
});

process.nextTick(()=>{
  console.log('Tick');
})

console.log('Final');
