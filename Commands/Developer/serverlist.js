const Discord = require('discord.js');
const config = require('../../config.json');
const emoji = require('../../Utils/emoji.json');
const ascii = require('ascii-table');

let Table = new ascii("ServerList");
Table.setHeading(" Guild Name ", " Guild ID ", " Member Count ", " Owner ");

module.exports = {
    name: "serverlist",
    aliases: ["sl"],
    category: "Developer",
    description: "Gives all the list of servers that I'm in inside the console log !!",
    example: `${config.Prefix}serverlist`,

    run: async (client, message, args) => {

        if (message.author.id !== config.Owner) {
            return;
        }

        const servers = message.client.guilds.cache.array().map(guild => {
            Table.addRow( guild.name, guild.id , ` ${guild.memberCount} Users `, ` ${guild.owner.user.tag} `);
        });

        console.log(Table.toString());
        await message.channel.send(`${emoji.Approved} All the servers and details are been posted on my console log !!`)
    }
}