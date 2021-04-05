class Engineer {
    constructor(input) {
            this.question = {
                q1: 'Engineer name: ',
                q2: 'Engineer email: ',
                q3: 'Engineer Github: ',
                q4: 'Engineer role: ',

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
                    this.github = answer;
                })
            })
            .then(() => {
                return this.input(this.question.q4.red).then(answer => {
                    this.role = answer;
                });
            })
    }


    generateHtml = () => {
        return `
                <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Engineer</h5>
                    <p class="card-text">Engineer information.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Engineer Name: ${this.name}</li>
                    <li class="list-group-item">Email: ${this.email}</li>
                    <li class="list-group-item">Github: <a href="https://github.com/${this.github}/"</a>Github</li>
                    <li class="list-group-item">ID: ${this.role}</li>                    
                </ul>                
                </div>`
    };
}


module.exports = Engineer;