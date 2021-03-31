const Discord = require('discord.js');
const convert = require('parse-ms');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "spotify",
    category: "Utility",
    description: 'Gives the info of the song in which the mentioned user is litening to spotify',
    example: `${config.Prefix}spotify @Dinav`,

    run: async (client, message, args) => {
    
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        if (user.presence.activities.length === 1) status = user.presence.activities[0];
        else if (user.presence.activities.length > 1) status = user.presence.activities[1];

        if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") {
                
            return message.reply(`${emoji.Error} This user is not listening to spotify !!`);
        }

        if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
            let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
                url = `https:/open.spotify.com/track/${status.syncID}`,
                name = status.details,
                artist = status.state,
                album = status.assets.largeText,
                timeStart = status.timestamps.start,
                timeEnd = status.timestamps.end,
                timeConvert = convert(timeEnd - timeStart);

            let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
            let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
            let time = `${minutes}:${seconds}`;

            const embed = new Discord.MessageEmbed()
                .setAuthor(user.user.tag, user.user.displayAvatarURL({ dynamic: true }))
                .setTitle("Listening to Spotify !!")
                .setColor('RANDOM')
                .setThumbnail(image)
                .addField("Song Name:", `\`\`\`${name}\`\`\``, true)
                .addField("Album:", `\`\`\`${album}\`\`\``, true)
                .addField("Artist:", `\`\`\`${artist}\`\`\``, true)
                .addField("Duration:", `\`\`\`${time}\`\`\``, false)
                .addField("Listening Now!", `[\`${artist} - ${name}\`](${url})`)
                .setFooter(`Requested by ${message.author.username}`,  message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
            return message.channel.send(embed)
        }


    }
}