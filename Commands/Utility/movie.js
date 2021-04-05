const Discord = require('discord.js');
const config = require('../../config.json');
const emoji = require('../../Utils/emoji.json');
const imdb = require("imdb-api");
const client = require('../../index');
const moment = require('moment');

module.exports = {
    name: "movie",
    description: "Gives the information of the provided movie",
    aliases: ["moviesearch", "searchmovie"],
    example: `${config.Prefix}movie Avengers`,
    category: "Utility",

    run: async (client, message, args) => {
        
        if(!args.length) {
        return message.reply(`${emoji.Error} Please provide a movie to search !!`)
        }
        
        

        const Imdb = new imdb.Client({ apiKey: process.env.IMDB_KEY})

        let movie = await Imdb.get({name: args.join(" ")});
        
        const embed = new Discord.MessageEmbed()
            
        .setColor(message.guild.me.displayHexColor)
        .setTitle(movie.title)
        .setURL(movie.imbdurl)
        .setThumbnail(movie.poster)
        .setDescription(`\`\`\`${movie.plot}\`\`\``)
        .addField('Rating', `\`\`\`${movie.rating}\`\`\``, true)
        .addField('Time', `\`\`\`${movie.runtime}\`\`\``, true)
        .addField('Awards', `\`\`\`${movie.awards}\`\`\``, true)
        .addField('Language', `\`\`\`${movie.languages}\`\`\``, true)
        .addField('Genre', `\`\`\`${movie.genres}\`\`\``, true)
        .addField('PG', `\`\`\`${movie.rated}\`\`\``, true)
        .addField('Country', `\`\`\`${movie.country}\`\`\``, true)
        .addField('Released', `\`\`\`${moment.utc(movie.released).format('DD/MMM/YYYY')}\`\`\``, true)
        .setTimestamp()
        
        message.channel.send(embed)

    } 
        
}
 
