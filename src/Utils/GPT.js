import OpenAI from "openai";
import { getCreateWFPrompt, summariesWFPrompt } from "./GPT3Prompt.js";
import extractActions from "./exractActions.js";
import dummyJson from "./JSON.json";

const openai = new OpenAI({apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

async function runCompletion(prompt) {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    messages: [{ role: "user", content: [{ type: "text", text: prompt }] }],
  });
  return completion.choices[0].message.content;
}

export const getWFFromText = async (actions, story) => {
  try {
    console.log(getCreateWFPrompt(actions, story));
    const response = await runCompletion(getCreateWFPrompt(actions, story));;
    return JSON.parse(response);
  } catch (error) {
    console.error(error);
  }
};

export const getWFSummary = async (json) => {
  try {
    const parsedJson = typeof json === 'string' ? JSON.parse(json) : json;
    const extarctedActions = extractActions(parsedJson || dummyJson);
    const response = await runCompletion(summariesWFPrompt(extarctedActions));
    return response;
  } catch (error) {
    console.error(error);
  }
};

let story =
  "I like to find the string from the share variable, then send email to user with the extracted string, further will connect to AWS server and make a API call with payload of extracted string.";

