import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINIKEY } from "./config";

const genAI = new GoogleGenerativeAI(GEMINIKEY);

export default genAI;