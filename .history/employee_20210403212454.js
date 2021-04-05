const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
const index = require('./index');
const fs = require('fs');
const engineer = require('./Engineer');
const intern = require('./Intern');
const manager = require('./Manager');
const colors = require('colors');


class Employee {
    constructor(name, id, email) {
        this.name = 'name';
        this.id = 'id';
        this.email = 'email';
    }


    getName = function getName() {
        const questions = {
            q1: 'Employee Name: ',

        }
        rl.question(questions.q1.red, name => {
            console.log(`Employee name: ${name}`, '\n');
            fs.appendFile(`index.html`, `${name}` + "\r\n" + "\r\n", (err) => {
                if (err)
                    throw err
                menu();
            })

        })

    };



    // getId()




    // getEmail()


    // // returns 'Employee'
    // getRole()




};




module.exports = Employee;