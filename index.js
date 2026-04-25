 async function runAgent() {
  console.log("🚀 AI Agent Started...");

  const content = await generateContent();
  console.log("🧠 Script Ready");

  await createVoice(content.script);
  console.log("🔊 Voice Ready");

  await createVideo();
  console.log("🎬 Video Ready");

  await uploadVideo(content);

  console.log("✅ Uploaded to YouTube");
}
