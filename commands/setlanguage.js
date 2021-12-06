module.exports = async (client, commandArgs, message) => {
  // check for permissions first
  const allowedRoles = ['supermod', 'streamer'];
  const allowed = allowedRoles.some(role => message.roles.includes(role));
  if (!allowed) {
    return;
  }

  const response = await client.performCommand('setlanguage ' + commandArgs[0]);
  if (response.is_success) {
    await client.sendMessage('Language set: ' + commandArgs[0]);
  }
};
