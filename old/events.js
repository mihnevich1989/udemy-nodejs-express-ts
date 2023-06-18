const EventEmmiter = require('events');

const myEmmiter = new EventEmmiter();

const logDbConnection = () => {
  console.log('DB Connected');
};

myEmmiter.addListener('connected', logDbConnection);
myEmmiter.emit('connected');
myEmmiter.removeListener('connected', logDbConnection);
// myEmmiter.removeAllListeners('connected');
// myEmmiter.off('connected', logDbConnection);
myEmmiter.emit('connected');

myEmmiter.on('message', data => {
  console.log(`Get: ${data}`);
});

myEmmiter.prependListener('message', data => {
  console.log('Prepend');
});
myEmmiter.emit('message', 'Hi take my msg!');


myEmmiter.once('off', () => {
  console.log('I\'m called once');
});
myEmmiter.emit('off');
myEmmiter.emit('off'); // will don't called


console.log(myEmmiter.getMaxListeners());
myEmmiter.setMaxListeners(1);
console.log(myEmmiter.getMaxListeners());
console.log(myEmmiter.listenerCount('message'));
console.log(myEmmiter.listenerCount('off'));
console.log(myEmmiter.eventNames());

myEmmiter.on('error', err => {
  console.log(`Throw exception: ${err.message}`);
});

myEmmiter.emit('error', new Error('BOOOM'));


const targetEmmiter = new EventTarget();

const logTarget = () => {
  console.log("TargetEvent Connect DB");
};

targetEmmiter.addEventListener('connected', logTarget);
targetEmmiter.dispatchEvent(new Event('connected'));
