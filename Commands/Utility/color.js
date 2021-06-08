const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const DIG = require("discord-image-generation");

module.exports = {
    name: "color",
    aliases: ['colour'],
    category: "Utility",
    description: "Gives a colour that you have provided",
    example: `${config.Prefix}colour #FF0000`,

    run: async (client, message, args) => {

        if(!args[0])
        return message.reply(`${emoji.Error} Provide a hex`);

        try {

        let img = await new DIG.Color().getImage(args[0]);

        let attach = new Discord.MessageAttachment(img, `${args[0]}.png`);

        message.channel.send(attach)
        } catch (err) {
            message.reply(`${emoji.Error} Cannot give colour ${args[0]}`);
        }
    }
}
