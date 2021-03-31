const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const DIG = require("discord-image-generation");

module.exports = {
    name: "trash",
    category: "Image",
    description: "Converts a user's avatar in trash meme !!",
    example: `${config.Prefix}trash @Dinav`,

    run: async (client, message, args) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if(!user)
        return message.reply(`${emoji.Error} Provide a valid user !!`)

        const avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });

        let img = await new DIG.Trash().getImage(avatar);

        let attach = new Discord.MessageAttachment(img, "trash.png");

        message.channel.send(attach)
    }
}