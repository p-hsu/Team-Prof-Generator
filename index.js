const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
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

const internPrompts = [
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

let manager = [];
let engineer = [];
let intern = [];
let teamArray = {manager, engineer, intern};

// Initialize app
function initPrompts() {
    inquirer
        // main prompts first
        .prompt(mainPrompts)
        .then(({position, name, id, email}) => {
            // conditional for Manager position
            if (position === 'Manager') {
                return inquirer
                    .prompt(mngrPrompts)
                    .then (({officeNumber, addMember}) => {
                        manager.push(new Manager(name, id, email, officeNumber))
                        if (addMember) {
                            return initPrompts();
                        }
                    })
            // conditional for Enginner position
            }else if (position === 'Engineer'){
                return inquirer
                    .prompt(engPrompts)
                    .then (({gitHub, addMember}) => {
                        engineer.push(new Engineer(name, id, email, gitHub))
                        if(addMember) {
                            return initPrompts();
                        }
                    })
            // conditional for Intern position
            }else if (position === 'Intern'){
                return inquirer
                    .prompt(internPrompts)
                    .then (({school, addMember}) => {
                        intern.push(new Intern(name, id, email, school))
                        console.log(teamArray)
                        if(addMember) {
                            return initPrompts();
                        }
                    })
            }

        })


        // .then( (response, err) => {
        //     err ? console.error(err) : console.log('Prompts completed and Team Profile page generated!!')
        //     console.log(response);
        // })
}

initPrompts()