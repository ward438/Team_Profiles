const Employee = require('./Employee');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
const fs = require('fs');
const colors = require('colors');


let closing = function closing() {
    readline.question('Team Profiles complete!'.yellow, closing => {

    })
    readline.close();
};



let gName = new Employee()
gName.getName();


function menu() {
    readline.question('Select from the following:\r\n0: Employee Info '.yellow + '\r\n' + "1: Manager Info ".blue + '\r\n' + '2: Intern Info '.green + '\r\n' + '3: Engineer Info '.red + "\r\n" + '4: Exit ',
        menu => {
            // TODO: Log the answer in a database

            let elem;
            switch (menu) {
                case '0':
                    {
                        elem = gName;


                    };
                    break;
                case '1':
                    {
                        elem = header();
                    }
                    break;
                case '2':
                    {
                        elem = description();
                    }
                    break;
                case '3':
                    {
                        elem = instructions();
                    }
                    break;
                case '4':
                    {
                        elem = closing();
                    }
                    break;
                default:
                    menu();
            }

        }

    );



}
menu();