# Doggo

A cool multi purpose bot with some fun commands

## How to setup 

### Creating a Bot and adding to your server

◙ Go to `Discord Developer Portal` by [clicking here](https://discord.com/developers/applications)

◙ Click on to `New Application` and then name your application

◙ Selct the application you will see bot just under `OAuth2` select that

◙ Press `Add Bot`

◙  Then go to `OAuth2` to get the bot's invite link

◙ Under scopes you'll see bot click that and under you see `Bot Permissions` select the permissions

◙ Copy the invite link which is generated on the `Scopes`

◙ Go to bot tab then you'll see `TOKEN` click copy 

And now you got the token !!!

## Configuring

Go to config.json in the repo then do as I say

**config.json**

Please replace theses text !!

```js
{
    "Token": "Replace with your bot's token that I just explained how to obtain",
    "YT": "YT API key if you don't need to youtube command then no need to put the API key",
    "ServerLogsChannel": "Channel ID of the channel that your need to post the  guild's details if it joins a guild",
    "Prefix": "The prefix that you need for your bot",
    "Owner": "You ID",
    "Invite": "You bot's invite link that we just explained how to obtain",
    "Server": "Your bot's support server"
}
```

I you need to change the emojis go to `emoji.json` and change it I recommend the value to be same as it is

## Starting the Bot

First I'll be explaing what all things are required

[Node.js](https://nodejs.org/en/)

[Git](https://git-scm.com/)

[Discord](https://discord.com/)

[Visual Studio Code](https://code.visualstudio.com/download)

◙ Then first to install the packages open a terminal in visual studio code type `npm install`

![terminal](https://user-images.githubusercontent.com/45940386/111021871-b22ee080-83e8-11eb-92cb-c2ff2ccc7b3f.png)

◙ Then after the packages and intalled and things are been configured in the `config.json`

◙ Go to the terminal type `node index.js`

![terminal2](https://user-images.githubusercontent.com/45940386/111021908-e1dde880-83e8-11eb-8799-5a1b95b9998a.png)

◙ After a few seconds (well maybe more all according to you network) you'll see `<your bot's user> is now connected to Discord`

![terminal3](https://user-images.githubusercontent.com/45940386/111021941-236e9380-83e9-11eb-9a5c-b66e96f16ade.png)

**And that's for the self hosting**
