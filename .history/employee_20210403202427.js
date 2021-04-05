const readline = require('readline');
const fs = require('fs');
const engineer = require('./Engineer');
const intern = require('./Intern');
const manager = require('./Manager');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


class Employee {
    constructor(name, id, email) {
        this.name = 'name';
        this.id = 'id';
        this.email = 'email';
    }


    getName() {
        readline.question("Employee's name:")

    }



    // getId()




    // getEmail()


    // // returns 'Employee'
    // getRole()




};




module.exports = Employee;