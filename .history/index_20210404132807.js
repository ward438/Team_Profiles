const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const fs = require('fs');
const colors = require('colors');
const readline = require('readline');
// ________________________________________________________
let employees = [];
let managers = [];
let interns = [];
let engineers = [];
// ________________________________________________________





function input(prompt) {
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve, reject) => {
        return rl.question(prompt, (answer) => {
            rl.close();
            return resolve(answer);
        }, () => {
            rl.close();
            throw Error("input failed");
        });
    });
}

function menu() {
    return input('Select from the following:\r\n0: Employee Info '.yellow + '\r\n' + "1: Manager Info ".blue + '\r\n' + '2: Intern Info '.green + '\r\n' + '3: Engineer Info '.red + "\r\n" + '4: Exit\r\n ')
        .then(selection => {
            // TODO: Log the answer in a database

            switch (selection) {
                case '0':
                    {
                        employee = new Employee(input);
                        employees.push(employee);
                        employee.askQuestions().then(() => menu());
                    };
                    break;
                case '1':
                    {
                        manager = new Manager(input);
                        managers.push(manager);
                        manager.askQuestions().then(() => menu());
                    }

                    break;
                case '2':
                    {
                        intern = new Intern(input);
                        interns.push(intern);
                        intern.askQuestions().then(() => menu());


                    }
                    break;
                case '3':
                    {
                        {
                            engineer = new Engineer(input);
                            engineers.push(engineer);
                            engineer.askQuestions().then(() => menu());
                        }
                    }
                    break;
                case '4':
                    {
                        console.log('Team Profiles complete!'.yellow);
                        employeesHtml = buildHTML(employees);
                        managersHtml = buildHTML(managers);
                        engineersHtml = buildHTML(engineers);
                        internsHtml = buildHTML(interns);

                        // todo write to file via replace

                        console.log(employeesHtml);
                        console.log(managersHtml);
                        fs.appendFile(`index.html`, `${internsHtml}`);
                        console.log(engineersHtml);
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