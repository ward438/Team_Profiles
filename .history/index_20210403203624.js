const Employee = require('./Employee');

function menu() {
    readline.question('Select from the following:\r\n0: Employee Info '.yellow + '\r\n' + "1: Manager Info ".blue + '\r\n' + '2: Intern Info '.green + '\r\n' + '3: Engineer Info '.red + "\r\n" + '4: Exit ',
        menu => {
            // TODO: Log the answer in a database
            let elem;
            switch (menu) {
                case '0':
                    {
                        elem = getName()
                    };
                    break;
                default:
                    menu();
            }
            //     break;
            // case '1':
            //     {
            //         elem = header();
            //     }
            //     break;
            // case '2':
            //     {
            //         elem = description();
            //     }
            //     break;
            // case '3':
            //     {
            //         elem = instructions();
            //     }
            //     break;
            // case '4':
            //     {
            //         elem = closing();
            //     }



        }

    );
};




menu();