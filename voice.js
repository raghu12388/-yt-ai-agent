import gtts from "gtts";

export function createVoice(script) {
  return new Promise((resolve) => {
    const speech = new gtts(script, "hi");
    speech.save("voice.mp3", () => resolve());
  });
}
