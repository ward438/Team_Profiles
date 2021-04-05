const readline = require('readline');
const fs = require('fs');
const engineer = require('./Engineer');
const intern = require('./Intern');
const manager = require('./Manager');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [

]



class Employee {
    constructor(name, id, email) {
        this.name = 'name';
        this.id = 'id';
        this.email = 'email';
    }

    getName() {
        const questions = [
            q1 = "Employee Name: ",
        ];

        readline.question(questions[0].red, name => {
            console.log(`Employee name: ${name}`, '\n');
            fs.appendFile('index.html', `${name}` + "\r\n" + "\r\n", (err) => {
                if (err)
                    throw err
            })

        })

    }



    // getId()




    // getEmail()


    // // returns 'Employee'
    // getRole()




};




module.exports = Employee;