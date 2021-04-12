const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const genHtml = require('./src/page-template');

const roleArray = ['Manager', 'Engineer', 'Intern']

const mainPrompts = [
    {
        type: 'list',
        message: 'What is this employee\'s role?',
        choices: roleArray,
        name: 'role'
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

// function to initialize app
const initPrompts = () => {
    inquirer
        // main prompts first
        .prompt(mainPrompts)
        .then(({role, name, id, email}) => {
            // conditional for Manager
            if (role === 'Manager') {
                return inquirer
                    .prompt(mngrPrompts)
                    .then (({officeNumber, addMember}) => {
                        manager.push(new Manager(name, id, email, officeNumber))
                        if (addMember) {
                            return initPrompts();
                        }
                    })
            // conditional for Enginner
            }else if (role === 'Engineer'){
                return inquirer
                    .prompt(engPrompts)
                    .then (({gitHub, addMember}) => {
                        engineer.push(new Engineer(name, id, email, gitHub))
                        if(addMember) {
                            return initPrompts();
                        }
                    })
            // conditional for Intern
            }else if (role === 'Intern'){
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
        });

}

const writePage = (htmlContent) => {
    fs.writeFile('./dist/index.html', htmlContent, err => {
        err ? console.error(err) : console.log(`
        ************************************************
        *********** >> Prompts completed! << ***********
        ****** >> Team Profile page generated: << ******
        *********** >> see "dist" folder << ************
        ************************************************
        `)
    });
}

console.log(`
    ************************************************
    ********* >> TEAM PROFILE GENERATOR << *********
    ****** >> Please complete all prompts! << ******
    ************************************************
`);

initPrompts()
    .then(data => genHtml(data))
    .then(pageHtml => writePage(pageHtml))
    .catch(err => console.error(err))

