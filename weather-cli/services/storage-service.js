import { homedir } from 'os';
import { join, basename, dirname, extname, relative, isAbsolute, resolve, sep } from 'path';

const filePath = join(homedir(), '/weather-cli/weather-data.json');
const saveKeyValue = (key, value) => {
  console.log(basename(filePath)); // weather-data.json
  console.log(dirname(filePath)); // C:\Users\mikhn\weather-cli
  console.log(extname(filePath)); // .json
  console.log(relative(filePath, dirname(filePath))); // ..
  console.log(isAbsolute(filePath)); // true
  console.log(resolve('..')); // D:\IT\Udemy\NodeJS-Express\NodeJS Express JS TS
  console.log(sep); // \
};


export { saveKeyValue };
