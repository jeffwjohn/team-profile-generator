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
const managerQuestions = [{
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

const engineerQuestions = [{
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
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the team engineer's GitHub username!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'members',
        message: "Do you want to add another member to your team?",
        choices: ['Add an engineer', 'Add an intern', 'My team is complete'],
        default: false,
    },
];

const internQuestions = [{
    type: 'input',
    name: 'name',
    message: "What is the intern's name?",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter the intern's name!");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'id',
    message: "What is the intern's employee ID number?",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter the intern's employee ID number!");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: "What is the intern's email address?",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter the team intern's email address!");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'school',
    message: "What is the intern's school?",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter the team intern's school!");
            return false;
        }
    }
},
{
    type: 'list',
    name: 'members',
    message: "Do you want to add another member to your team?",
    choices: ['Add an engineer', 'Add an intern', 'My team is complete'],
    default: false,

},
];

const addIntern = teamData => {
    console.log(`
=================
Add an Intern
=================
`);

    inquirer.prompt(internQuestions).then(response => {
        this.intern = new Intern(response.name, response.id, response.email, response.school);
        teamArray.push(this.intern);
        console.log(teamArray);
        if (response.members === 'Add an engineer') {

            addEngineer();

        } else if (response.members === 'Add an intern') {
            
            addIntern();

        } else {
            console.log("Team complete!");

        };
    })
};

const addEngineer = teamData => {
    console.log(`
=================
Add an Engineer
=================
`);

    inquirer.prompt(engineerQuestions).then(response => {
        this.engineer = new Engineer(response.name, response.id, response.email, response.github);
        teamArray.push(this.engineer);
        console.log(teamArray);
        if (response.members === 'Add an engineer') {

            addEngineer();

        } else if (response.members === 'Add an intern') {
            
            addIntern();

        } else {
            console.log("Team complete!");

        };
    })
};

const addManager = () => {
    inquirer.prompt(managerQuestions).then(response => {
        // console.log(response);

        // Create manager object and save to team array
        this.manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamArray.push(this.manager);

        if (response.members === 'Add an engineer') {

            addEngineer();

        } else if (response.members === 'Add an intern') {
            
            addIntern();

        } else {
            console.log("Team complete!");

        };
        // this.engineer = new Engineer(response.name, response.id, response.email) 
        // teamArray.push(this.engineer);

        // Create engineer object and save to team array


        console.log(teamArray);

        // addManager();

        writeHTML("Team-Profile.html", teamArray);
    })

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

    addManager();
    
}
// FUNCTION CALL RUN PROGRAM
// init();

new Program().initializeProgram();