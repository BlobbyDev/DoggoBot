const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "bean",
    category: "Moderation",
    description: "Beans a person from the guilf aka || Fake Ban lol ||",
    example: `${config.Prefix}bean @Dinav nothing`,

    run: async (client, message, args) => {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const perms = ["BAN_MEMBERS" || "ADMINSTRATOR"] 
        const doggo = message.guild.members.cache.get(client.user.id);

        if(!message.member.hasPermission(perms)) 
        return message.reply(`${emoji.Error} You do not have the permission to do that lol try asking a staff to give you the permission **\`BAN_MEMBERS\`** or **\`ADMINISTRATOR\`**`)
        .then(msg => {
            msg.delete({ timeout: 20000 })
        });

        if (!user)
        return message.reply(`${emoji.Error} Please specify someone you want to bean. **\`${config.Prefix}bean <user> [reason]\`**`)

        if(user === client.user.id)
        return message.reply(`${emoji.Error} Wait what ??!! I can't bean myslef !!!`)
        

        if(user.id === message.author.id) 
        return message.reply(`${emoji.Error} You cannot bean yourself idot`)
        

        if (user.roles.highest.position > message.member.roles.highest.position)
        return message.reply(`${emoji.Error} You cannot bean someone with an equal or higher role to you !!! or if you are owner pls be yourself in a higher position`)
        

        if (!user.bannable)
        return message.reply(`${emoji.Error} Provided user is not beanable cuz he / she has higher role than me or equal to my position :(`);


        const reason = args.slice(1).join(" ");
 
        const embed = new Discord.MessageEmbed()
        .setColor("#00aaaa")
        .setTitle('Bean !!')
        .setDescription(`${emoji.Approved} <@${user.id}> (**\`${user.user.tag}\`**) has been beaned from **${message.guild.name}**`)
        .addField('Reason', `**\`${reason != "" ? reason : "-"}\`**`, true)
        .addField('Beaned By', `<@${message.member.id}> (**\`${message.member.user.tag}\`**)`, true)
        .setTimestamp()

        await message.channel.send(embed);
    }
}
