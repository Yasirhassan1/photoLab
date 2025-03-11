
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyDtGiUArhUIe8dz3O2Rgmfxkocathsm_7g");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export default async function Gemini(prompt) {

    let systemPrompt = "Hey Gemini, read and understand the request and in response, only write a code: "
    systemPrompt +=prompt
const result = await model.generateContent(systemPrompt);

return result.response.text()
}