const fs = require('fs');

module.exports = (client) => {

    fs.readdir("./Events/", (err, files) => {

        if(err) console.log(err)

        let jsfiles = files.filter(t => t.split(".").pop() === "js")

        jsfiles.forEach(file => {

            let eventN = file.split(".")[0]

            console.log(`Loading event: ${eventN}`)

            let event = require(`../Events/${eventN}`)

            client.on(eventN, event.bind(null, client))
            
        });
    });
};