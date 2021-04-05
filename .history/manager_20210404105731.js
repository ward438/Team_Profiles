class Manager {
    constructor(input) {
            this.question = {
                q1: 'Manager name: ',
                q2: 'Manager email: ',
                q3: 'Office number: ',
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
            });

    }


    generateHtml = () => {
        return `<p>${this.email}</p>`;
    }









    // // will return 'Manager'
    // getRole();



}

module.exports = Manager;