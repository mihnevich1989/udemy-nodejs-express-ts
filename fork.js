const { fork } = require('child_process');

const forkProcess = fork('forkWorker.js');

forkProcess.on('message', (msg) => {
  console.log('Server got: ', msg);
});

forkProcess.on('close', (code) => {
  console.log('Exited: ', code);
});

forkProcess.send('Ping');
forkProcess.send('disconnect');
