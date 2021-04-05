class Employee {
    constructor(input) {
        // this.employee = employee;
        this.question = {
            q1: 'Employee Name: ',
            q2: 'Employee email: ',
        }
        this.input = input;
        console.log('fffff')
        this.name = this.input(this.question.q1.red).then(() => {
            this.email = this.input(this.question.q2.red)
        });

        this.id = null; // todo - use a library to generate uuid

    }


    generateHtml = () => {
        return `<p>${this.email}</p>`;
    }



}


module.exports = Employee;