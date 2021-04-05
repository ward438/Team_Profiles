class Employee {
    constructor(readline) {
        // this.employee = employee;
        this.question = {
            q1: 'Employee Name: ',
            q2: 'Employee email: ',
        }
        this.rl = readline;
        this.name = await this.getName();
        console.log(this.name);
        this.email = this.getEmail();
        this.id = null; // todo - use a library to generate uuid

    }

    input(prompt) {
        return new Promise((callbackFn, errorFn) => {
            this.rl.question(prompt, (uinput) => {
                callbackFn(uinput);
            }, () => {
                throw Error("input failed");
            });
        });
    }

    getName = () => {
        return this.input(this.question.q1.red);
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