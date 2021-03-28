const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const fetch = require('node-fetch');

module.exports = {
    name: "instagram",
    aliases: ["insta"],
    category: "Utility",
    description: "Finds the instagram profiles !!",
    example: `${config.Prefix}instagram dinav_69`,

    run: async (client, message, args) => {
        
        const user = args.join(" ");

        if (!user)
        return message.reply(`${emoji.Error} Yo pls search an actual user Id bruh !!`);

        const url = `https://instagram.com/${user}/?__a=1`; 

        try {

            let res = await fetch(url);
         
            const account = await res.json().graphql.user;

            const embed = new Discord.MessageEmbed()

            .setColor(message.guild.me.displayHexColor)
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${user}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField('Full Name', account.full_name, true)
            addField('Bio', account.biography.length == 0 ? "none" : account.biography, true)
            .addField('Posts', account.edge_owner_to_timeline_media.count, true)
            .addField('Followers', account.edge_followed_by.count, true)
            .addField('Following', account.edge_follow.count, true)
            .addField('Private Acc ?', account.is_private ? "Yes 🔐" : "Nope 🔓", true)

            message.channel.send(embed)

        } catch (e) {
            return message.reply(`${emoji.Error} Couldn't find that account !!`)
        }
    }
}