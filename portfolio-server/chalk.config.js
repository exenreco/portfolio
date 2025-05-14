import chalk from "chalk";
const
  warn = (() =>chalk.bgHex('#FFA500').whiteBright.bold)(),
  error = (() => chalk.bgRed.whiteBright.bold)(),
  success = (() => chalk.bgGreen.whiteBright.bold)(),
  message = (() => chalk.bgBlue.whiteBright.bold)()
;
export { warn, error, success, message };
