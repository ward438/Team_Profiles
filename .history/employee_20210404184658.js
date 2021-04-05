const { v4: uuidv4 } = require('uuid');

class Employee {
    constructor(input) {
        this.question = {
            q1: 'Employee name: ',
            q2: 'Employee email: ',
            q3: 'Employee ID: ',
        }
        this.input = input;
        this.id = uuidv4();
    }

    buildFromJson(data) {
            for (var prop in data) {
                // for safety you can use the hasOwnProperty function
                this[prop] = data[prop];
            }
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
            });
    }

    generateHtml = () => {
        return `
                <div class="card" style="width: 18rem; margin-top: 30px">               
                <div class="card-body bg-primary">
                    <h5 class="card-title text-white" style="text-align:center">Employee Information</h5>                
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee Name: ${this.name}</li>
                    <li class="list-group-item">Email:<a href ='mailto: ${this.email}'>Contact</a></li>
                    <li class="list-group-item">ID: ${this.id}</li>
                                      
                </ul>                
                </div>`
    };
}


module.exports = Employee;