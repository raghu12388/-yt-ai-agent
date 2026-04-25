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

      await new Promise(r => setTimeout(r, 60000)); // 1 min delay

    } catch (err) {
      console.log("❌ Error:", err.message);
    }
  }
}

// RUN FIRST TIME
runAgentBatch();

// KEEP SERVER ALIVE (VERY IMPORTANT)
setInterval(() => {
  console.log("⏳ Keeping server alive...");
}, 1000 * 60 * 5);

// RUN EVERY DAY
setInterval(runAgentBatch, 1000 * 60 * 60 * 24);
