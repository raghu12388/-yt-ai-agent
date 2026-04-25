 import fs from "fs";

export async function createVoice(script) {
  // Dummy voice (replace with real TTS later)
  fs.writeFileSync("voice.mp3", script);
}
