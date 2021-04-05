const Employee = require('./Employee');

function getName() {
    readline.question('Select from the following:\r\n0: Employee Name '.yellow + '\r\n' + "1: Manager Info ".blue + '\r\n' + '2: Description '.green + '\r\n' + '3: Installation instructions '.red + "\r\n" + '4: Exit ' (getName) => {
        // TODO: Log the answer in a database
        console.log(`Employee name: ${answer}`);

        rl.close();
    })
}

getName();