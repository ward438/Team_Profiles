const Employee = require('./Employee');

let getName = getName() {
    rl.question('Enter employee name', (Employee.name) => {
        // TODO: Log the answer in a database
        console.log(`Employee name: ${answer}`);

        rl.close();
    })
}

getName();