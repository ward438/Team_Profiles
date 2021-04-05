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


    // randID = () => {
    //     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    //         var r = Math.random() * 16 | 0,
    //             v = c == 'x' ? r : (r & 0x3 | 0x8);
    //         return this.id(toString(16));

    //     });


    // }
    // use replace to replace existing html on index with whatever is needed for intern.js


    generateHtml = () => {


        `
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>`



        return (`<div> <br> <p>Intern name: ${this.name}</p>` + '\n' + `<p>Intern email: ${this.email}</p>` + '\n' + `<p>Intern phone number: ${this.number}</p>` + '\n' + `<p>Intern ID: ${this.id}</p>` + '\n' + `<p>Intern school: ${this.school}</p></div>`);
    }

};

module.exports = Intern;