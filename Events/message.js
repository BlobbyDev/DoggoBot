const Discord = require('discord.js');
const config = require('../config.json');
const ms = require('ms');
const emoji = require('../Utils/emoji.json');

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
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const Timeout = new Set()
  
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);

    if (command) {

        if(command.cooldown) {
            if (Timeout.has(`${message.author.id}${command.name}`)) {
                return message.reply(`${emoji.Error} You can only use this command every \`${ms(command.cooldown)}\` !!`)
            } else {
                Timeout.add(`${message.author.id}${command.name}`)
                setTimeout(() => {
                    Timeout.delete(`${message.author.id}${command.name}`)
                }, command.cooldown);
            }
        }

        command.run(client, message, args);
    }
   
    if (!command) command = client.commands.get(client.aliases.get(cmd));
   
}
