# trovobot_template
Using the trovobot library to create a bot


Installation

Run "npm install" or "npm i" to install dependencies.<br />
  - trovobot @1.0.4 (dependencies: ws[websocket], puppeteer)<br />
  Puppeteer takes a little while to install as it has to download Chromium.


Usage

Rename the "settings.template.js" file to "settings.js"<br />
  - {<br />
    prefix: What triggers the bot commands. One character.

    login: Login details for bot. Required to authorize the scopes for the application.<br />
    {<br />
      username: Username for the bot account<br />
      password: Password for the bot account<br />
    }<br />
    client_id: Your application's client-id<br />
    client_secret: Your application's client-secret<br />
    chat_username: The chat you want to connect to - The username of the account.

    headless: Whether the authorization is performed in a headless browser or not
  }

Currently, on the first run or on any scope change, you should set headless to false so you can manually click allow once it has logged in. This is to authorize the scopes the application will be using. I haven't automated this yet.

For the application(bot) to be able to perform commands in your chat, you need to authorize it for certain scopes. This is the url for it -<br />
https://open.trovo.live/page/login.html?client_id=${client-id}&response_type=token&scope=channel_details_self+channel_update_self+user_details_self&redirect_uri=https%3A%2F%2Ftrovo.live&state=statedata<br />
Where you replace client-id with your application's client-id. You can edit the scopes based on your needs. Check trovo's API docs for which methods require which scopes. Currently the trovobot library uses all scopes listed in the URL above, so I also authenticate it from my account using the same scopes. This will be configurable in a future version.<br />
Then you authorize it from the account in which (chat) the bot will be running.

Run "npm start"<br />
If running in headless=false (not headless = "false") -> wait for the login to finish and click allow. Then you can change headless back to true and this step will be ignored.<br />
Once you "logged in" has been printed to the console, the application is running normally and you can use chat commands/events.<br />