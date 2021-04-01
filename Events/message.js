const Discord = require('discord.js');
const config = require('../config.json');

module.exports = async (client, message) => {
    
    if (message.author.bot || !message.guild || message.webhookID || message.channel.type === 'dm') return;

    if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {

    const embed = new Discord.MessageEmbed()
    .setTitle('Did you ping me ??')
    .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 1024}))
    .setDescription(`Aight I'm ${client.user.username} I'm a multi purpose bot my prefix is \`${config.Prefix}\` try \`${config.Prefix}help\` to get the list of all my commands.\n\n[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
    .setTimestamp()
    
    message.channel.send(embed)
    
    }

    const prefix = config.Prefix;
  
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
   
    if (!command) command = client.commands.get(client.aliases.get(cmd));
   
    if (command) 
    
    command.run(client, message, args);

}
