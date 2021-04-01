const Discord = require('discord.js');
const fetch = require('node-fetch');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "urban",
    category: "Utility",
    description: "Give you the meaning of the word or the phrase using urban dictionary",
    example: `${config.Prefix}urban Hello`,

    run: async (client, message, args) => {
        
        const channel = message.channel.nsfw
        if (!channel) return message.reply(`${emoji.Error} Be in a **NSFW Channel** !!`)
        
        if (!args.length) return message.channel.send(`${emoji.Error} You need to supply a search term!`); 
    
        const query = encodeURIComponent(args.join(' '));
    
        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?term=${query}`).then(response => response.json());
    
        if (!list.length) return message.channel.send(`${emoji.Error} No results found for ${args.join(' ')}.`);
    
        const [answer] = list;
    
        const embed = new Discord.MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setTitle(answer.word)
            .setURL(answer.permalink)
            .addFields(
                { name: 'Definition', value: `\`\`\`${answer.definition}\`\`\`` },
                { name: 'Example', value: `\`\`\`${answer.example}\`\`\`` },
                { name: 'Rating', value: `${answer.thumbs_up} 👍    ${answer.thumbs_down} 👎` },
            );
        message.channel.send(embed);
     }
}
