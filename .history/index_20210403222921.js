const Employee = require('./Employee');
const fs = require('fs');
const colors = require('colors');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

let closing = function closing() {
    rl.question('Team Profiles complete!'.yellow, closing => {})
    rl.close();
};



function menu() {

    rl.question('Select from the following:\r\n0: Employee Info '.yellow + '\r\n' + "1: Manager Info ".blue + '\r\n' + '2: Intern Info '.green + '\r\n' + '3: Engineer Info '.red + "\r\n" + '4: Exit ',
        menu => {
            // TODO: Log the answer in a database
            let elem;
            switch (menu) {
                case '0':
                    {
                        elem = "";
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
                    // menu();
            }

        }

    );



}
menu();

module.exports = menu();