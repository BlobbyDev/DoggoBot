const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client( { ws: { properties: { $browser: "Discord iOS" }} } );

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.snipes = new Discord.Collection();

["command", "event"].forEach(handler => {
    require(`./Handlers/${handler}`)(client);
});

client.login(config.Token);