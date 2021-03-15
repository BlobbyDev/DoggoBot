const Discord = require('discord.js');
const config = require('../../config.json');
const emoji = require('../../Utils/emoji.json');

module.exports = {
    name: "embed",
    category: "Utility",
    dscription: "Sends a message in embed",
    example: `${config.Prefix}embed Hi`,

    run: async (client, message ,args) => {

        if (args.length <= 0)
        return message.reply(`${emoji.Error} Oh come on man say something so I can I provide it in embed format !!`)
        .then(msg => {
            msg.delete({ timeout: 10000 })
        });

        if (message.content.includes("discord.gg"))
        return message.reply(`${emoji.Error} Yo don't try to post server link using me !!!`)
        .then(msg => {
            msg.delete({ timeout: 15000 })
        });

        const embed = new Discord.MessageEmbed()
        .setDescription(args.join(" "))
        message.channel.send(embed)

    }
}