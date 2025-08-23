onChat: async function ({ event, message, args }) {
  const userMsg = event.body;

  // ✅ Only respond if message starts with "baby"
  if (!/^baby\b/i.test(userMsg)) return;

  const apiKey = "prince";
  const prompt = `Tum meri baby ho , koi pochy tumhen kis ne banaya ha to kehna mujhy Haseen mohtarm  ne banaya hai , tum sirf urdu me baat kro gi , fun masti or flirt kro gi. User ne kaha: "${userMsg}"`;

  try {
    const res = await axios.get(`https://api.princetechn.com/api/ai/openai`, {
      params: {
        apikey: apiKey,
        q: prompt
      }
    });

    const reply = res.data.result || "Awww baby kuch to bolo 💕";
    message.reply(reply);
  } catch (err) {
    console.error("JanuBot Error:", err.response?.data || err.message);
    message.reply("Awww baby error aa gaya 😔 thori dair baad try karo");
  }
}
