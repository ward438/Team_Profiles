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
    constructor(employee, question) {
        //     this.name = name;
        //     this.id = id;
        //     this.email = email;

        this.question = {
            q1: 'Employee Name: ',
        }
        getName = () => {
            rl.question(question.q1.red, qtn => {
                console.log(`Employee name is: ${qtn}`, '\n');
                if (err)
                    throw err;

            })
        }
    }

}















module.exports = Employee;