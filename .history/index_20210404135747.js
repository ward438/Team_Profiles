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
                        bootstrap = '<link href="https: //cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">'
                        bootstrapJs = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>`
                        htmlBody = `<body><div class="container">
                        <div class="row">
                          <div class="col">col</div>
                          <div class="col">col</div>
                          <div class="col">col</div>
                          <div class="col">col</div>
                        </div>
                        <div class="row">
                          <div class="col-8">col-8</div>
                          <div class="col-4">col-4</div>
                        </div>
                      </div></body>`;

                        //- - - - - - - - - - - - - - - - - - - - - - - - 

                        fs.appendFile(`index.html`, `${bootstrap}` + `${bootstrapJs}` + `${htmlBody}` +
                            `${employeesHtml}` + `${managersHtml}` + `${engineersHtml}` + `${internsHtml}`, (err) => {
                                if (err) {
                                    throw err;
                                }
                            });
                        console.log(employeesHtml);
                        console.log(managersHtml);
                        console.log(internsHtml);
                        console.log(engineersHtml);
                    }
                    break;
                default:
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