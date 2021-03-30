const Discord = require('discord.js');
const request = require('node-superfetch');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

require('dotenv').config();

module.exports = {
    name: "google",
    aliases: ["search"],
    description: "Searches the query that you have provided !!",
    category: "Utility",
    example: `${config.Prefix}google youtube`,

    run: async (client, message, args) => {

        let key = process.env.GOOGLE_KEY;
        let csx = process.env.ENGINE_ID;
        let query = args.join(" ");

        const channel = message.channel.nsfw
        if (!channel)
        return message.reply(`${emoji.Error} Pls make sure the command is excuted in a nsfw channel also pls do not feel bad for doing this it's not what you think people can search anything on google !!!`)

        if (!query)
        return message.reply(`${emoji.Error} Provide a query to google !! \`${config.Prefix}google Apple\``);

        async function search(query) {
            const { body } = await request.get("https://www.googleapis.com/customsearch/v1").query({
                key: key, cx: csx, safe: "off", q: query
            });

            if(!body.items) return null;
            return body.items[0];

        }

        let href = await search(query);
        if (!href)
        return message.reply(`${emoji.Error} Couldn't search **${query}**`)

        const embed = new Discord.MessageEmbed()
        .setTitle(href.title)
        .setDescription(href.snippet)
        .setImage(href.pagemap ? href.pagemap.cse_thumbnail[0].src: null)
        .setURL(href.link)
        .setColor(message.guild.me.displayHexColor)
        .setFooter(`Requested by ${message.author.username}`,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        return message.channel.send(embed)
    }
}