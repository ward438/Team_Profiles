const readline = require('readline');
const engineer = require('engineer');
const intern = require('intern');
const manager = require('manager');

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
        rl.question('Enter employee name', (answer) => {
            // TODO: Log the answer in a database
            console.log(`Thank you for your valuable feedback: ${answer}`);

            rl.close();
        });
    }




    // getId()




    // getEmail()


    // getRole() returns 'Employee'
    getRole()




};

employee.getName();