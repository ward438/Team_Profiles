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
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Intern</h5>
                    <p class="card-text">Intern information.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${this.name}</li>
                    <li class="list-group-item">${this.email}</li>
                    <li class="list-group-item">${this.number}</li>
                    <li class="list-group-item">${this.id}</li>
                    <li class="list-group-item">${this.school}</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>`;
    }


    // return
    // //     `
    // // <div class="card" style="width: 18rem;">
    // //     <img src="..." class="card-img-top" alt="...">
    // //     <div class="card-body">
    // //         <h5 class="card-title">Intern</h5>
    // //         <p class="card-text">Intern information.</p>
    // //     </div>
    // //     <ul class="list-group list-group-flush">
    // //         <li class="list-group-item">${this.name}</li>
    // //         <li class="list-group-item">${this.email}</li>
    // //         <li class="list-group-item">${this.number}</li>
    // //         <li class="list-group-item">${this.id}</li>
    // //         <li class="list-group-item">${this.school}</li>
    // //     </ul>
    // //     <div class="card-body">
    // //         <a href="#" class="card-link">Card link</a>
    // //         <a href="#" class="card-link">Another link</a>
    // //     </div>
    // </div>`



    // return (`<div> <br> <p>Intern name: ${this.name}</p>` + '\n' + `<p>Intern email: ${this.email}</p>` + '\n' + `<p>Intern phone number: ${this.number}</p>` + '\n' + `<p>Intern ID: ${this.id}</p>` + '\n' + `<p>Intern school: ${this.school}</p></div>`);
};

module.exports = Intern;