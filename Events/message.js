const Discord = require('discord.js');
const emoji = require('../Utils/emoji.json');
const config = require('../config.json');

module.exports = async (client, message) => {
    if (message.author.bot || !message.guild || message.webhookID || message.channel.type === 'dm') return;

    const prefix = config.Prefix;
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\s*`);

    if (prefixRegex.test(message.content)) {
  
    const [, match] = message.content.match(prefixRegex);

    const args = message.content.slice(match.length).trim().split(/ +/g);

    const cmd = args.shift().toLowerCase();
    
    let command = client.commands.get(cmd);
   
    if (!command) command = client.commands.get(client.aliases.get(cmd));
   
    if (command) 
    
    command.run(client, message, args);

    if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {

    const embed = new Discord.MessageEmbed()
    .setTitle('Did you ping me ??')
    .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 1024}))
    .setDescription(`Aight I'm ${client.user.username} I'm a multi purpose bot my prefix is \`${config.Prefix}\` try \`${config.Prefix}help\` to get to know me more\n\n[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
    .setTimestamp()

    message.channel.send(embed)

    }
    }
}
