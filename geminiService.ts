
import { GoogleGenAI } from "@google/genai";

// Use strictly process.env.API_KEY as per instructions
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStylistAdvice = async (productName: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a sophisticated European fashion stylist from Paris. 
      Briefly suggest how to style the item "${productName}" for an elegant event. 
      Keep it under 60 words and maintain a luxury, poetic tone.`,
      config: {
        temperature: 0.7,
      }
    });
    // response.text is a getter, correctly accessed as a property
    return response.text || "Our stylist is currently attending a runway show. Please check back later.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Elegance is an attitude. This piece speaks for itself.";
  }
};
