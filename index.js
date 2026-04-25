import "dotenv/config";

import { generateContent } from "./script.js";
import { createVoice } from "./voice.js";
import { createVideo } from "./video.js";
import { uploadVideo } from "./upload.js";
import { createThumbnail } from "./thumbnail.js";

async function runAgent() {
  console.log("🚀 AI Agent Started...");

  const content = await generateContent();
  console.log("🧠 Script Ready");

  await createVoice(content.script);
  console.log("🔊 Voice Ready");

  await createVideo();
  console.log("🎬 Video Ready");

  createThumbnail();

  await uploadVideo(content);

  console.log("🔥 DONE! Video Uploaded");
}

// Run every 6 hours
runAgent();
setInterval(runAgent, 1000 * 60 * 60 * 6);
