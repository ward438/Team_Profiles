const Employee = require('./Employee');

function getName() {
    rl.question('Enter employee name', (Employee.name) => {
        // TODO: Log the answer in a database
        console.log(`Employee name: ${answer}`);

        rl.close();
    })
}

getName();