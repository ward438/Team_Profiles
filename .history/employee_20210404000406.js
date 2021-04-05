class Employee {
    constructor(readline) {
        // this.employee = employee;
        this.question = {
            q1: 'Employee Name: ',
            q2: 'Employee email: ',
        }
        this.rl = readline;
        this.name = this.input(this.question.q1.red).then(() => {
            this.email = this.input(this.question.q2.red)
        });

        this.id = null; // todo - use a library to generate uuid

    }

    input(prompt) {
        return new Promise((resolve, reject) => {
            return this.rl.question(prompt, (answer) => {
                return resolve(answer);
            }, () => {
                throw Error("input failed");
            });
        });
    }

    generateHtml = () => {
        return `<p>${this.email}</p>`;
    }



}


module.exports = Employee;