const Discord = require('discord.js');
require('dotenv').config();

const shards = new Discord.ShardingManager("./index.js", {

    token: process.env.TOKEN,
    totalShards: 'auto'

});

shards.on("shardCreate", shard => {

    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Lanched shard #${shard.id}`);

});

shards.spawn(shards.totalShards, 10000);