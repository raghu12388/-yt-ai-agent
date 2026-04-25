 import axios from "axios";

export async function generateContent() {
  const prompt = `
Create a viral Hindi horror story for YouTube Shorts.

- Hook in first 2 sec
- Very scary
- Real feeling
- Twist ending
- 30-40 seconds
`;

  const res = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );

  return {
    title: "3AM Horror Story 😈",
    script: res.data.choices[0].message.content,
    tags: ["horror", "ghost", "scary", "shorts"],
  };
}
