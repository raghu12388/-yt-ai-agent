 import { exec } from "child_process";

export async function createVideo() {
  return new Promise((resolve, reject) => {
    exec(
      "ffmpeg -loop 1 -i bg.jpg -i voice.mp3 -c:v libx264 -t 30 -pix_fmt yuv420p output.mp4",
      (err) => {
        if (err) reject(err);
        else resolve();
      }
    );
  });
}
