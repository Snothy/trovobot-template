module.exports = title = async (client, commandArgs, message) => {
  //check for permissions first
  const allowedRoles = ['supermod', 'streamer'];
  const allowed = allowedRoles.some(role => message.roles.includes(role));
  if(!allowed) {
    return;
  }


  const title = commandArgs.join(' ');
  if(title === "" ) {
    return;
  }
  const response = await client.performCommand("settitle " + title);
  if(response.is_success) {
    await client.sendMessage('Title set: ' + title);
  }
}
