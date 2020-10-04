const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamArray = [];
const {
    writeFile,
    copyFile
} = require('./utils/generate-site');

// Manager questions array
const managerQuestions = [
    {
        type: 'input',
        name: 'team',
        message: 'Enter the name of your team.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the name of your team!");
                return false;
            }
        }
    },
    {
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
];

// Engineer question array
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

// Intern questions array
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

// Create manager object and save to team array
const addManager = () => {
    return inquirer.prompt(managerQuestions).then(answers => {
       
        
        this.manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber,
            answers.team
        );

        teamArray.push(this.manager);
        return answers;
        
    }).then(answers => {
        if (answers.members === 'Add an engineer') {

            return addEngineer(answers)

        } else if (answers.members === 'Add an intern') {

            return addIntern(answers);

        } else {
            console.log("Team complete!");
            return teamArray;
        }
    })
}

// Create intern object and save to team array
const addIntern = (answers) => {

    if (answers.members === 'Add an engineer') {

        return false;

    } else if (answers.members === 'My team is complete') {
        console.log("Team complete!");
        return teamArray;

    } else {

        console.log(`
=================
Add an Intern
=================
`);

        return inquirer.prompt(internQuestions).then(answers => {
            this.intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            );

            teamArray.push(this.intern);
            return answers;

        }).then(answers => {
            if (answers.members === 'Add an engineer') {
    
                return addEngineer(answers)
    
            } else if (answers.members === 'Add an intern') {
    
                return addIntern(answers);
    
            } else {
                console.log("Team complete!");
                return teamArray;
            }
        })
    };
};

// Create engineer object and save to team array
const addEngineer = (answers) => {

    if (answers.members === 'Add an intern') {

        return false;

    } else if (answers.members === 'My team is complete') {
        console.log("Team complete!");
        return teamArray;

    } else {

        console.log(`
=================
Add an Engineer
=================
`);

        return inquirer.prompt(engineerQuestions).then(answers => {
            this.engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );

            teamArray.push(this.engineer);
            return answers;

        }).then(answers => {
            if (answers.members === 'Add an engineer') {
    
                return addEngineer(answers)
    
            } else if (answers.members === 'Add an intern') {
    
                return addIntern(answers);
    
            } else {
                console.log("Team complete!");
                return teamArray;
            }
    
        })
    };

}

// Initialize program and start Promise chain
addManager()
    .then(teamArray => {
        return generatePage(teamArray);
    })
    .then(data => {
        return writeFile(data);
    })
    .then(writeFileResponse => {
       
        return copyFile();
    })
    .then(copyFileResponse => {
       
    })
    .catch(err => {
        console.log(err);
    });
