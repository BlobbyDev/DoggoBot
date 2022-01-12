const Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "camel",
  aliases: [],
  category: "Image",
  description: "Return A Random Camel!",
  usage: "Camel",
  run: async (client, message, args) => {
    
    const Data = await Random.GetAnimalImage({ Animal: "camel", Color: "RANODM" });
    return message.channel.send(Data);
  }
};
