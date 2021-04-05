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
                    this.role = answer;
                })
            })
            .then(() => {
                return this.input(this.question.q4.red).then(answer => {
                    this.role = answer;
                })
            })
    }


    generateHtml = () => {
        return `<p>${this.email}</p>`;
    }











    // getGithub();

    // // will return 'Engineer'
    // getRole();


}


module.exports = Engineer;