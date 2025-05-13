// import { ProfanityEngine } from '@coffeeandfun/google-profanity-words';
// Pass the 'language' parameter to specify the language (optional).
// Defaults to 'en' if no valid language code is provided.
// const profanity = new ProfanityEngine({ language: 'en' });
// import { readFile } from 'fs';

require('dotenv').config()

Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
};
// var bw1 = profanity.all();
// console.log(bw1);
var bw1 = atob(
    "WyJhNTUiLCAiYTU1aG9sZSIsICJhZW9sdXMiLCAiYWhvbGUiLCAiYW5hbCIsICJhbmFscHJvYmUiLCAiYW5pbGluZ3VzIiwgImFudXMiLCAiYXJlb2xhIiwgImFyZW9sZSIsICJhcmlhbiIsICJhcnlhbiIsICJhc3MiLCAiYXNzYmFuZyIsICJhc3NiYW5nZWQiLCAiYXNzYmFuZ3MiLCAiYXNzZXMiLCAiYXNzZnVjayIsICJhc3NmdWNrZXIiLCAiYXNzaDBsZSIsICJhc3NoYXQiLCAiYXNzaG8xZSIsICJhc3MgaG9sZSIsICJhc3Nob2xlcyIsICJhc3NtYXN0ZXIiLCAiYXNzbXVuY2giLCAiYXNzd2lwZSIsICJhc3N3aXBlcyIsICJhemF6ZWwiLCAiYXp6IiwgImIxdGNoIiwgImJhYmUiLCAiYmFiZXMiLCAiYmFsbHNhY2siLCAiYmFuZyIsICJiYXN0YXJkIiwgImJhc3RhcmRzIiwgImJhd2R5IiwgImJlYW5lciIsICJiZWFyZGVkY2xhbSIsICJiZWFzdGlhbGl0eSIsICJiZWF0Y2giLCAiYmVhdGVyIiwgImJlYXZlciIsICJiZWVyIiwgImJlZXlvdGNoIiwgImJlb3RjaCIsICJiaWF0Y2giLCAiYmlndGl0cyIsICJiaWcgdGl0cyIsICJiaW1ibyIsICJiaXRjaCIsICJiaXRjaGVkIiwgImJpdGNoZXMiLCAiYml0Y2h5IiwgImJsb3cgam9iIiwgImJsb3ciLCAiYmxvd2pvYiIsICJibG93am9icyIsICJib2QiLCAiYm9kaWx5IiwgImJvaW5rIiwgImJvbGxvY2siLCAiYm9sbG9ja3MiLCAiYm9sbG9rIiwgImJvbmUiLCAiYm9uZWQiLCAiYm9uZXIiLCAiYm9uZXJzIiwgImJvbmciLCAiYm9vYiIsICJib29iaWVzIiwgImJvb2JzIiwgImJvb2J5IiwgImJvb3RlZSIsICJib290aWUiLCAiYm9vdHkiLCAiYm9vemUiLCAiYm9vemVyIiwgImJvb3p5IiwgImJvc29tIiwgImJvc29teSIsICJib3dlbCIsICJib3dlbHMiLCAiYnJhIiwgImJyYXNzaWVyZSIsICJicmVhc3QiLCAiYnJlYXN0cyIsICJidWdnZXIiLCAiYnVra2FrZSIsICJidWxsc2hpdCIsICJidWxsIHNoaXQiLCAiYnVsbHNoaXRzIiwgImJ1bGxzaGl0dGVkIiwgImJ1bGx0dXJkcyIsICJidW5nIiwgImJ1c3R5IiwgImJ1dHQiLCAiYnV0dCBmdWNrIiwgImJ1dHRmdWNrIiwgImJ1dHRmdWNrZXIiLCAiYnV0dGZ1Y2tlciIsICJidXR0cGx1ZyIsICJjLjAuYy5rIiwgImMuby5jLmsuIiwgImMudS5uLnQiLCAiYzBjayIsICJjLTAtYy1rIiwgImNhY2EiLCAiY2Fob25lIiwgImNhbWVsdG9lIiwgImNhcnBldG11bmNoZXIiLCAiY2F3ayIsICJjZXJ2aXgiLCAiY2hpbmMiLCAiY2hpbmNzIiwgImNoaW5rIiwgImNoaW5rIiwgImNob2RlIiwgImNob2RlcyIsICJjbDF0IiwgImNsaW1heCIsICJjbGl0IiwgImNsaXRvcmlzIiwgImNsaXRvcnVzIiwgImNsaXRzIiwgImNsaXR0eSIsICJjb2NhaW4iLCAiY29jYWluZSIsICJjb2NrIiwgImMtby1jLWsiLCAiY29ja2Jsb2NrIiwgImNvY2tob2xzdGVyIiwgImNvY2trbm9ja2VyIiwgImNvY2tzIiwgImNvY2tzbW9rZXIiLCAiY29ja3N1Y2tlciIsICJjb2NrIHN1Y2tlciIsICJjb2l0YWwiLCAiY29tbWllIiwgImNvbmRvbSIsICJjb29uIiwgImNvb25zIiwgImNvcmtzdWNrZXIiLCAiY3JhY2siLCAiY3JhY2tlciIsICJjcmFja3dob3JlIiwgImNyYXAiLCAiY3JhcHB5IiwgImN1bSIsICJjdW1taW4iLCAiY3VtbWluZyIsICJjdW1zaG90IiwgImN1bXNob3RzIiwgImN1bXNsdXQiLCAiY3Vtc3RhaW4iLCAiY3VuaWxpbmd1cyIsICJjdW5uaWxpbmd1cyIsICJjdW5ueSIsICJjdW50IiwgImN1bnQiLCAiYy11LW4tdCIsICJjdW50ZmFjZSIsICJjdW50aHVudGVyIiwgImN1bnRsaWNrIiwgImN1bnRsaWNrZXIiLCAiY3VudHMiLCAiZDBuZyIsICJkMHVjaDMiLCAiZDB1Y2hlIiwgImQxY2siLCAiZDFsZDAiLCAiZDFsZG8iLCAiZGFnbyIsICJkYWdvcyIsICJkYXdnaWUtc3R5bGUiLCAiZGljayIsICJkaWNrYmFnIiwgImRpY2tkaXBwZXIiLCAiZGlja2ZhY2UiLCAiZGlja2ZsaXBwZXIiLCAiZGlja2hlYWQiLCAiZGlja2hlYWRzIiwgImRpY2tpc2giLCAiZGljay1pc2giLCAiZGlja3JpcHBlciIsICJkaWNrc2lwcGVyIiwgImRpY2t3ZWVkIiwgImRpY2t3aGlwcGVyIiwgImRpY2t6aXBwZXIiLCAiZGlkZGxlIiwgImRpa2UiLCAiZGlsZG8iLCAiZGlsZG9zIiwgImRpbGlnYWYiLCAiZGlsbHdlZWQiLCAiZGltd2l0IiwgImRpbmdsZSIsICJkaXBzaGlwIiwgImRvZ2dpZS1zdHlsZSIsICJkb2dneS1zdHlsZSIsICJkb25nIiwgImRvb2Z1cyIsICJkb29zaCIsICJkb3BlWSIsICJkb3VjaDMiLCAiZG91Y2hlIiwgImRvdWNoZWJhZyIsICJkb3VjaGViYWdzIiwgImRvdWNoZXkiLCAiZHJ1bmsiLCAiZHVtYXNzIiwgImR1bWJhc3MiLCAiZHVtYmFzc2VzIiwgImR1bW15IiwgImR5a2UiLCAiZHlrZXMiLCAiZWphY3VsYXRlIiwgImVubGFyZ2VtZW50IiwgImVyZWN0IiwgImVyZWN0aW9uIiwgImVyb3RpYyIsICJlc3NvaGJlZSIsICJleHRhY3kiLCAiZXh0YXN5IiwgImYudS5jLmsiLCAiZmFjayIsICJmYWciLCAiZmFnZyIsICJmYWdnZWQiLCAiZmFnZ2l0IiwgImZhZ2dvdCIsICJmYWdvdCIsICJmYWdzIiwgImZhaWciLCAiZmFpZ3QiLCAiZmFubnliYW5kaXQiLCAiZmFydCIsICJmYXJ0a25vY2tlciIsICJmYXQiLCAiZmVsY2giLCAiZmVsY2hlciIsICJmZWxjaGluZyIsICJmZWxsYXRlIiwgImZlbGxhdGlvIiwgImZlbHRjaCIsICJmZWx0Y2hlciIsICJmaXN0ZWQiLCAiZmlzdGluZyIsICJmaXN0eSIsICJmbG9venkiLCAiZm9hZCIsICJmb25kbGUiLCAiZm9vYmFyIiwgImZvcmVza2luIiwgImZyZWV4IiwgImZyaWdnIiwgImZyaWdnYSIsICJmdWJhciIsICJmdWNrIiwgImYtdS1jLWsiLCAiZnVja2FzcyIsICJmdWNrZWQiLCAiZnVja2VkIiwgImZ1Y2tlciIsICJmdWNrZmFjZSIsICJmdWNraW4iLCAiZnVja2luZyIsICJmdWNrbnVnZ2V0IiwgImZ1Y2tudXQiLCAiZnVja29mZiIsICJmdWNrcyIsICJmdWNrdGFyZCIsICJmdWNrLXRhcmQiLCAiZnVja3VwIiwgImZ1Y2t3YWQiLCAiZnVja3dpdCIsICJmdWRnZXBhY2tlciIsICJmdWsiLCAiZnZjayIsICJmeGNrIiwgImdhbmphIiwgImdpZ29sbyIsICJnbGFucyIsICJnb2F0c2UiLCAiZ29kYW1uIiwgImdvZGFtbml0IiwgImdvZGRhbSIsICJnb2RkYW1taXQiLCAiZ29kZGFtbiIsICJnb2xkZW5zaG93ZXIiLCAiZ29uYWQiLCAiZ29uYWRzIiwgImdvb2siLCAiZ29va3MiLCAiZ3JpbmdvIiwgImdzcG90IiwgImctc3BvdCIsICJndGZvIiwgImd1aWRvIiwgImhhbmRqb2IiLCAiaGFyZCBvbiIsICJoZTExIiwgImhlYmUiLCAiaGVlYiIsICJoZWxsIiwgImhlbXAiLCAiaGVyb2luIiwgImhlcnAiLCAiaGVycGVzIiwgImhlcnB5IiwgImhpdGxlciIsICJoaXYiLCAiaG9iYWciLCAiaG9tMCIsICJob21leSIsICJob21vIiwgImhvbW9leSIsICJob25reSIsICJob29jaCIsICJob29rYWgiLCAiaG9va2VyIiwgImhvb3IiLCAiaG9vdGNoIiwgImhvb3RlciIsICJob290ZXJzIiwgImhvcm55IiwgImh1bXAiLCAiaHVtcGVkIiwgImh1bXBpbmciLCAiaHVzc3kiLCAiaHltZW4iLCAiaW5icmVkIiwgImluY2VzdCIsICJpbmp1biIsICJqM3JrMGZmIiwgImphY2thc3MiLCAiamFja2hvbGUiLCAiamFja29mZiIsICJqYXAiLCAiamFwcyIsICJqZXJrIiwgImplcmswZmYiLCAiamVya2VkIiwgImplcmtvZmYiLCAiamlzbSIsICJqaXoiLCAiaml6bSIsICJqaXp6IiwgImppenplZCIsICJqdW5raWUiLCAianVua3kiLCAia2lrZSIsICJraWtlcyIsICJraWxsIiwgImtpbmt5IiwgImtrayIsICJrbGFuIiwgImtub2JlbmQiLCAia29vY2giLCAia29vY2hlcyIsICJrb290Y2giLCAia3JhdXQiLCAia3lrZSIsICJsYWJpYSIsICJsZWNoIiwgImxlcGVyIiwgImxlc2JpYW5zIiwgImxlc2JvIiwgImxlc2JvcyIsICJsZXoiLCAibGV6YmlhbiIsICJsZXpiaWFucyIsICJsZXpibyIsICJsZXpib3MiLCAibGV6emllIiwgImxlenppZXMiLCAibGV6enkiLCAibG9pbiIsICJsb2lucyIsICJsdWJlIiwgImx1c3R5IiwgIm1hbXMiLCAibWFzc2EiLCAibWFzdGVyYmF0ZSIsICJtYXN0ZXJiYXRpbmciLCAibWFzdGVyYmF0aW9uIiwgIm1hc3R1cmJhdGUiLCAibWFzdHVyYmF0aW5nIiwgIm1hc3R1cmJhdGlvbiIsICJtYXhpIiwgIm1lbnNlcyIsICJtZW5zdHJ1YXRlIiwgIm1lbnN0cnVhdGlvbiIsICJtZXRoIiwgIm0tZnVja2luZyIsICJtb2ZvIiwgIm1vbGVzdCIsICJtb29saWUiLCAibW9yb24iLCAibW90aGVyZnVja2EiLCAibW90aGVyZnVja2VyIiwgIm1vdGhlcmZ1Y2tpbmciLCAibXRoZXJmdWNrZXIiLCAibXRocmZ1Y2tlciIsICJtdGhyZnVja2luZyIsICJtdWZmIiwgIm11ZmZkaXZlciIsICJtdXRoYWZ1Y2theiIsICJtdXRoYWZ1Y2tlciIsICJtdXRocmZ1Y2tlciIsICJtdXRocmZ1Y2tpbmciLCAibmFkIiwgIm5hZHMiLCAibmFrZWQiLCAibmFwYWxtIiwgIm5hcHB5IiwgIm5lZ3JvIiwgIm5pZ2dhIiwgIm5pZ2dhaCIsICJuaWdnYXMiLCAibmlnZ2F6IiwgIm5pZ2dlciIsICJuaWdnZXIiLCAibmlnZ2VycyIsICJuaWdnbGUiLCAibmlnbGV0IiwgIm5pbXJvZCIsICJuaW5ueSIsICJuaXBwbGUiLCAibm9va3kiLCAib3JhbCIsICJvcmFsbHkiLCAib3JnYW4iLCAib3JnYXNtIiwgIm9yZ2FzbWljIiwgIm9yZ2llcyIsICJvcmd5IiwgIm92YXJ5IiwgIm92dW0iLCAib3Z1bXMiLCAicC51LnMucy55LiIsICJwYWRkeSIsICJwYWtpIiwgInBhbnRpZSIsICJwYW50aWVzIiwgInBhbnR5IiwgInBhc3RpZSIsICJwYXN0eSIsICJwY3AiLCAicGVja2VyIiwgInBlZG8iLCAicGVkb3BoaWxlIiwgInBlZG9waGlsaWEiLCAicGVkb3BoaWxpYWMiLCAicGVlIiwgInBlZXBlZSIsICJwZW5ldHJhdGUiLCAicGVuZXRyYXRpb24iLCAicGVuaWFsIiwgInBlbmlsZSIsICJwZW5pcyIsICJwZXJ2ZXJzaW9uIiwgInBleW90ZSIsICJwaGFsbGkiLCAicGhhbGxpYyIsICJwaHVjayIsICJwaWxsb3diaXRlciIsICJwaW1wIiwgInBpbmtvIiwgInBpc3MiLCAicGlzc2VkIiwgInBpc3NvZmYiLCAicGlzcy1vZmYiLCAicG1zIiwgInBvbGFjayIsICJwb2xsb2NrIiwgInBvb24iLCAicG9vbnRhbmciLCAicG9ybiIsICJwb3JubyIsICJwb3Jub2dyYXBoeSIsICJwb3QiLCAicG90dHkiLCAicHJpY2siLCAicHJpZyIsICJwcm9zdGl0dXRlIiwgInBydWRlIiwgInB1YmUiLCAicHViaWMiLCAicHViaXMiLCAicHVua2FzcyIsICJwdW5reSIsICJwdXNzIiwgInB1c3NpZXMiLCAicHVzc3kiLCAicHVzc3lwb3VuZGVyIiwgInB1dG8iLCAicXVlYWYiLCAicXVlZWYiLCAicXVlZWYiLCAicXVlZXIiLCAicXVlZXJvIiwgInF1ZWVycyIsICJxdWlja3kiLCAicXVpbSIsICJyYWN5IiwgInJhdW5jaCIsICJyZWN0YWwiLCAicmVjdHVtIiwgInJlY3R1cyIsICJyZWVmZXIiLCAicmV0YXJkIiwgInJlaWNoIiwgInJldGFyZCIsICJyZXRhcmRlZCIsICJyZXZ1ZSIsICJyaW1qb2IiLCAicml0YXJkIiwgInJ0YXJkIiwgInItdGFyZCIsICJydW0iLCAicnVtcCIsICJydW1wcmFtbWVyIiwgInJ1c2tpIiwgInMuaC5pLnQiLCAicz8uYi4iLCAiczBiIiwgInNhZGlzbSIsICJzYWRpc3QiLCAic2NhZyIsICJzY2FudGlseSIsICJzY2hpem8iLCAic2NobG9uZyIsICJzY3JldyIsICJzY3Jld2VkIiwgInNjcm9nIiwgInNjcm90IiwgInNjcm90ZSIsICJzY3JvdHVtIiwgInNjcnVkIiwgInNjdW0iLCAic2VhbWFuIiwgInNlYW1lbiIsICJzZWR1Y2UiLCAic2VtZW4iLCAic2V4IiwgInNleHVhbCIsICJzaDF0IiwgInMtaC0xLXQiLCAic2hhbWVkYW1lIiwgInNoaXQiLCAicy1oLWktdCIsICJzaGl0ZSIsICJzaGl0ZWF0ZXIiLCAic2hpdGZhY2UiLCAic2hpdGhlYWQiLCAic2hpdGhvbGUiLCAic2hpdGhvdXNlIiwgInNoaXRzIiwgInNoaXR0IiwgInNoaXR0ZWQiLCAic2hpdHRlciIsICJzaGl0dHkiLCAic2hpeiIsICJzaXNzeSIsICJza2FnIiwgInNrYW5rIiwgInNsYXZlIiwgInNsZWF6ZSIsICJzbGVhenkiLCAic2x1dCIsICJzbHV0ZHVtcGVyIiwgInNsdXRraXNzIiwgInNsdXRzIiwgInNtZWdtYSIsICJzbXV0IiwgInNtdXR0eSIsICJzbmF0Y2giLCAic25pcGVyIiwgInNudWZmIiwgInMtby1iIiwgInNvZG9tIiwgInNvdXNlIiwgInNvdXNlZCIsICJzcGVybSIsICJzcGljIiwgInNwaWNrIiwgInNwaWsiLCAic3Bpa3MiLCAic3Bvb2dlIiwgInNwdW5rIiwgInN0aWZmeSIsICJzdG9uZWQiLCAic3RyaXAiLCAic3Vtb2ZhYmlhdGNoIiwgInQxdCIsICJ0YW1wb24iLCAidGFyZCIsICJ0YXdkcnkiLCAidGVhdCIsICJ0ZXJkIiwgInRlc3RlIiwgInRlc3RlZSIsICJ0ZXN0ZXMiLCAidGVzdGljbGUiLCAidGVzdGlzIiwgInRocnVzdCIsICJ0aHVnIiwgInRpdCIsICJ0aXRmdWNrIiwgInRpdGkiLCAidGl0cyIsICJ0aXR0aWVmdWNrZXIiLCAidGl0dGllcyIsICJ0aXR0eSIsICJ0aXR0eWZ1Y2siLCAidGl0dHlmdWNrZXIiLCAidG9rZSIsICJ0b290cyIsICJ0cmFtcCIsICJ0cmFzaHkiLCAidHViZ2lybCIsICJ0dXJkIiwgInR1c2giLCAidHdhdCIsICJ0d2F0cyIsICJ1bmRpZXMiLCAidW53ZWQiLCAidXJpbmFsIiwgInVyaW5lIiwgInV0ZXJ1cyIsICJ1emkiLCAidmFnIiwgInZhZ2luYSIsICJ2YWxpdW0iLCAidmlhZ3JhIiwgInZpcmdpbiIsICJ2aXhlbiIsICJ2b2RrYSIsICJ2b21pdCIsICJ2b3lldXIiLCAidnVsZ2FyIiwgInZ1bHZhIiwgIndhbmciLCAid2FuayIsICJ3YW5rZXIiLCAid2F6b28iLCAid2VkZ2llIiwgIndlZWQiLCAid2VlbmllIiwgIndlZXdlZSIsICJ3ZWluZXIiLCAid2VpcmRvIiwgIndlbmNoIiwgIndldGJhY2siLCAid2gwcmUiLCAid2gwcmVmYWNlIiwgIndoaXRleSIsICJ3aGl6IiwgIndob3JhbGljaW91cyIsICJ3aG9yZSIsICJ3aG9yZWFsaWNpb3VzIiwgIndob3JlZCIsICJ3aG9yZWZhY2UiLCAid2hvcmVob3BwZXIiLCAid2hvcmVob3VzZSIsICJ3aG9yZXMiLCAid2hvcmluZyIsICJ3aWdnZXIiLCAid29tYiIsICJ3b29keSIsICJ3b3AiLCAid3RmIiwgIngtcmF0ZWQiLCAieHh4IiwgInllYXN0eSIsICJ5b2JibyIsICJ6b29waGlsZSJd").slice(1, -1).split(',');
const badwordlist = bw2/* .concat(bw1).unique() */;
const { App } = require("@slack/bolt");

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,
});
const net = require('net');
const server = net.createServer(socket => {
  socket.on('data', data => {
      socket.write('HTTP/1.1 200 OK\r\n\r\n');
      socket.end();
  });
});
server.listen(3000, '0.0.0.0');
(async () => {
    const port = 3000;
    await app.start(process.env.PORT || port);
    console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();

app.message(async ({ message, say }) => {
    var msg = message.text.toLowerCase();
    if (badwordlist.some((substring) => msg.includes(substring))) {
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
                channel: "C074WGS366N",
                text: "" + realName + " ( " + username + ") swore: " + message.text + ". \nEmail: " + email,
            });
        } catch (error) {
            console.error(`Error deleting message: ${error.message}`);
        }
    }
});
