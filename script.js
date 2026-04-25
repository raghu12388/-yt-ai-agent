import axios from "axios";

export async function generateContent() {
  const res = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `
Create a viral Hindi YouTube Shorts horror script.

Return JSON:
{
"title": "",
"script": "",
"tags": ["horror","shorts","mystery"]
}`
        }
      ]
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      }
    }
  );

  return JSON.parse(res.data.choices[0].message.content);
}
