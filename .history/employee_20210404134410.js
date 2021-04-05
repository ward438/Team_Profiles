class Employee {
    constructor(input, id) {
            this.question = {
                q1: 'Employee name: ',
                q2: 'Employee email: ',
                q3: 'Employee ID: ',
            }
            this.input = input;
            this.id = id;

        }
        // __________________________________________________________________
    askQuestions = () => {
        return this.input(this.question.q1.red)
            .then((answer) => {
                this.name = answer;
            })
            .then(() => {
                return this.input(this.question.q2.red).then(answer => {
                    this.email = answer;
                })
            })
            .then(() => {
                return this.input(this.question.q3.red).then(answer => {
                    this.id = answer;
                })
            });
    }

    generateHtml = () => {
        return (`<div> <br> <p>Employee name: ${this.name}</p>` + '\n' + `<p>Employee email: ${this.email}</p>` + '\n' + `<p>Employee ID: ${this.id}</p></div>`);
    }
}


module.exports = Employee;