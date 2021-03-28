const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
    name: "invite",
    aliases: ["inv", "add"],
    category: "Others",
    description: "Gets the invite to add me to your server",
    example: `${config.Prefix}invite`,

    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle('Add Me')
        .setDescription(`Add me to your server by [clicking here](${config.Invite})`)
        .setTimestamp()

        message.channel.send(embed)
    }
}