const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
    name: "github",
    aliases: ["sourcecode", "codes", "git"],
    category: "Others",
    description: "Gets you the link to get my source code make sure you star it !!!",
    example: `${config.Prefix}`,

    run: async (client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL( { dynamic: true, size: 1024 } ))
        .setTitle('My source code !!')
        .setDescription(`Yo guys this is my my github repository you can get then by [clicking here](${config.Github}) make sure you all \`star that repo\` and also \`follow my developer\` to get more of his codes !!\n\n[Add Me](${config.Invite}) | [Join Server](${config.Server})`)
        .setFooter(`Requested by ${message.author.username}`,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        message.channel.send(embed)

    }
}