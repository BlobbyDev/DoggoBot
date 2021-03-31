const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "removerole",
    aliases: ["takerole"],
    category: "Moderation",
    description: "Removes a role from the user",
    example: `${config.Prefix}removerole @Dinav @Mod`,

    run: async (client, message, args) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const perms = ["MANAGE_ROLES" || "ADMINSTRATOR"];
        const doggo = message.guild.members.cache.get(client.user.id);
        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

        let reason = args.slice(2).join(' ');
        if (!reason) reason = '`-`';
        if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';

        if(!message.member.hasPermission(perms)) 
        return message.reply(`${emoji.Error} You do not have the permission to do that lol try asking a staff to give you the permission **\`MANAGE_ROLES\`** or **\`ADMINISTRATOR\`**`)
        .then(msg => {
            msg.delete({ timeout: 20000 })
        });

        if(!doggo.hasPermission(perms))
        return message.reply(`${emoji.Error} I do not have permission to addrole pls enable permission **\`MANAGE_ROLES\`** or **\`ADMINSTRATOR\`** for me`)

        if (!user)
        return message.reply(`${emoji.Error} Please specify someone you want to remove the role!! **\`!!removerole [User] [Role Mention or Role ID]\`**`)

        if (!role)
        return message.reply(`${emoji.Error} Please mention a role or provide a valid role ID`);

        if (user.roles.highest.position >= message.member.roles.highest.position)
        return message.reply(`${emoji.Error} You cannot give a remove a role from someone who is higher or equal to your role`)

        if (user.roles.highest.position >= doggo.roles.highest.position)
        return message.reply(`${emoji.Error} I cannot remove a role from someone who is higher or equal to my role`)

        else if (!user.roles.cache.has(role.id))
        return message.reply(`${emoji.Error} User does not have the provided role`);

        else {
            try {
      
              await user.roles.remove(role);

              const embed = new Discord.MessageEmbed()
                .setTitle('Remove Role')
                .setDescription(`${emoji.Approved} ${role}(\`${role.id}\`) has been successfully removed from <@${user.id}>(\`${user.user.tag}\`)`)
                .addField('Removed By', `<@${message.member.id}>\n(\`${message.member.user.tag}\`)`, true)
                .addField('From', `<@${user.id}>\n(\`${user.user.tag}\`)`, true)
                .addField('Role', `${role}\n(\`${role.id}\`)`, true)
                .addField('Reason', reason)
                .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor(message.guild.me.displayHexColor);
              await message.channel.send(embed);
      
            } catch (err) {
              return message.reply(`${emoji.Error} Please check the role hierarchy !!!`, err.message);
            }
        }  
    }
}
