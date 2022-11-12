/*LZBOT By Louzin*/ 
const bconfig = require("../bot_config.json");
const deps = require("./deps.json");
const lib = require("discord.js");
global.bot = new lib.Client({ intents: [lib.GatewayIntentBits.Guilds, lib.GatewayIntentBits.GuildMembers] });

const handler = require("./handler.js");

bot.once(lib.Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
	handler.handEvents();
    handler.handCommands();
});

bot.login(bconfig.token);

console.log(`Bot token: ${bconfig.token}`);