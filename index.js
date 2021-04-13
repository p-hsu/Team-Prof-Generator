const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/page-template");

let manager = [];
let engineer = [];
let intern = [];
let teamArray = { manager, engineer, intern };

function initPrompts() {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "What is this employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role",
      },
      {
        type: "input",
        message: "What is this employee's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is this employee's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is this employee's email address?",
        name: "email",
      },
    ])
    .then(({ name, id, email, role }) => {
      if (role === "Manager") {
        return inquirer
          .prompt([
            {
              type: "input",
              message: "What is the manager's office number?",
              name: "officeNumber",
            },
            {
              type: "confirm",
              message: "Are there more members to your team?",
              default: false,
              name: "addMember",
            },
          ])
          .then(({ officeNumber, addMember }) => {
            manager.push(new Manager(name, id, email, officeNumber));
            // console.log(employeeArr)
            if (addMember) {
              return initPrompts();
            }
          });
      } else if (role === "Engineer") {
        return inquirer
          .prompt([
            
              {
                type: "input",
                message: "What is this engineer's GitHub username?",
                name: "github",
              },
              {
                type: "confirm",
                message: "Are there more members to your team?",
                name: "addMember",
                default: false,
              }
            
          ])
          .then(({ github, addMember }) => {
              console.log(name);
            engineer.push(new Engineer(name, id, email, github));
            // console.log(employeeArr)
            if (addMember) {
              return initPrompts();
            }
          });
      } else if (role === "Intern") {
        return inquirer
          .prompt([
            {
              type: "input",
              message: "What school does this intern attend?",
              name: "school",
            },
            {
              type: "confirm",
              message: "Are there more members to your team?",
              default: false,
              name: "addMember",
            },
          ])
          .then(({ school, addMember }) => {
            intern.push(new Intern(name, id, email, school));
            // console.log(employeeArr)
            if (addMember) {
              return initPrompts();
            }
          });
      }
    });
}

const writeFile = (fileContent) => {
  fs.writeFile("./dist/index.html", fileContent, (err) => {
    err
      ? console.error(err)
      : console.log("Prompts completed and page generated!");
  });
};

console.log(`
    ************************************************
    ********* >> TEAM PROFILE GENERATOR << *********
    ****** >> Please complete all prompts! << ******
    ************************************************
`);

initPrompts()
  .then((teamData) => {
    return generatePage(teamArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  });
