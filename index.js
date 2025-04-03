import express from "express";
import { load } from "cheerio";

const app = express();
const port = 3001;

app.get("/", async (req, res) => {
  const response = await fetch(
    "https://v6.kuramanime.run/anime/3503/saikyou-no-ousama-nidome-no-jinsei-wa-nani-wo-suru/episode/1",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      },
    }
  );
  const html = await response.text();
  const $ = load(html);
  const title = $("title").text();

  res.send(title);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
