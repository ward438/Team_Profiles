class Employee {
    constructor(input) {
        // this.employee = employee;
        this.question = {
            q1: 'Employee name: ',
            q2: 'Employee email: ',
            q3: 'Employee github: ',
        }
        this.input = input;
        this.id = null; // todo - use a library to generate uuid

    }

    askQuestions = () => {
        return this.input(this.question.q1.red)
            .then((answer) => {
                this.name = answer;
            })
            .then(() => {
                return this.input(this.question.q2.red).then(answer => {
                    this.email = answer;
                })
            });
    }


    generateHtml = () => {
        return `<p>${this.email}</p>`;
    }



}


module.exports = Employee;