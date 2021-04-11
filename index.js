const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const template = require('./src/page-template');

const positionArray = ['Manager', 'Engineer', 'Intern']

const mainPrompts = [
    {
        type: 'list',
        message: 'What is this employee\'s position?',
        choices: positionArray,
        name: 'position'
    },
    {
        type: 'input',
        message: 'What is this employee\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is this employee\'s ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is this employee\'s email address?',
        name: 'email',
    }
]

const mngrPrompts = [
    {
        type: 'input',
        message: 'What is the manager\'s office number?',
        name: 'officeNumber',
    },
    {
        type: 'confirm',
        message: 'Are there more members to your team?',
        default: false,
        name: 'addMember'
    }
]

const engPrompts = [
    {
        type: 'input',
        message: 'What is this engineer\'s GitHub username?',
        name: 'gitHub',
    },
    {
        type: 'confirm',
        message: 'Are there more members to your team?',
        default: false,
        name: 'addMember'
    }
]

const intPrompts = [
    {
        type: 'input',
        message: 'What school does this intern attend?',
        name: 'school'
    },
    {
        type: 'confirm',
        message: 'Are there more members to your team?',
        default: false,
        name: 'addMember'
    }
]

// Initialize app
function init() {
    inquirer
        .prompt(mainPrompts)

        .then( (response, err) => {
            err ? console.error(err) : console.log('Prompts completed and Team Profile page generated!!')
            console.log(response);
        })
}

init()