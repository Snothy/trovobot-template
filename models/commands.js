const ayaya = require('../commands/ayaya');
const uptime = require('../commands/uptime');

const commands = {
  ayaya,
  uptime
}

module.exports = async function (message_content, Bot) {
    await commands[message_content[0]](Bot);
}