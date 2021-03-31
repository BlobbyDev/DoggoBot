const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const DIG = require("discord-image-generation");

module.exports = {
    name: "slap",
    category: "Image",
    description: "Posts you slapping the mentioned user",
    example: `${config.Prefix}slap @Dinav`,

    run: async (client, message, args) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if(!user)
        return message.reply(`${emoji.Error} Provide a valid user !!`)

        const avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });

        new DIG.Batslap().getImage(message.member.user.displayAvatarURL({dynamic: false, format: 'png', size: 1024}), avatar);

        let img = await new DIG.Batslap().getImage(message.member.user.displayAvatarURL({dynamic: false, format: 'png', size: 1024}), avatar);

        let attach = new Discord.MessageAttachment(img, "slap.png");

        message.channel.send(attach)
    }
}