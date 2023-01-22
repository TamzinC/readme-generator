const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        name: 'projectTitle',
        message: 'What is the name of your project?'
    },
    {
        name: 'description',
        message: 'Tell me about your app'
    }
];


// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(questions.projectTitle + 'md', questions.description, (error))
    .then(() => {
        if (error) {
            return console.log(error);
        } else{
            console.log(`You have successfully created the ${data.projectTitle} README file`);
            console.log(`The description of your app is:\n${data.description}`);
        }
    });
};

// function to initialize program
function init() {
    inquirer.prompt([questions])
    writeToFile();
    generateMarkdown();
}

// function call to initialize program
init();
