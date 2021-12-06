// const { Client, Scopes } = require('../trovobot/index');
const { Client, Scopes } = require('trovobot');
const handler = require('./utils/handler');
const settings = require('./settings');

const client = new Client(settings, {
  scopes: [
    Scopes.send_to_my_channel,
    Scopes.chat_send_self,
    Scopes.manage_messages
  ],
  prefix: '!',
  headless: true
});

(async () => {
  await client.init();
  client.on(async message => {
    await handler(client, message);
  });
})();
