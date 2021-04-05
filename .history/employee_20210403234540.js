class Employee {
    constructor(readline) {
        // this.employee = employee;
        this.question = {
            q1: 'Employee Name: ',
            q2: 'Employee email: ',
        }
        this.rl = readline;
        this.name = this.getName();
        this.email = this.getEmail();
        this.id = null; // todo - use a library to generate uuid

    }

    getName = () => {
        return this.rl.question(this.question.q1.red, answer => {
            console.log(`Employee name is: ${answer}`, '\n');
            return answer;

        })
    }

    getEmail = () => {
        return this.rl.question(this.question.q2.red, answer => {
            console.log(`Employee email is: ${answer}`, '\n');
            this.rl.close();
            return answer

        })
    }

    generateHtml = () => {
        return `<p>${this.email}</p>`;
    }



}


module.exports = Employee;