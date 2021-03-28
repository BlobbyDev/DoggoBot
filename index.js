const Discord = require('discord.js');
const client = new Discord.Client( { ws: { properties: { $browser: "Discord iOS" }} } );
require('dotenv').config();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.snipes = new Discord.Collection();
client.timeout = new Discord.Collection();

["command", "event"].forEach(handler => {
    require(`./Handlers/${handler}`)(client);
});

client.login(process.env.TOKEN);