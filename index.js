const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');
const Manager = require('./lib/Manager');
// const Engineer = require('../lib/Engineer');
// const Intern = require('../lib/Intern');

// var data = {
//     manager: "",
//     id: "",
//     email: "",
//     office: ""
// }


// ARRAY OF QUESTIONS
const questions = [{
        type: 'input',
        name: 'manager',
        message: "What is the team manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the team manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's employee ID number?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the team manager's employee ID number!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email address?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the team manager's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the team manager's office number?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the team manager's office number!");
                return false;
            }
        }
    },
];

// FUNCTION TO WRITE HTML
const writeHTML = (fileName, data) => {
    fs.writeFile(fileName, generateHTML(data), (err) => {
        if (err) console.log(err);

        console.log('HTML created!');
    });
}

//FUNCTION TO INITIALIZE PROGRAM
function Program() {
    inquirer.prompt(questions).then(response => {

        const manager = new Manager(response.name);

            
        



        console.log(manager);

        writeHTML("Team-Profile.html", response);
    })
};

// FUNCTION CALL RUN PROGRAM
// init();

new Program();