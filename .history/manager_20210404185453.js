const { v4: uuidv4 } = require('uuid');

class Manager {
    constructor(input) {
        this.question = {
            q1: 'Manager name: ',
            q2: 'Manager email: ',
            q3: 'Office number: ',
            q4: 'Manager ID: ',
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
            })
            .then(() => {
                return this.input(this.question.q3.red).then(answer => {
                    this.number = answer;
                })
            })
    }


    generateHtml = () => {
        return `
                <div class="card" style="width: 18rem; margin-top: 30px">               
                <div class="card-body bg-primary">
                <h5 class="card-title text-white"style="text-align:center">Manager Information</h5>                 
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Manager Name: ${this.name}</li>
                    <li class="list-group-item">Email:<a href ='mailto: ${this.email}'>Contact</li>
                    <li class="list-group-item">Office number: ${this.number}</li>
                    <li class="list-group-item">ID: ${this.id}</li>                    
                </ul>                
                </div>`
    };
}

module.exports = Manager;