 import { generateContent } from "./script.js";
import { createVoice } from "./voice.js";
import { createVideo } from "./video.js";
import { uploadVideo } from "./upload.js";

async function runAgentBatch() {
  console.log("🚀 Starting AI Content Machine...");

  for (let i = 1; i <= 10; i++) {
    console.log(`🎬 Video ${i}/10`);

    try {
      const content = await generateContent();
      console.log("🧠 Script Ready");

      await createVoice(content.script);
      console.log("🔊 Voice Ready");

      await createVideo();
      console.log("🎬 Video Ready");

      await uploadVideo(content);
      console.log("✅ Uploaded");

      // Delay to avoid API limits
      await new Promise(r => setTimeout(r, 60000));

    } catch (err) {
      console.log("❌ Error:", err.message);
    }
  }

  console.log("🔥 Batch Completed");
}

// Run immediately
runAgentBatch();

// Keep app alive
setInterval(() => {
  console.log("⏳ Keeping server alive...");
}, 1000 * 60 * 5);

// Run daily
setInterval(runAgentBatch, 1000 * 60 * 60 * 24);
