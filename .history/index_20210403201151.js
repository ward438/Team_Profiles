const Employee = require('./Employee');

function getName() {
    readline.question('Select from the following:\r\n0: Employee Info '.yellow + '\r\n' + "1: Manager Info ".blue + '\r\n' + '2: Intern Info '.green + '\r\n' + '3: Engineer Info '.red + "\r\n" + '4: Exit ',
        getName => {
            // TODO: Log the answer in a database



        })
}

getName();