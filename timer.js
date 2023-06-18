// const start = performance.now();
// setTimeout(()=>{
//   console.log(performance.now() - start);
//   console.log('second left');
// }, 1000)

//---

// function myFunc(arg) {
//   console.log('argument ' + arg);
// }
// setTimeout(myFunc, 500, 'Good')

//---

// const timerId = setTimeout(()=>{
//   console.log('Boom');
// }, 5000)
// setTimeout(() => {
//   clearTimeout(timerId)
//   console.log('Cleared');
// }, 2000);

//---

// const intervalId = setInterval(() => {
//   console.log(performance.now());
// }, 1000);
// setTimeout(() => {
//   clearInterval(intervalId)
//   console.log('Cleared');
// }, 4000);

//---

// console.log('Before');
// setImmediate(() => {
//   console.log('After all');
// });
// console.log('After');

//---

const tId = setTimeout(() => {
  console.log('iID Boom');
}, 1000);
tId.unref();
setImmediate(()=>{
  tId.ref();
})
