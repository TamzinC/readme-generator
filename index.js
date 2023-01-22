const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        name: 'projectTitle',
        message: 'What is the name of your project?',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Tell me about your app:',
        type: 'input'
    },
    {
        name: 'install',
        message:'Does your app require installation? If so, please provide step-by-step instructions:',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'What are the instuctions to use the app?',
        type: 'input'
    },
    {
        name: 'license',
        message: 'What licence do you require?',
        type: 'input'
    },
    {
        name: 'contribute',
        message: 'Please explain any guidelines for other devlopers if you would like them to contribute towards your project:',
        type: 'input'
    },
    {
        name: 'tests',
        message: 'Are there any tests for your app? If so, please add them here:',
        type: 'input'
    },
    {
        name: 'githubID',
        message: 'Please enter your GitHub username:',
        type: 'input'
    },
    {
        name: 'githubURL',
        message: 'Please provide the URL to your GitHub profile:',
        type: 'input'
    },
    {
        name: 'email',
        message: 'Please enter your email address:',
        type: 'input'
    }
];


// function to write README file
function writeToFile(projectTitle, data) {
    return fs.writeFile('README.md', data, (error) => {
        if (error) {
            return console.log(error);
        } else{
            console.log(`-------You have successfully created your README file for ${projectTitle}!-------`);
        }
    });
};

// function to initialize program
function init() {
    console.log('-------Welcome to the README Generator!-------');
    inquirer.prompt(questions).then((answers) => {
        console.log({answers});
        const markdown = generateMarkdown(answers);
        console.log({markdown});
        writeToFile(answers.projectTitle, markdown);
    })
}

// function call to initialize program
init();
