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

    randID = () => {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }





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
            return this.input(this.question.q5.red).then(answer => {
                this.role = answer;
            })
        });
}



generateHtml = () => {
    return `<p>${this.email}</p>`;
}

};

module.exports = Intern;