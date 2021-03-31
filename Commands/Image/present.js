const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const DIG = require("discord-image-generation");

module.exports = {
    name: "present",
    aliases: ["presentation"],
    category: "Image",
    description: "Converts a user's avatar in inverted format !!",
    example: `${config.Prefix}invert @Dinav`,

    run: async (client, message, args) => {

        const presentation = args.join(" ");

        if(!presentation)
        return message.reply(`${emoji.Error} Provide something to present !!`)

        let presented = await new DIG.LisaPresentation().getImage(presentation);

        let attach = new Discord.MessageAttachment(presented, "invert.png");

        message.channel.send(attach)
    }
}