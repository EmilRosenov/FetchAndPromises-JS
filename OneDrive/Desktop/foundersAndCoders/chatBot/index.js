import "dotenv/config";

import { Client, Events, GatewayIntentBits } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  console.log(`I am working ${client.user.tag}`);
});
client.login(process.env.DISCORD_TOKEN);
