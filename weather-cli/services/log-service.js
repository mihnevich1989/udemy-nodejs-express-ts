import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
    `
  );
};

const printWeather = async (res, icon) => {
  console.log(
    dedent`${chalk.yellow('ПОГОДА')}
    Погода в городе ${chalk.green(res.name)},
    ${(res.weather[0].description).slice(0, 1).toUpperCase() + (res.weather[0].description).slice(1)} ${icon} ,
    Температура: ${chalk.green(res.main.temp + '°C')},
    Ощущается как: ${chalk.green(res.main.feels_like + '°C')},
    Скорость ветра: ${chalk.green(res.wind.speed + 'м/с')},
    Влажность: ${chalk.green(res.main.humidity + '%')},
    `
  );
};

export { printError, printSuccess, printHelp, printWeather };
