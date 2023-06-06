// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "githubUN",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is you e-mail address?",
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project: \nExplain the what, why, and how of your project.",
    },
    {
        type: "input",
        name: "usage",
        message: "How is your project intended to be used?",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation or setup instructions for your project.",
    },
    {
        type: "input",
        name: "contributing",
        message: "Who were the contributing parties? What were their task?",
    },
    {
        type: "input",
        name: "tests",
        message: "What test did you run during the creation of your project?",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose a license for your project.",
        choices: [
            "MIT",
            "GNU GPLv3",
            "Apache",
            "Boost",
            "None",
            ]
    },
   
    ];
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
            }
            console.log("Success!");
            });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        const markdownText = generateMarkdown(answers);
        writeToFile("README.md", markdownText);
    });
    
};
// Function call to initialize app
init();
