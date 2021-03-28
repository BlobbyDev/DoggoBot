const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {

    name: "ping",
    category: "Info",
    aliases: ["latency", "ms"],
    description: "Returns Latency and API Ping",
    cooldown: 10000,
    example: `${config.Prefix}ping`,
    
    run: async (client, message, args) => {

        const msg = await message.channel.send(emoji.Pinging);
        msg.edit(`**Latency:** **\`${Date.now()-message.createdTimestamp}\`** ms\n**API Latency:** **\`${Math.round(client.ws.ping)}\`** ms`);
    }
}