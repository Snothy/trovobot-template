const fs = require('fs');
const path = require('path');
const { Client, messageReturnType } = require('trovobot'); // eslint-disable-line no-unused-vars

const commands = {};

// Get all commands from the commands dir and put them in an object
try {
  let route = path.resolve(process.cwd(), './commands/');
  const files = fs.readdirSync(route);
  for (const i in files) {
    if (files[i].endsWith('.js')) {
      // console.log(files[i]);
      route = path.resolve(process.cwd(), './commands/', files[i]);
      const command = require(route);
      commands[path.basename(route).replace(/\.[^/.]+$/, '')] = command; // filename
    }
  };
} catch (err) {
  console.error(err);
}

/**
 * Command handler function.
 * @param {Client} client Instance of the client
 * @param {messageReturnType} message Message object
 */
module.exports = async function (client, message) {
  const types = client.types;
  // On normal chat message => check for prefix and command
  if (types.chats[message.type] === 'chat') {
    if (message.content.startsWith(client.prefix)) {
      let command = message.content.substring(1); // remove prefix
      command = command.split(' '); // first index would be the command, rest are arguments

      // check if command exists
      if (commands[command[0]]) {
        const commandArgs = command.splice(1);
        await commands[command[0]](client, commandArgs, message);
      }
    }
  }

  // On follow
  if (types.chats[message.type] === 'follow') {
    // do whatever
    await client.sendMessage('Thank you for following, ' + message.nick_name);
  }

  // On spell
  if (types.chats[message.type] === 'spell') {
    const spell = JSON.parse(message.content);
    const amount = spell.num * spell.gift_value;
    // console.log('Thank you for ' + amount + " " + spell.value_type + ", " + message.nick_name + "!");
    await client.sendMessage('Thank you for ' + amount + ' ' + spell.value_type + ', ' + message.nick_name + '!');
  }

  // On subscription
  if (types.chats[message.type] === 'sub') {
    // ...
  }

  // On unfollow
  if (types.chats[message.type] === 'unfollow') {
    await client.sendMessage('Bye pisslow, ' + message.nick_name);
  }

  // On join
  if (types.chats[message.type] === 'join') {
    // await client.sendMessage('Testing join ' + message.nick_name);
  }
};
