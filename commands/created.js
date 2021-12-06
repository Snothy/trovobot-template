module.exports = async (client, commandArgs, message) => {
  let uid;

  // Check own creation date
  if (commandArgs.length === 0) {
    uid = message.uid;

  // Check someones creation date
  } else {
    const allowedRoles = ['streamer'];
    const allowed = allowedRoles.some(role => message.roles.includes(role));
    if (!allowed) {
      return;
    }

    uid = await client.getChannelId(commandArgs[0]);
    if (uid == null) {
      await client.sendMessage('Invalid useranme');
      return;
    }
  }

  const info = await client.getChannelInfoById(uid);
  const created = new Date(info.created_at * 1000);
  await client.sendMessage(created.toISOString().split('T')[0]);
};
