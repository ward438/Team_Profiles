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



    generateHtml = () => {
        fs.appendFile('index.html', `<p>Intern name: ${this.name}</p>` + '\n' + `<p>Intern email: ${this.email}</p>` + '\n' + `<p>Intern phone number: ${this.number}</p>` + '\n' + `<p>Intern ID: ${this.id}</p>` + '\n' + `<p>Intern school: ${this.school}</p>`);
    }

};

module.exports = Intern;