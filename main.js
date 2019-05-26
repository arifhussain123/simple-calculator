var figlet = require('figlet');
// var argv = require( 'argv' );
var clear = require( 'clear');
var inquirer = require('inquirer');
const chalk = require('chalk');
const calculator = require('./calculator/calculator');
clear();

console.log(chalk.red(figlet.textSync('**SIMPLE CALCULATOR**')));

console.log(calculator.calculator());

