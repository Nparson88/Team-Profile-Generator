const inquire = require('inquire');
const fs = require('fs');

const employee = require('./lib/employee')
const manager = require('./lib/manager')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern');
const { type } = require('node:os');

let team = [];
const newMember = function(){
    inquire.prompt([
        {
            type: 'checkbox',
            message:'What is the role of your new member? Or are you finished?',
            choices: ['Manager','Engineer','Intern','All done']
        }
    ])
}
const newManager = function(){
    inquire.prompt([
     {
         type : 'input',
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
    }
     ])
}
.then(function(data) {
    const mngName = data.mngName
    const mngEmail = data.mngEmail
    const mngPhone = data.mngPhone

})
const newEngineer = function(){
    inquire.prompt[(
        {
            type: 'input',
            message: 'First and last name of new engineer',
            name: 'engName'
        },
        {
            type: 'input',
            message:'Email of new engineer',
            name: 'engEmail'
        },
        {
            type: 'input',
            message:'Github username of new engineer',
            name: 'engGithub'
        }
    )]
}
.then(function(data) {
    const engName = data.engName
    const engEmail = data.engEmail
    const engPhone = data.engPhone
})
 const newIntern = function(){
     inquire.prompt([
         {
             type:'input',
             message:'First and last name of new intern',
             name:'intName'
         },
         {
            type: 'input',
            message:'Email of new intern',
            name:'intEmail'
         },
         {
             type:'input',
             message:'Github username of new intern',
             name:'intGithub'
         }
     ])
 }
 .then(function(data) {
    const intName = data.intName
    const intEmail = data.intEmail
    const intPhone = data.intPhone
})