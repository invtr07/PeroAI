import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.animal),
    temperature: 1,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(keywords) {
  return `Generate association words for keywords.

  keywords: football, EPL
  association words: Ronaldo, Old Trafford, boots, Nike
  
  keywords: love, romance
  association words: Romeo and Juliet, relationships, support, understanding, empathy, eiffel tower
  
  keywords: ${keywords}
  association words: `;
}

