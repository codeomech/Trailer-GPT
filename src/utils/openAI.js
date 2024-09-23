import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINIKEY = `${process.env.REACT_APP_GEMINI_API_KEY}`;
const genAI = new GoogleGenerativeAI(GEMINIKEY);

export default genAI;
