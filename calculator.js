
let calculator = () => {
    let inquirer = require("inquirer");
    inquirer
      .prompt([
        {
          type: "list",
          name: "operation",
          message: 'welcome to simple Calculator which operation your want to check ?',
          choices: [
              "Addition",
              "Substraction", 
              "Multiplication", 
              "Division"]
        },

        {
          type: "input",
          name: "first_number",
          message: "Enter first number"
        },
        
        { type: "input", name: "second_number", message: "Enter second number" }
      ])
      .then(answers => {
        let a = JSON.stringify(answers);
        let b = JSON.parse(a);
        let c = b.operation;
        let first = parseInt(b.first_number);
        let second = parseInt(b.second_number);
        if (c == "Addition") {
          console.log(first + second);
        }
        if (c == "Substraction") {
          console.log(first - second);
        }
        if (c == "Multiplication") {
          console.log(first * second);
        }
        if (c == "Division") {
          console.log(first / second);
        }
      });
  };
  module.exports.calculator = calculator;
  