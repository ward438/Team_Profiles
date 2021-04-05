class Intern {
    constructor(input) {
            this.question = {
                q1: 'Intern name: ',
                q2: 'Intern email: ',
                q3: 'Intern number: ',
                q4: 'Intern ID: ',
                q5: 'Affiliated school: ',

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
                    this.role = answer;
                })
            })
            .then(() => {
                return this.input(this.question.q4.red).then(answer => {
                    this.role = answer;
                })
            })
            .then(() => {
                return this.input(this.question.q5.red).red(answer => {
                    this.role = answer;
                })
            })
    }


    generateHtml = () => {
        return `<p>${this.email}</p>`;
    }

};

module.exports = Intern;