const Employee = require('./Employee');
const fs = require('fs');
const colors = require('colors');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let closing = () => {
    rl.question('Team Profiles complete!'.yellow, closing => {})
    rl.close();
};
let employees = [];
let managers = [];
let interns = [];
let engineers = [];

input => (prompt) {
    return new Promise((resolve, reject) => {
        return this.rl.question(prompt, (answer) => {
            return resolve(answer);
        }, () => {
            throw Error("input failed");
        });
    });
}

function menu() {

    input('Select from the following:\r\n0: Employee Info '.yellow + '\r\n' + "1: Manager Info ".blue + '\r\n' + '2: Intern Info '.green + '\r\n' + '3: Engineer Info '.red + "\r\n" + '4: Exit ')
        .then(selection => {
            // TODO: Log the answer in a database
            switch (selection) {
                case '0':
                    {
                        employee = new Employee(rl);
                        employees.push(employee);
                        console.log('a777777')
                    };
                    break;
                case '1':
                    {
                        userInput = header();
                    }
                    break;
                case '2':
                    {
                        userInput = description();
                    }
                    break;
                case '3':
                    {
                        userInput = instructions();
                    }
                    break;
                case '4':
                    {
                        userInput = closing();
                    }
                    break;
                default:
                    // menu();
            }
        });


}

buildHTML = (listOfUsers) => {
    htmlData = "";
    listOfUsers.forEach(user => {
        htmlData += user.generateHtml();
    });
    return htmlData;
}

menu();

employeesHtml = buildHTML(employees);
managersHtml = buildHTML(managers);

// todo write to file via repalce

console.log(employeesHtml);