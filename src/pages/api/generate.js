import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function generatePrompt(word) {
  return `Generate exactly 4 words that are associatiated with "${word}"`;
}
export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const keyword = req.body || '';
  if (keyword.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid keyword",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(keyword),
      temperature: 0.5,
    });
    
    //I will pass this output object to 'Tree' page 
    const jsonString = JSON.stringify({ result: completion.data.choices[0].text });
    res.status(200).send(jsonString);

    // const response = res.status(200).json({ result: completion.data.choices[0].text });
    // response.stringify()
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

