const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');
const { re } = require('mathjs');

module.exports = {
    name: "systeminfo",
    aliases: ["systemstats", "system", "systeminformation"],
    category: "Info",
    description: "Gives my system information",
    example: `${config.Prefix}systeminfo`,

    run: async(client, message, args) => {

        const { totalMemMb, usedMemMb } = await mem.info();

        const systeminfo = stripIndent`
        OS        : ${await os.oos()}
        CPU       : ${cpu.model()}
        Cores     : ${cpu.count()}
        CPU Usage : ${await cpu.usage()} %
        RAM       : ${totalMemMb} MB
        RAM Usage : ${usedMemMb} MB 
        `;

        const embed = new Discord.MessageEmbed()
        .setTitle(`${emoji.Code} My System Information !!`)
        .setDescription(`\`\`\`yaml\n${systeminfo}\`\`\``)
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor)

        message.channel.send(embed)
    }
}