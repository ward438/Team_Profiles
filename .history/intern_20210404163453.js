class Intern {
    constructor(input, id) {
        this.question = {
            q1: 'Intern name: ',
            q2: 'Intern email: ',
            q3: 'Intern number: ',
            q4: 'Intern ID: ',
            q5: 'Affiliated school: ',

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
                        this.number = answer;
                    })
                })
                .then(() => {

                    return this.input(this.question.q4.red).then(answer => {
                        this.id = answer;

                    })
                })
                .then(() => {
                    return this.input(this.question.q5.red).then(answer => {
                        this.school = answer;
                    })
                });
        }
        //- - - - - - - - - - - - - - - - - - - - - -
    generateHtml = () => {
        return `
            <div class="card" style="width: 18rem;">
               
            <div class="card-body bg-primary">
            <h5 class="card-title text-white">Intern</h5>
                    <p class="card-text">Intern information.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Intern Name: ${this.name}</li>
                    <li class="list-group-item">Email: ${this.email}</li>
                    <li class="list-group-item">Phone Number: ${this.number}</li>
                    <li class="list-group-item">ID: ${this.id}</li>
                    <li class="list-group-item">School: ${this.school}</li>
            </ul>                
            </div>`
    };



};

module.exports = Intern;