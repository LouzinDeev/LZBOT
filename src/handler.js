exports.handCommands = () => {
    const slashCommands = require("./slashCommands.js");
    const fs = require('node:fs');
    const path = require('node:path');
    const lib = require("discord.js");
    bot.commands = new lib.Collection();
    const commandsPath = path.join(__dirname, 'commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        // Set a new item in the Collection with the key as the command name and the value as the exported module
        if ('data' in command && 'execute' in command) {
            bot.commands.set(command.data.name, command);
            console.log("Succefully add new command");
        } else {
            console.log(`[AVISO] O comando em  ${filePath} nao tem  "data" ou "execute".`);
        }
    }
};