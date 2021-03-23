const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const moment = require('moment');
const emoji = require('../../Utils/emoji.json');;
const config = require('../../config.json');

module.exports = {
    name: "userinfo",
    aliases: ["whois", "ui"],
    description: "Says the information of the mentioned user",
    example: `${config.Prefix}whois @Dinav`,

    run: async (client, message, args) => {
        const member = message.mentions.members.first() || 
        message.guild.members.cache.get(args[0]) || 
        message.member;

        
        
        const roles = member.roles.highest

        const status = {
            'dnd': `${emoji.Dnd}\`Do not disturb\``,
            'idle': `${emoji.Idle}\`Idle\``,
            'offline': `${emoji.Offline}\`Offline\``,
            'online': `${emoji.Online}\`Online\``
        }

        const bot = {
            'true': "`Yes`",
            'false': "`No`"
        }

        const badges = {
            DISCORD_EMPLOYEE: `${emoji.DiscordStaff}`,
            DISCORD_PARTNER: `${emoji.DiscordPartner}`,
            BUGHUNTER_LEVEL_1: `${emoji.DiscordBugHunter}`,
            BUGHUNTER_LEVEL_2: `${emoji.DiscordBugHunter2}`,
            HYPESQUAD_EVENTS: `${emoji.HypesqaudEvents}`,
            HOUSE_BRAVERY: `${emoji.HypesquadBravery}`,
            HOUSE_BRILLIANCE: `${emoji.HypesquadBrilliance}`,
            HOUSE_BALANCE: `${emoji.HypesquadBalance}`,
            EARLY_SUPPORTER: `${emoji.EarlySupporter}`,
            TEAM_USER: '`Team User`',
            SYSTEM: '`System`',
            VERIFIED_BOT: `${emoji.VerifiedBot}`,
            VERIFIED_DEVELOPER: `${emoji.BotDev}`,
            BOT: `${emoji.Bot}`
        }
    
        const flags = await member.user.fetchFlags()
        const userFlags = flags.toArray()

        const embed = new Discord.MessageEmbed()
        
            .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 1024}))
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
            .setTitle(`${member.displayName}'s Information`)
            .addField('Name', `\`${member.user.tag}\``, true)
            .addField('User ID', `\`${member.user.id}\``, true)
            .addField('Nickname', `\`${member.displayName}\``,true)
            .addField('Joined Server At', `\`${moment.utc(member.joinedAt).format('DD/MMM/YYYY')}\``, true)
            .addField('Joined Discord At', `\`${moment.utc(member.user.createdAt).format('DD/MMM/YYYY')}\``,true)
            .addField('Highest Role', `${roles}`, true)
            .addField('User Status', status[member.presence.status], true)
            .addField('Bot User', bot[member.user.bot], true)
            if (userFlags.length <= 0)
            embed.addField('Badges', `\`No Badge\``, true)
            if (userFlags.length > 0)
            embed.addField('Badges', userFlags.map(flag => badges[flag]), true)
            .setFooter(`Requested by ${message.author.displayName}`, message.author.displayAvatarURL({dynamic: true}))
        
            if (member.user.presence.game) 
            embed.addField('Currently playing', stripIndents`** Name:** ${member.user.presence.game.name}`);

        message.channel.send(embed);
    }
}
