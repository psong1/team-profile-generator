// require html.js to create page
const html = require('./src/html')

// require team information for cards
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateTeam = require("./src/html.js")
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");
const { mainModule } = require('process');

const teamArr = [];

const createTeam = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'addEmployee',
            message: `What is the employee's role?`,
            choices: ['Manager', 'Engineer', 'Intern', 'All team members have been added!']
        }
    ])
    .then(userInput => {
        switch (userInput.addEmployee) {
            case 'Manager':
                addManager();
                break;
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                writeFile();
                break;
        }
    })
}

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: `What is the manager's name?`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the manager's ID?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the manager's email?`,
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is the manager's office number?`,
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        teamArr.push(manager);
        createTeam();
    })
};

const addEngineer = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: `What is the engineer's name?`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the engineer's ID?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the engineer's email?`,
        },
        {
            type: 'input',
            name: 'github',
            message: `What is the engineer's github username?`,
        }
    ])
    .then(engineerInput => {
        const { name, id, email, github } = engineerInput;
        const engineer = new Engineer (name, id, email, github);
        teamArr.push(engineer);
        createTeam();
    })
};

const addIntern = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: `What is the intern's name?`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the intern's ID?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the intern's email?`,
        },
        {
            type: 'input',
            name: 'school',
            message: `Where does the intern go to school?`,
        }
    ])
    .then(internInput => {
        const { name, id, email, school } = internInput;
        const intern = new Intern (name, id, email, school)
        teamArr.push(intern);
        createTeam();
    })
};

const writeFile = () => {
    fs.writeFileSync(distPath, generateTeam(teamArr), 'UTF-8')
    console.log(`Your team's profile has been created!`);
}

createTeam();
