const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "forceban",
    aliases: ["hackban", "ipban"],
    category: "Moderation",
    description: "Bans a user outside the server !!",
    example: `${config.Prefix}forceban 123456789101123 I don't want him`,

    run: async (client, message, args) => {

        const user = args[0];
        const perms = ["BAN_MEMBERS" || "ADMINSTRATOR"];
        const doggo = message.guild.members.cache.get(client.user.id);

        if(!message.member.hasPermission(perms)) 
        return message.reply(`${emoji.Error} You do not have the permission to do that lol try asking a staff to give you the permission **\`BAN_MEMBERS\`** or **\`ADMINISTRATOR\`**`)
        .then(msg => {
            msg.delete({ timeout: 20000 })
        });

        if(!doggo.hasPermission(perms))
        return message.reply(`${emoji.Error} I do not have permission to ban users pls enable permission **\`BAN_MEMBERS\`** for me`)

        if (!user)
        return message.reply(`${emoji.Error} Please specify User ID of someone you want to forceban. **\`${config.Prefix}forceban <User ID> [reason]\`**`)
        
        if(user === client.user.id)
        return message.reply(`${emoji.Error} Wait what ??!! I can't ban myslef !!!`)

        if(isNaN(user))
        return message.reply(`${emoji.Error} Hey mention user ID user Ids are in numbers not in alphabets`)

        if(user.id === message.author.id) 
        return message.reply(`${emoji.Error} You cannot forceban yourself idot`)
        

        const reason = args.slice(1).join(" ");

        client.users.fetch(user).then(async user => {
            await message.guild.members.ban(user.id, {reason: reason});
        
            const embed = new Discord.MessageEmbed()
            .setColor("#00aaaa")
            .setTitle('Force Ban !!')
            .setDescription(`${emoji.Approved} <@${user.id}> (**\`${user.tag}\`**) has been forcefully banned from **${message.guild.name}** outside the guild !!`)
            .addField('Reason', `**\`${reason != "" ? reason : "-"}\`**`, true)
            .addField('Banned By', `<@${message.member.id}> (**\`${message.member.user.tag}\`**)`, true)
            .setTimestamp()

            return message.channel.send(embed)
        }).catch(error => {
            return message.channel.send(`An error occured:\n\`\`\`${error}\`\`\``)
        })
    }
}