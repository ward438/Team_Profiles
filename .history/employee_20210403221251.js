const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
const index = require('./Index');
const fs = require('fs');
const engineer = require('./Engineer');
const intern = require('./Intern');
const manager = require('./Manager');
const colors = require('colors');


class Employee {
    constructor(name, id, email, getName) {
        this.name = name;
        this.id = id;
        this.email = email;
    }





    // getId()




    // getEmail()


    // // returns 'Employee'
    // getRole()




};




module.exports = Employee;