const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Masoom",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Tum jab 'bot' bolte ho, mera gurda dhadakne lagta hai 🥺🙊🙈",
    "Bhai jaan group mein gandi baatein mat karo",
     "Lips kissing is not romance... it's sharing bacteria",
      "Tum mera dil chura nahi paye... kya faida tumhari chor jaisi shakal ka!!",
      "Pyaari voice wali girls mujhe voice msg kar sakti hain🙂",
      " Pata nahi log itni balance life kaise guzarte hain... mera tou kabhi paratha pehle khatam ho jaata hai kabhi anda",
      "Kaash hum dono WhatsApp pe hote ❤️🥺. edhrr ao tumyy godee me uthaoo💋' 💄😒",
      "hyee hyee... 'beta sabar ka imtihaan mat le😩👐",
      "Us ne kaha chand ho tum... i love u ummmmah🌚😂",
      "Mujhe us se mohabbat thi... par us ke signal weak thay 📶❌",
      "Tere bina to raaton ki neend gayi... par neend gayi nahi, tu sapno mein dikh gaya 👻",
      "Tujh pe ghazal likhna chahta tha.. par dimaag bola 'waste of ink' 🖊️😤",
      "Tere pyar ne hamein woh dukh diye... jaise wedding card ke baad rishta tod diya ho 📩💔",
      "Tujhe bhoolna chahta hoon... par tu  mobile use kro to yaad aa jate hai 👡😭",
      "Tu zindagi ka wo safha hai... jise main page number samajh ke ulta tha 📖",
      "Mohabbat ka chaska lagaya us ne... aur chuski ki tarah chhod bhi gaye🧊💔",
      "𝐥𝐚𝐚𝐧𝐚𝐭 𝐛𝐡𝐢 𝐤𝐲𝐚 𝐜𝐡𝐞𝐞𝐳 𝐡𝐚𝐢 𝐚𝐝𝐫𝐞𝐬𝐬 𝐧𝐚𝐡 𝐛𝐡𝐢 𝐥𝐢𝐤𝐡𝐨𝐧 𝐦𝐮𝐬𝐭𝐚𝐡𝐢𝐪 𝐚𝐟𝐫𝐚𝐚𝐝 𝐭𝐚𝐤 𝐩𝐚𝐡𝐨𝐧𝐜𝐡 𝐣𝐚𝐭𝐢 𝐡𝐚𝐢🤣",
      "𝐰𝐨𝐡 𝐣𝐨 𝐤𝐚𝐫𝐨𝐫𝐫𝐨𝐧 𝐦𝐞𝐢𝐧 𝐚𝐢𝐤 𝐡𝐚𝐢 𝐧𝐚! 𝐰𝐨𝐡 𝐦𝐞𝐢𝐧 𝐤𝐡𝐮𝐝 𝐡𝐢 𝐡𝐨",
      "Humry Shona baby kbii humra tha ab kese or ka hoga🥺🥺🥺",
      "𝐀𝐚𝐨 𝐝𝐚𝐫𝐝 𝐛𝐚𝐧𝐭𝐭𝐚𝐲 𝐡𝐚𝐢𝐧 𝐓𝐮𝐦 𝐝𝐚𝐫𝐰𝐚𝐳𝐚𝐲 𝐦𝐞𝐢𝐧 𝐮𝐧𝐠𝐥𝐢 𝐝𝐨 𝐏𝐡𝐢𝐫 𝐦𝐢𝐥 𝐤𝐚𝐫 𝐜𝐡𝐞𝐞𝐤𝐡𝐚𝐢𝐧 𝐦𝐚𝐚𝐫𝐭𝐚𝐲 𝐡𝐚𝐢𝐧🙈🙈",
      "𝐓𝐚𝐢𝐫𝐚𝐲 𝐣𝐚𝐚𝐧𝐞 𝐤𝐞 𝐛𝐚𝐚𝐝 𝐰𝐚𝐪𝐭 𝐭𝐡𝐚𝐦 𝐬𝐚 𝐠𝐚𝐲𝐚 𝐭𝐡𝐚 𝐁𝐚𝐚𝐝 𝐦𝐞𝐢𝐧 𝐩𝐚𝐭𝐚 𝐜𝐡𝐚𝐥𝐚 𝐤𝐞 𝐆𝐡𝐚𝐫𝐢 𝐤𝐚 𝐜𝐞𝐥𝐥 𝐤𝐡𝐚𝐭𝐚𝐦 𝐡𝐨𝐠𝐚𝐲𝐚 𝐭𝐡𝐚🤣🙈",
      "Itna single hoon ke khwab mein bhi larki ke haan karne se pehle aankh khul jaati hai 🙂🤣😂",
      "Aao pyaar karein💋💋😅",
      "Tumko meri ittu si bhi yaad nahi aati 🥹",
      "Itna single hoon ke khwab mein bhi larki ke haan karne se pehle aankh khul jaati hai🙂",
     ];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `🔶${name}🔶,  \n\n『\n   ${rand} 』\n\n❤️𝙲𝚛𝚎𝚍𝚒𝚝𝚜 : ایـــــکَ حسیـــــــن محتــــــــرم🌹 `
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
