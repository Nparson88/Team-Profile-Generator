const inquire = require('inquire');
const fs = require('fs');

const employee = require('./lib/employee')
const manager = require('./lib/manager')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')

let team = [];

const intro = function(){
    inquire.prompt([
        {
            type:'input',
            Message:"Please enter the name of your team",
            name: "team",
        }
        
    
    
    
    
    
    ])
}