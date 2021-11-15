const trovobot = require('../trovobot/index');
//const trovobot = require('./models/trovobot');
const fs = require('fs');
const commands = require('./models/commands');

let settings = fs.readFileSync("settings.json");
settings = JSON.parse(settings);

//const Bot = new trovobot(settings);
const Bot = new trovobot.Bot(settings);

(async () => {
  //await Bot.init();
  const req = await Bot.initTwo();
  await Bot.connect(commands, req);
})();
