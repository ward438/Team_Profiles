class Manager {
    constructor(input) {
            this.question = {
                q1: 'Manager name: ',
                q2: 'Manager email: ',
                q3: 'Office number: ',
                q4: 'Manager ID: ',
            }
            this.input = input;
            this.id = null; // todo - use a library to generate uuid

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
            .then(() => {
                return this.input(this.question.q4.red).then(answer => {
                    this.id = answer;
                });
            })
    }


    generateHtml = () => {
        return `
                <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Manager</h5>
                    <p class="card-text">Manager information.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${this.name}</li>
                    <li class="list-group-item">${this.email}</li>
                    <li class="list-group-item">${this.number}</li>
                    <li class="list-group-item">${this.id}</li>
                    
                </ul>                
                </div>`
    };
}

module.exports = Manager;