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
                    this.role = answer;
                })
            })
            .then(() => {

                return this.id(this.question.q4.red).then(answer => {
                    this.role = answer;

                })
            })
            .then(() => {
                return this.input(this.question.q5.red).then(answer => {
                    this.role = answer;
                })
            });
    }


    randID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return this.input(this.question.q4.red.v.toString(16));

        });


    }



    generateHtml = () => {
        return `<p>${this.email}</p>`;
    }

};

module.exports = Intern;