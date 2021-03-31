const Discord = require('discord.js');
const he = require('he');
const search = require('youtube-search');
const config= require('../../config.json');
const emoji = require('../../Utils/emoji.json');

module.exports = {
    name: "youtube",
    aliases: ["yt"],
    category: "Utility",
    description: "Searches YouTube for you specified text provided",
    example: `${config.Prefix}youtube closer`,

    run: async (client, message, args) => {

    const apiKey = process.env.YT_KEY;
    const videoName = args.join(' ');
    const banned = ["porn", "sex", "fucking", "moaning", "blowjob", "tits", "dick", "sucking", "nigga", "nigger", "pussy", "cock", "boobs", "xvideos", "xnxx", "clits", "naked", "hentai", "horny", "faping", "masturbating", "masturbation", "fuck", "stript", "naked"]  

    if (!videoName) return this.sendErrorMessage(`${emoji.Error} Please provide a YouTube video name`);

    const searchOptions = { maxResults: 1, key: apiKey, type: 'video' };

    if (banned.some(word => message.content.toLowerCase().includes(word))) {
    return message.reply(`${emoji.Error} Yo go search these things by yourself`)
    }

    let result = await search(videoName, searchOptions)
      .catch(err => {
        return message.reply(`${emoji.Error} Please try again in a few seconds`);
      });

    result = result.results[0];
    if (!result) 
    return message.reply(`${emoji.Error} Unable to find **${videoName}**, please try a different YT Title`);

    const decodedTitle = he.decode(result.title);
    const embed = new Discord.MessageEmbed()
    .setTitle(decodedTitle)
    .setURL(result.link)
    .setThumbnail('https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png')
    .setDescription(result.description)
    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
    .setImage(result.thumbnails.high.url)
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor)

    message.channel.send(embed)
  }
}
