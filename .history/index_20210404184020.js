const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const fs = require('fs');
const colors = require('colors');
const readline = require('readline');

function write(array, path) {
    fs.writeFileSync(path, JSON.stringify(array));
}

function read(path) {
    try {
        const fileContent = fs.readFileSync(path);
        const array = JSON.parse(fileContent);
        return array;
    } catch {
        return [];
    }
}



// ________________________________________________________
let employees = read('employees.json');
let managers = read('managers.json');
let interns = read('interns.json');
let engineers = read('engineers.json');
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
                        // - - - - - - - - - - - - - - - - - - - 
                        htmlInit = `
                        <html lang="en">
                        <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
                        
                        <nav class="navbar navbar-light bg-primary">
                        <div class="container-fluid">
                          <span class="navbar-brand mb-0 h1 text-white"style="text-align:center">Team Profiles</span>
                        </div>                        
                        </nav>

                        </head>
                        
                        <body>
                        <div class="container">
                            <div class="row">                            
                                <div class="col-3">${managersHtml}</div>                   
                                <div class="col-3">${employeesHtml}</div>              
                                <div class="col-3">${engineersHtml}</div>                   
                                <div class="col-3">${internsHtml}</div>                            
                            </div>   
                        </div>
                        </body></html>`;
                        //- - - - - - - - - - - - - - - - - - - - - - - - 

                        fs.writeFile(`index.html`, `${htmlInit}`, (err) => {
                            if (err) {
                                throw err;
                            }
                        });
                        write(employees, 'employees.txt');
                        let employees = read('employees.txt')
                        console.log(employees);
                        // console.log(employeesHtml);
                        // console.log(managersHtml);
                        // console.log(internsHtml);
                        // console.log(engineersHtml);

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



// `${employeesHtml}` + `${managersHtml}` + `${engineersHtml}` + `${internsHtml}`