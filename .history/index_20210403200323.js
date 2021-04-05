const Employee = require('./Employee');

getName()
rl.question('Enter employee name', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Employee name: ${answer}`);

    rl.close();
})