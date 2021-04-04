const Discord = require('discord.js');
const moment = require('moment');
const emoji = require('../../Utils/emoji.json');;
const config = require('../../config.json');

module.exports = {
    name: "whois",
    aliases: ["userinfo", "ui"],
    description: "Says the information of the mentioned user",
    example: `${config.Prefix}whois @Dinav`,
    category: "Info",

    run: async (client, message, args) => {
      const member = message.mentions.members.first() || 
      message.guild.members.cache.get(args[0]) || 
      message.member;

      const activities = [];
      let customStatus;
      for (const activity of member.presence.activities.values()) {
      switch (activity.type) {
        case 'PLAYING':
          activities.push(`Playing **${activity.name}**`);
          break;
        case 'LISTENING':
          if (member.user.bot) activities.push(`Listening to **${activity.name}**`);
          else activities.push(`Listening to **${activity.details}** by **${activity.state}**`);
          break;
        case 'WATCHING':
          activities.push(`Watching **${activity.name}**`);
          break;
        case 'STREAMING':
          activities.push(`Streaming **${activity.name}**`);
          break;
        case 'CUSTOM_STATUS':
          customStatus = activity.state;
          break;
      }
    }
        
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
    embed.addField('Badges', userFlags.map(flag => badges[flag]).join(' '), true)
    .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    if (activities.length <= 0)
    embed.addField(`Activity`, '`Nothing`')
    if(activities.length > 0)
    embed.addField('Activity', `${activities.join('\n')}`);

    message.channel.send(embed);
  }
}
