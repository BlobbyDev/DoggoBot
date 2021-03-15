const Discord = require('discord.js')
const config = require('../../config.json')
const emoji = require('../../Utils/emoji.json');
const rgx = /^(?:<@!?)?(\d+)>?$/;

module.exports = {
  name: "leaveserver",
  aliases: ["leaveguild", "ls"],
  description: "Bot leaves the server but it's only for my developer",
  example: `${config.Prefix}leaveServer [guildID]`,
  category: "Developer",

  run: async (client, message, args) => {

    if (message.author.id !== config.Owner) {
    return;
    }

    const guildId = args[0] || message.guild;
    if (!rgx.test(guildId))
    return;

    const guild = message.client.guilds.cache.get(guildId);

    if (!guild) return;
    await guild.leave();

    await message.channel.send(`${emoji.Approved} Left the guild **\`${guild.name}\`** with **\`${guild.memberCount}\`** Users👋`);

  }
}