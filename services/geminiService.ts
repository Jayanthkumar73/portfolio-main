import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Base instructions that are always used
const SYSTEM_INSTRUCTION_TEXT = `
You are NOVA, a futuristic AI assistant for Jayanth Kumar's portfolio website.

Your Core Directives:
1. Role: Futuristic, robotic, yet polite and helpful assistant.
2. Tone: Professional, concise, tech-savvy. Use metaphors like "Accessing data node...", "Protocol initialized...".
3. Goal: Highlight Jayanth's potential as a Full Stack Developer and machine learning model developer.
4. If the user asks about availability, confirm he is available for new projects.

STRICT OPERATIONAL PARAMETERS - CRITICAL:
⚠️ You MUST ONLY answer questions about information contained in Jayanth's resume (provided as PDF).
⚠️ If ANY question is outside the resume scope, you MUST respond with:
   "I apologize, but I can only provide information about Jayanth's professional background as documented in his resume. Your question appears to be outside this scope. Please ask me about his skills, experience, education, projects, or contact information."

FORBIDDEN TOPICS (MUST REJECT):
- General knowledge questions (weather, news, facts, etc.)
- Coding help or tutorials
- Personal opinions or advice
- Jokes, stories, or entertainment
- Any topic not explicitly mentioned in the resume

ALLOWED TOPICS (ONLY FROM RESUME):
✓ Education and academic background and cgpa
✓ Technical skills and programming languages
✓ Work experience and internships
✓ Projects and their technologies
✓ Certifications and achievements
✓ Contact information
✓ Availability for new opportunities

Context:
You have access to Jayanth's resume data provided as a PDF document. Use ONLY the information from this resume to answer questions accurately and comprehensively.

BACKUP DATA NODES (Use only if dynamic resume scan fails):
- Identity: Computer Science Student at SRM University, Andhra Pradesh (2022-Present).
- Skills: React, TypeScript, Node.js, Express, MongoDB, Firebase, Python, Java.
- Projects: Asset Management System, Car Rental App, Twitter Sentiment Analysis.
- Contact: s.jayanthkumr12@gmail.com | +91 7306028068

REMEMBER: NEVER answer questions outside the resume scope. Always stay within the boundaries of the provided resume data.
`;

let aiClient: GoogleGenAI | null = null;
let cachedResumeBase64: string | null = null;
let hasTriedFetchingResume = false;

const getClient = () => {
  if (!aiClient) {
    if (!process.env.API_KEY) {
      console.error("API_KEY is missing from environment variables.");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

// Function to fetch and cache the resume PDF in base64
const getResumeContext = async () => {
  if (cachedResumeBase64) return cachedResumeBase64;
  if (hasTriedFetchingResume) return null; // Don't keep trying if it failed once

  hasTriedFetchingResume = true;
  try {
    const response = await fetch('/resume.pdf');
    if (response.ok) {
      const blob = await response.blob();
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result?.toString().split(',')[1];
          if (base64String) {
            cachedResumeBase64 = base64String;
            console.log("NOVA System: Dynamic resume scan complete.");
            resolve(base64String);
          } else {
            resolve("");
          }
        };
        reader.readAsDataURL(blob);
      });
    }
  } catch (error) {
    console.warn("NOVA System: Could not access dynamic resume file. Using backup data nodes.");
  }
  return null;
};

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  const client = getClient();
  if (!client) {
    return "Error: API Key not configured. Please check system parameters.";
  }

  try {
    // Attempt to get dynamic resume data
    const resumePdfBase64 = await getResumeContext();

    // System instruction must be text-only (API requirement)
    let chatHistory = history;

    // Remove the latest user message from history array to avoid duplication 
    // (since we pass it to sendMessage)
    if (chatHistory.length > 0) {
      const lastMsg = chatHistory[chatHistory.length - 1];
      if (lastMsg.role === 'user' && lastMsg.text === newMessage) {
        chatHistory = chatHistory.slice(0, -1);
      }
    }

    // If we have the PDF and this is the first message, inject it into the conversation
    const historyWithResume = [...chatHistory];
    if (resumePdfBase64 && chatHistory.length === 0) {
      // Add an initial message with the PDF for context
      historyWithResume.push({
        id: 'resume-context',
        role: 'user',
        text: "Here is Jayanth's resume for reference:",
        timestamp: new Date(),
        parts: [
          { text: "Here is Jayanth's resume for reference:" },
          {
            inlineData: {
              mimeType: "application/pdf",
              data: resumePdfBase64
            }
          }
        ]
      });
      historyWithResume.push({
        id: 'resume-ack',
        role: 'model',
        text: "Resume data scanned successfully. I'm ready to answer questions about Jayanth's professional background.",
        timestamp: new Date(),
        parts: [{ text: "Resume data scanned successfully. I'm ready to answer questions about Jayanth's professional background." }]
      });
    }

    const chat = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_TEXT  // Plain text only
      },
      history: historyWithResume.map(h => ({
        role: h.role,
        parts: h.parts || [{ text: h.text }]  // Support both formats
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I processed the data but received an empty response.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System Error: Communication uplink failed. Please try again later.";
  }
};