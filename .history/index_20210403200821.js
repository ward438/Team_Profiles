const Employee = require('./Employee');

function getName() {
    readline.question('Enter employee name', (getName) => {
        // TODO: Log the answer in a database
        console.log(`Employee name: ${answer}`);

        rl.close();
    })
}

getName();