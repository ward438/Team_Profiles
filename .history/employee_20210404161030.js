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
        return `
                <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Employee</h5>
                    <p class="card-text">Employee information.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee Name: ${this.name}</li>
                    <li class="list-group-item">Email: ${this.email}</li>
                    <li class="list-group-item">Phone number: ${this.id}</li>
                                      
                </ul>                
                </div>`
    };
}


module.exports = Employee;