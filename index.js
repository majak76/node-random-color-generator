import chalk from 'chalk';
import randomColor from 'randomcolor'; // import the script

const colorLuminosity = process.argv[3];
const colorHue = process.argv[2];
const color = randomColor({
  luminosity: colorLuminosity,
  hue: colorHue,
});

console.log(chalk.hex(color)('###############################'));
console.log(chalk.hex(color)('###############################'));
console.log(chalk.hex(color)('###############################'));
console.log(chalk.hex(color)('#####                     #####'));
console.log(chalk.hex(color)(`#####       ${color}       #####`));
console.log(chalk.hex(color)('#####                     #####'));
console.log(chalk.hex(color)('###############################'));
console.log(chalk.hex(color)('###############################'));
console.log(chalk.hex(color)('###############################'));
