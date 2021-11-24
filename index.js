//const trovobot = require('../trovobot/index');
const trovobot = require('trovobot');
const handler = require('./models/handler');
const settings = require('./settings');

const client = new trovobot.Bot(settings);

(async () => {
  await client.init();

  client.on(async message => {
    await handler(client, message);
  });

  //console.log(client.types.chats[0]);

})();
