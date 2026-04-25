import fs from "fs";

export function createThumbnail() {
  fs.copyFileSync("bg.jpg", "thumb.jpg");
}
