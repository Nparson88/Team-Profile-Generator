const inquirer = require('inquirer');
const fs = require('fs');
const style = require('./css/style')
const employee = require('./lib/employee')
const manager = require('./lib/manager')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern');

// const { type } = require('node:os');

let team = [];
function newTeam() {
    inquirer.prompt([
        {
            type: "input",
            name: "teamName",
            message: "What is the name of your team?",
        }
    ])
        .then(function (data) {
            const name = data.teamName;
            team.push(name);
            newManager();
        })
}
function newMember() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What is the role of your new member? Or are you finished?',
            choices: ['Engineer', 'Intern', 'All done'],
            name: 'newHire'
        }
    ])

        .then(function (data) {
            switch (data.newHire) {
                case 'Engineer':
                    newEngineer()
                    break;
                case 'Intern':
                    newIntern()
                    break;
                case 'All done':
                    writeHtml()
                    break;
            }
        })
}
function newManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'First and last name of new manager',
            name: 'mngName'
        },
        {
            type: 'input',
            message: 'Email address of new manager',
            name: 'mngEmail'
        },
        {
            type: 'input',
            message: 'Phone number of new manager',
            name: 'mngPhone'
        },
    ])

        .then(function (data) {
            const number = team.length + 1
            const name = data.mngName
            const email = data.mngEmail
            const phone = data.mngPhone
            const addManager = new manager(name, number, email, phone)
            team.push(addManager)
            newMember()

        })
}
const newEngineer = function () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'First and last name of new engineer',
            name: 'engName'
        },
        {
            type: 'input',
            message: 'Email of new engineer',
            name: 'engEmail'
        },
        {
            type: 'input',
            message: 'Github username of new engineer',
            name: 'engGithub'
        }
    ])

        .then(function (data) {
            const number = team.length + 1
            const name = data.engName
            const email = data.engEmail
            const github = data.engGithub
            const addEngineer = new engineer(name, number, email, github)
            console.log(data)
            team.push(addEngineer)
            newMember()

        })
}
const newIntern = function () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'First and last name of new intern',
            name: 'intName'
        },
        {
            type: 'input',
            message: 'Email of new intern',
            name: 'intEmail'
        },
        {
            type: 'input',
            message: 'School new intern is attending',
            name: 'intSchool'
        }
    ])

        .then(function (data) {
            const number = team.length + 1
            const name = data.intName
            const email = data.intEmail
            const school = data.intSchool
            const addIntern = new intern(name, number, email, school)
            team.push(addIntern)
            newMember()
        })
}
const writeHtml = function () {
    const finishedHtml = []
    const htmlHead = `<!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <style>
   ${style}
  </style>
   <title> ${team.name}</title>
 </head>`

    finishedHtml.push(htmlHead)
    for (let i = 1; i < team.length; i++) {
        let newCard = ` <div class="member-card">
    <div class="card-top">
        <h2>${team[i].name}</h2>
        <h2>${team[i].title}</h2>
    </div>
    <div class="card-bottom">
        <p>Employee number: ${team[i].number}</p>
        <p>Email: <a href="mailto:${team[i].email}">${team[i].email}</a>></p>
`
        if (team[i].phone) {
            newCard += `
    <p>${team[i].phone}</p>
    `
        }
        if (team[i].github) {
            newCard += `
    <p>GitHub: <a href="https://github.com/${team[i].github}">${team[i].github}</a></p>
    `
        }
        if (team[i].school) {
            newCard += `
    <p>School: ${team[i].school}</p>
    `
        }
        newCard += `
</div>
</div>
`
        finishedHtml.push(newCard);
    }

    const htmlEnd = `
</div>
</body>
</html>`

    finishedHtml.push(htmlEnd);

    fs.writeFile("index.html", finishedHtml.join(""), (err) =>
        err ? console.log(err) : console.log('generated new team')
    );
}


newTeam();

