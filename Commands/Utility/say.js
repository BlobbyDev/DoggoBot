const Discord = require("discord.js");
const config = require('../../config.json');
const emoji = require('../../Utils/emoji.json');

module.exports = {
    name: "say",
    aliases: ["tell"],
    category: "Moderation",
    description: "Says your input via the bot",
    example: `${config.Prefix}say Hello`,
    
    run: (client, message, args) => {

        if (message.content.includes("@here") || message.content.includes("@everyone"))
        return message.reply(`${emoji.Error} Hey you don't try to ping everyone or here`)
        .then(msg => {
            msg.delete({ timeout: 15000 })
        });

        if (message.content.includes("discord.gg"))
        return message.reply(`${emoji.Error} Yo don't try to post server link using me !!!`)
        .then(msg => {
            msg.delete({ timeout: 15000 })
        });

        if (args.length <= 0)
        return message.reply("Oh come on man say something !!")
        .then(msg => {
            msg.delete({ timeout: 10000 })
        });


    
        message.channel.send(args.join(" "));
        
    }
}