const fs = require("fs");
module.exports.config = {
	name: "sub",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sub",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ایـــــکَ حسیـــــــن محتــــــــرم")==0 || event.body.indexOf("Sub")==0 || event.body.indexOf("Subscribe")==0 || event.body.indexOf("Haseen")==0) {
		var msg = {
				body: "👋For Any Kind Of Help Contact On Facebook Username 👉 @https://www.facebook.com/Neesli.ankho.2023😇",
				attachment: fs.createReadStream(__dirname + `/noprefix/hi.js`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🔔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
