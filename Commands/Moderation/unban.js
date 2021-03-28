const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "unban",
    category: "Moderation",
    description: "Unbans the banned user with the provided user ID",
    example: `${config.Prefix}unban 4389334384384323 Innocent`,

    run: async (client, message, args) => {

        const id = args[0];
        const Banned = await message.guild.fetchBans();
        const user = Banned.get(id).user;
        const Perms = ["BAN_MEMBERS" || "ADMINSTRATOR"] 
        const doggo = message.guild.members.cache.get(client.user.id);

        
        if(!message.member.hasPermission(Perms)) 
        return message.reply(`${emoji.Error} You do not have the permission to do that in order to unban someone you need to have permission **\`BAN_MEMBERS\`** or **\`ADMINISTRATOR\`**`)
        .then(msg => {
            msg.delete({ timeout: 20000 })
        });

        if(!doggo.hasPermission(Perms))
        return message.reply(`${emoji.Error} I do not have permission to unban users pls enable permission **\`BAN_MEMBERS\`** or **\`ADMINSTRATOR\`** for me`)

        if(!user)
        return message.reply(`${emoji.Error} Please provide a user ID of a banned person inorder to unban that user **\`${config.Prefix}unban [Banned User's ID] [Reason]\`**`)

        if(user === client.user.id)
        return message.reply(`${emoji.Error} Wait what ??!! am I even banned in this guild ?!!!`)

        if(!user === message.author.id) 
        return message.reply(`${emoji.Error} Lmfao unbanning yourself if you are banned then how you are in this guild get banned and then ask someone to unban you !!`)

        const reason = args.slice(1).join(" ");

        await message.guild.members.unban(user, reason);

        const embed = new Discord.MessageEmbed()
        .setTitle('Unban !!')
        .setDescription(`${emoji.Approved} Unbanned **\`${user.tag}\`**`)
        .addField('Reason', `${reason != "" ? reason : "-"}`, true)
        .addField('Unbanned By', `<@${message.member.id}> `, true)
        .setTimestamp()

        message.channel.send(embed)

    }

}