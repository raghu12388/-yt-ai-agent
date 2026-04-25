import { exec } from "child_process";

export function createVideo() {
  return new Promise((resolve) => {
    exec(
      `ffmpeg -loop 1 -i bg.jpg -i voice.mp3 -shortest -vf "scale=1080:1920" -c:v libx264 -c:a aac output.mp4`,
      () => resolve()
    );
  });
}
