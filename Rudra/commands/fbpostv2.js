module.exports.config = {
  name: "autoemoji",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Kashif Raza & Ayan Ali",
  description: "Auto reply to emoji-only messages with funny desi style",
  commandCategory: "fun",
  usages: "auto emoji detect & reply",
  cooldowns: 2
};

module.exports.handleEvent = async function ({ api, event }) {
  const { body, threadID, messageID, senderID } = event;
  if (!body) return;

  const emojiOnly = /^[\p{Emoji}\s]+$/u;
  if (!emojiOnly.test(body.trim())) return;

  const emoji = body.trim();

  // Get user info for personalized replies
  let userName = "Babu";
  try {
    const userInfo = await api.getUserInfo(senderID);
    userName = userInfo[senderID]?.name || "Babu";
  } catch (e) {
    console.log("Error getting user info:", e);
  }

  // Desi Style Emoji Replies
  const replyMap = {
    "💔": `Aray ${userName}! koi bt nhi dil tot gya ha to life ha sab chlta ha! 😆`,
    "🧟": `${userName} zombie ban kar bina paise ke bill maang rahe ho? Yeh koi Naya trend hai? 🧟‍♂️`,
    "🌹": `Phool dekar dil jeetne ka plan hai ${userName}? Chalo ek gulab jamun bhi khila do! 🌹🍮`,
    "😁": `Itni khushi? Kya lottery lag gayi ${userName} ya biryani mil gayi? 😂`,
    "😅": `Paseene mein dubi muskurahat ${userName}? AC band hai kya? ❄️`,
    "😂": `Ziyda na hanso ${userName}, warna pet mein dard hone lagega! 🤣`,
    "🤣": `Hans hans ke haddi toot jayegi ${userName}! Doctor ke paas jaana padega! 🏥`,
    "😭": `Rona band karo ${userName}, warna Ammi aa jayengi puchne "Mobile mein kya dekh rahe ho?" 👵`,
    "😉": `Aankh maregi toh Ammi se complaint kar dunga ${userName}! 👀`,
    "😗": `Uff ${userName}, flying kiss se kaam nahi chalega... Eid pe Eidi bhi chahiye! 💸`,
    "😘": `Chumma chati se kaam nahi chalega ${userName}, ek plate samose bhi khila do! 😋`,
    "🥰": `Pyaar mohabbat sab theek hai ${userName}, par shaadi mein biryani zaroor bulana! 🍗`,
    "😍": `Deewangi dikha rahe ho ${userName}? Pehle apna charger to laga lo, 1% hai battery! 🔋`,
    "🥳": `Party kar rahe ho ${userName}? DJ wale bhaiya ko bolna "Bhabi Ji Ko Party De" laga de! 🎶`,
    "🫠": `Pighal gaye ${userName}? Garmi mein AC chala lo na! ❄️`,
    "🙃": `Ulat pulat khel rahe ho ${userName}? Seedha bolo na yaar! 🤪`,
    "🙂": `Nakli muskurahat ${userName}? Andar se ro rahe ho na? 😏`,
    "🥲": `kya huwa mre jan`,
    "💖": `Mohabbat zindabad ${userName}! Par pehle parents ki permission leni padegi! 👨👩`,
    "💝": `Gift ka irada hai ${userName}? Humko toh iPhone chahiye! 📱`,
    "🧡": `Josh mein ho ${userName}? Thoda control karo, warna Ammi aayengi! 👵`,
    "💛": `Dosti ka rang ${userName}? Yaad rakhna, hum hamesha saath hain! 🤝`,
    "🎉": `Party ka plan hai ${userName}? DJ wale bhaiya ko bolna "Bhabi Ji Ko Party De" laga de! 🎶`,
    "💋": `ummmmmahhhhh💋💋${userName}, baby💋💋! 😋`,
    "👀": `Jugnu banke chamak rahe ho ${userName}? Battery low hai kya? 🔋`,
    "🙌": `Haan bhai haan ${userName}, hum bhi nachte hain thumak thumak ke! 💃`,
    "🫶": `Pyaar dikha rahe ho ${userName}? Hum toh sirf biryani se pyaar karte hain! 🍗`,
    "🥀": `Murjha gaye ho ${userName}? Ek cup chai pilata hoon! ☕`,
    "🐥": `Chuza banke cute bann rahe ho ${userName}? Khao ek anda! 🥚`,
    "🔪": `Kaatne ka irada hai ${userName}? Pehle onions kaat lo! 🧅`,
    "🎈": `Udaan bhar rahe ho ${userName}? Gas ka bill bharna padega! 💸`,
    "🧸": `Bachche banke cute bann rahe ho ${userName}? Chalo lullaby gaata hoon! 🎶`
  };

  // Check for exact emoji match
  for (const emo in replyMap) {
    if (emoji.includes(emo)) {
      return api.sendMessage(replyMap[emo], threadID, messageID);
    }
  }

  // If no exact match, send random desi style reply
  const randomReplies = [
    `Arrey ${userName} yeh konsi bhasha hai? Emojipuri? 🤔`,
    `${userName} bhai itne emoji? Keyboard pe dance practice kar rahe ho kya? 💃⌨️`,
    `Wah ${userName} ji! Emoji ka pura dictionary bhej diya! 📚`,
    `${userName} yeh emoji samajh nahi aaya... Google Baba se puch kar bataunga! 🔍`,
    `Aree ${userName} emoji bomb! Humare pass white flag nahi hai! 🏳️`,
    `${userName} emoji ki baraat nikal di! 🎉 Ab mithai khilao! 🍬`
  ];
  
  return api.sendMessage(
    randomReplies[Math.floor(Math.random() * randomReplies.length)],
    threadID,
    messageID
  );
};

module.exports.run = function () {};

