const { MessageEmbed } = require('discord.js');
const weather = require('weather-js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports =  {
    name: "weather",
    category: "Utility",
    description: "Gives the weather forcast",
    example: `${config.Prefix}weather alberta`,

    run: async (client, message, args) => {
        try {
        
            if(!args[0]) return message.channel.send(`${emoji.Error} Please mention city name`);
              
            weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result){
            
            if(err) message.channel.send(err.message);
        
            if(result.length === 0) return message.channel.send(`${emoji.Error} Please Enter a valid location!`);
        
                var current = result[0].current;
                var location = result[0].location;
        
                const embed = new MessageEmbed()
                    .setDescription(`**${current.skytext}**`)
                    .setAuthor(`🌥️ Weather for ${current.observationpoint}`)
                    .setThumbnail(current.imageUrl)
                    .addField('**Timezone**', `UTC ${location.timezone}`, true)
                    .addField('**Degree Type**', `${location.degreetype}`, true)
                    .addField('**Temperature**', `${current.temperature} Degrees`, true)
                    .addField('**Feels Like**', `${current.feelslike} Degrees`, true)
                    .addField('**Winds**', `${current.winddisplay}`, true)
                    .addField('**Humidity**', `${current.humidity}%`, true)
                    .addField('**Date**', `${current.date}`, true)
                    .addField('**Day**', `${current.day}`, true)
                    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    .setColor(message.guild.me.displayHexColor);
                message.channel.send({embed})
            });
           } catch (err) {
            message.channel.send(`${emoji.Error} Please Enter a valid location!`);
        }
    }
}



