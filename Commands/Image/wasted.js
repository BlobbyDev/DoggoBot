const { MessageEmbed, MessageAttachment } = require('discord.js')


module.exports = {
    name: "wasted",
    description: "Makes Your Avatar Wasted!",
    category: "fun",

    run: async (bot, message, args) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if(!user)
        return message.reply(`${emoji.Error} Provide a valid user !!`)

        const avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });

        let link = `https://some-random-api.ml/canvas/wasted/?avatar=${avatar}`

        const attachment = new MessageAttachment(link, 'wasted.png');
        const embed = new MessageEmbed()
        .setTitle(`Wasted`)
        .attachFiles(attachment)
        .setColor("RANDOM")
        .setTimestamp()
        .setImage('attachment://wasted.png')
         message.channel.send(embed);

    }
}
