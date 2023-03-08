// require html.js to create page
const html = require('./src/html')

// require team information for cards
const Manager = require('.lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const fs = require('fs');
const inquirer = require('inquirer');
const { mainModule } = require('process');

const team = [];

const generateManager = () => {
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
        team.push(manager);
    })
};

