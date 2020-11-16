const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

// array of questions for user
const questions = [{
    type: "input",
    name: "title",
    message: "What is your project title?"
},
{
    type: "input",
    name: "description",
    message: "Please describe your project:"
},
{
    type: "input",
    name: "install",
    message: "Please enter installation instructions:"
},
{
    type: "input",
    name: "usage",
    message: "Please enter usage information:"
},
{
    type: "input",
    name: "contribution",
    message: "Please provide contribution guidelines:"
},
{
    type: "input",
    name: "test",
    message: "Please describe test instructions:"
},
{
    type: 'list',
    message: 'Please select a license:',
    name: 'license',
    choices: ['cli-cursor', 'color-name', 'onetime'],
  },
  {
    type: "input",
    name: "github",
    message: "Please provide Github Username:"
},
{
    type: "input",
    name: "email",
    message: "Please provide email address:"
},


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            console.log(err)
        }
        console.log('Write File Success!')
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile('README.md', answers);
    })

}

// function call to initialize program
init();