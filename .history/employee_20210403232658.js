const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});


class Employee {
    constructor() {
        // this.employee = employee;
        this.question = {
            q1: 'Employee Name: ',
            q2: 'Employee email: ',
        }
        this.name = this.getName();
        this.email = this.getEmail();
        this.id = null; // todo - use a library to generate uuid

    }

    getName = () => {
        return rl.question(this.question.q1.red, qtn => {
            console.log(`Employee name is: ${qtn}`, '\n');
            if (err)
                throw err;

        })
    }

    getEmail = () => {
        return rl.question(this.question.q2.red, qtn => {
            console.log(`Employee email is: ${qtn}`, '\n');
            if (err)
                throw err;

        })
    }

    generateHtml = () => {
        return `<p>${this.email}</p>`;
    }



}


module.exports = Employee;