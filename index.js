const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})
  const Go=async()=>{
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Напиши короткую, смешную новость."}],
    max_tokens: 30,
  });
  console.log(chatCompletion.choices[0].message.content);
}
Go();