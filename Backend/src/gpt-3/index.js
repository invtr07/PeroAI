import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv';
dotenv.config();

const key = process.env.API_KEY

const configuration = new Configuration({
    organization: "org-KpDvoEIxMpMQ6mQFe9cJF3fc",
    apiKey: key,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();

console.log(response)

