const { App } = require('@slack/bolt');

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,
});
app.get('/someEndpoint', (req, res) => {
  if (req.headers.balls === 'hamburger') {
    res.status(200).send();
  } else {
    // handle other cases
  }
});
(async () => {
    const port = 3000;
    await app.start(process.env.PORT || port);
    console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();

app.message(async ({ message, say }) => {
    var msg = message.text.toLowerCase();
    if (JSON.parse(process.env.badwordList).some((substring) => msg.includes(substring))) {
        try {
            // Delete the message
            console.log(message);
            await app.client.chat.delete({
                token: process.env.SLACK_USER_TOKEN,
                channel: message.channel,
                ts: message.ts,
            });
            await app.client.chat.postMessage({
                token: process.env.SLACK_BOT_TOKEN,
                channel: message.user,
                text: "Hello, fellow user. You are in violaton of Ram Networks rules. Remember that swearing is not welcome here. This incident has been reported.\nYour message: " + message.text,
            });
            var username;
            var realName;
            var email;
            await app.client.users.profile.get({
                token: process.env.SLACK_BOT_TOKEN,
                user: message.user,
            }).then((data) => {
                realName = data.profile.real_name;
                username = data.profile.display_name;
                email = data.profile.email;
            });
            await app.client.chat.postMessage({
                token: process.env.SLACK_BOT_TOKEN,
                channel: "C061UC166MB",
                text: "" + realName + " ( " + username + ") swore: " + message.text + ". \nEmail: " + email,
            });
        } catch (error) {
            console.error(`Error deleting message: ${error.message}`);
        }
    }
});