const Discord = require('discord.js');
const config = require(`../../config.json`);

module.exports = {
    name: "support",
    aliases: ["server"],
    category: "Others",
    description: "Get the link to join my discord server for support or to hangout !!",
    example: `${config.Prefix}support`,

    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle('Join Us')
        .setDescription(`Join my server by [clicking here](${config.Server}) for support or to hangout !!! so yeah join now`)
        .setTimestamp()

        message.channel.send(embed)
    }
}