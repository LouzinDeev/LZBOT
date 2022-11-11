const bconfig = require("../bot_config.json");
const deps = require("./deps.json");
const lib = require("discord.js");

global.bot = new lib.Client({ intents: [lib.GatewayIntentBits.Guilds] });

const handler = require("./handler.js");

bot.once(lib.Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
    handler.handCommands();
});

bot.on(lib.Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

bot.login(bconfig.token);

console.log(`Bot token: ${bconfig.token}`);