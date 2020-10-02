const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamArray = [];
function Program() {
    this.manager;
}


// ARRAY OF QUESTIONS
const managerQuestions= [{
        type: 'input',
        name: 'name',
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
        name: 'officeNumber',
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
    {
        type: 'list',
        name: 'members',
        message: "Do you want to add an engineer or an intern to your team?",
        choices: ['Add an engineer', 'Add an intern', 'My team is complete'],
        default: false,

    },
    // {
    //     type: 'input',
    //     name: 'engineer-name',
    // message: "What is the engineer's name?",
    // when: ({
    //     members
    // }) => members
    // validate: nameInput => {
    //     if (nameInput) {
    //         return true;
    //     } else {
    //         console.log("Please enter the engineer's name!");
    //         return false;
    //     }
    // }
    // }
];

const addEngineer = memberData => {

    if (!memberData.engineers) {
        memberData.engineers = [];
    }
    console.log(`
    =================
    Add an Enginner
    =================
    `);
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee ID number?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's employee ID number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team engineer's email address!");
                    return false;
                }
            }
        }
    ]).then(engineerData => {
        memberData.engineers.push(engineerData);
        console.log(memberData.engineers);
    }).catch(err => {
        console.log(err);
    });
};

const addIntern = function (data) {
    console.log(data);
};

// FUNCTION TO WRITE HTML
const writeHTML = (fileName, data) => {
    fs.writeFile(fileName, generateHTML(data), (err) => {
        if (err) console.log(err);

        console.log('HTML created!');
    });
}

//FUNCTION TO INITIALIZE PROGRAM
Program.prototype.initializeProgram = function () {

    inquirer.prompt(managerQuestions).then(response => {
        // console.log(response);

        

        // Create manager object and save to team array
        this.manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamArray.push(this.manager);
        console.log(response.members);

        if (response.members === 'Add an engineer') {
            addEngineer(response.members);

        } else if (response.members === 'Add an intern') {
             addIntern(response.members);
        } else {
            console.log("Team complete!");
            
        };
        // this.engineer = new Engineer(response.name, response.id, response.email) 
        // teamArray.push(this.engineer);

        // Create engineer object and save to team array


        console.log(teamArray);


        writeHTML("Team-Profile.html", teamArray);
    })
};

// FUNCTION CALL RUN PROGRAM
// init();

new Program().initializeProgram();