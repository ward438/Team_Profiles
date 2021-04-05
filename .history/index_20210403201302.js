const Employee = require('./Employee');

function getName() {
    readline.question('Select from the following:\r\n0: Employee Info '.yellow + '\r\n' + "1: Manager Info ".blue + '\r\n' + '2: Intern Info '.green + '\r\n' + '3: Engineer Info '.red + "\r\n" + '4: Exit ',
        getName => {
            // TODO: Log the answer in a database
            switch (usage) {
                case '0':
                    elem = fs.appendFile(`index.html`, `${licenses[0]}` + "\r\n" + "\r\n", (err) => {
                        if (err)
                            throw err;
                        toc();
                    })
                    break;
                case '1':
                    elem = fs.appendFile(`index.html`, `${licenses[1]}` + "\r\n" + "\r\n", (err) => {
                        if (err)
                            throw err;
                        toc();
                    })
                    break;
                case '2':
                    elem = fs.appendFile(`index.html`, `${licenses[2]}` + "\r\n" + "\r\n", (err) => {
                        if (err)
                            throw err;
                        toc();
                    })
                    break;
                default:
                    toc();
            }
        });
};




})
}

getName();