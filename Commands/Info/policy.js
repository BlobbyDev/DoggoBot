const config = require('../../config.json');
const Discord = require("discord.js");


module.exports = {
    name: "policy",
    category: "Info",
    example: `${config.Prefix}policy`,
    aliases: ["privacypolicy"],

    run: async (client, message, args) => {

        const embed = new Discord.MessageEmbed()

        .setTitle('__Our Privacy Policy__')
        .setDescription(`\`\`\`We do not store or reveal any kind of personal detaials of any server and user. The snipe command only retrieves the text message and no images and embed will be sniped !!\`\`\`\n\`\`\`We follow all the term of Service of both Discord, Youtube & IMDb.\`\`\``)
        .setFooter(`Requested by ${message.author.username}`,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        
        message.channel.send(embed) 
    }
}