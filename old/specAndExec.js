const { exec, spawn } = require('child_process');

// exec
// const childProcess = exec('dir', (err, stdout, strerr) => {
//   if (err) console.log(err.message);
//   console.log('stdout: ', stdout);
//   console.log('stderr: ', strerr);
// });

// childProcess.on('exit', (code) => {
//   console.log('exit code: ', code);
// });


const childProcess = spawn('dir');

childProcess.stdout.on('data', (data) => {
  console.log('stdout data: ', data);
});
childProcess.stderr.on('data', (data) => {
  console.log('stderr data: ', data);
});
childProcess.on('exit', (code) => {
  console.log('exit code: ', code);
});
