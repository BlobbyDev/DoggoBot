const config = require('../../config.json');
const emoji = require('../../Utils/emoji.json');

module.exports = {
    name: "say",
    aliases: ["tell"],
    category: "Utility",
    description: "Says your input via the bot",
    example: `${config.Prefix}say Hello`,
    
    run: (client, message, args) => {

        
        if (message.content.includes("discord.gg/"))
        return message.reply(`${emoji.Error} Yo don't try to post server link using me !!!`)
        .then(msg => {
            msg.delete({ timeout: 15000 })
        });

        if (args.length <= 0)
        return message.reply(`${emoji.Error} Come on man say something !!`)
        .then(msg => {
            msg.delete({ timeout: 10000 })
        });


    
        message.channel.send(args.join(" "));
        
    }
}
