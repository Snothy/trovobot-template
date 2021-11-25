# Trovo chat bot


## Installation

Run `npm install` or `npm i` to install dependencies.<br />
  - trovobot @1.0.6<br />
    - ws
    - puppeteer


## Usage

Rename the "settings.template.js" file to "settings.js"<br />
```
  {
    prefix: What triggers the bot commands. One character. Default is "!".

    login: Login details for bot. Required to authorize the scopes for the application.
    {
      username: Username for the bot account
      password: Password for the bot account
    }
    client_id: Your application's client-id
    client_secret: Your application's client-secret
    chat_username: The chat you want to connect to - The username of the account.

    headless: Whether the authorization/login is performed in a headless browser or not
  }
```

For the application(bot) to be able to perform commands in your chat, you need to authorize it for certain scopes. This is the url for it: <br />
https://open.trovo.live/page/login.html?client_id=${client_id}&response_type=token&scope=channel_details_self+channel_update_self+chat_send_self+chat_connect+send_to_my_channel+manage_messages+user_details_self&redirect_uri=https%3A%2F%2Ftrovo.live&state=statedata<br />

Where you replace `${client-id}` with your application's client_id. 

You can edit the scopes based on your needs. Check trovo's API docs for which methods require which scopes. Currently the trovobot library uses all scopes listed in the URL above, so I also authenticate it from my account using the same scopes. This will be configurable in a future version.<br />
Then you authorize it from the account in which (chat) the bot will be running.

Run `npm start`<br />
Once "logged in" has been printed to the console, the application is running normally and you can use chat commands/events.<br />