module.exports = uptime = async (client) => {
  const res = await client.getOwnChannelInfo();
  if(!res.is_live) {
    client.sendMessage('Stream is offline');
    return;
  }

  const currDate = new Date;
  const startDate = new Date(res.started_at * 1000);
  let difference = Math.abs(currDate - startDate) / 1000; //in ms

  const hours = Math.floor(difference / 3600) % 24;
  difference -= hours * 3600;
  
  const minutes = Math.floor(difference / 60) % 60;
  difference -= minutes * 60;

  const seconds = Math.floor(difference % 60);

  const differenceString = "Uptime: " + hours + "h" + minutes + "m" + seconds + "s";
  client.sendMessage(differenceString);
}
