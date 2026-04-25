import { google } from "googleapis";
import fs from "fs";

export async function uploadVideo(meta) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.YOUTUBE_CLIENT_ID,
    process.env.YOUTUBE_CLIENT_SECRET,
    process.env.YOUTUBE_REDIRECT_URI
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.YOUTUBE_REFRESH_TOKEN
  });

  const youtube = google.youtube({
    version: "v3",
    auth: oauth2Client
  });

  await youtube.videos.insert({
    part: "snippet,status",
    requestBody: {
      snippet: {
        title: meta.title,
        description: meta.script,
        tags: meta.tags
      },
      status: {
        privacyStatus: "public"
      }
    },
    media: {
      body: fs.createReadStream("output.mp4")
    }
  });

  console.log("✅ Uploaded to YouTube");
}
