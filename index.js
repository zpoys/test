import express from "express";
import { load } from "cheerio";

const app = express();
const port = 3001;

app.get("/", async (req, res) => {
  const response = await fetch("https://v6.kuramanime.run/", {
    headers: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Accept-Language": "en-US,en;q=0.9,id;q=0.8",
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Priority: "u=0, i",
      Origin: "https://v6.kuramanime.run",
      Referer: "https://v6.kuramanime.run",
      "Sec-Ch-Ua":
        '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
      "Sec-Fetch-Mode": " same-origin",
      "Sec-Fetch-Site": " same-origin",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    },
  });
console.log(response.status);
  const html = await response.text();
  const $ = load(html);
  const title = $("title").text();

  res.send(title);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
