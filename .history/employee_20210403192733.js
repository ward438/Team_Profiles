const readline = require('readline');
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
        rl.question('Enter employee name', $(this.name) => {
            // TODO: Log the answer in a database
            console.log(`Employee name: ${answer}`);

            rl.close();
        })
    }




    // getId()




    // getEmail()


    // getRole() returns 'Employee'
    // getRole()




};


getName()

module.exports = Employee;