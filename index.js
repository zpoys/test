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
      Cookie:
        "_ga=GA1.1.909444645.1742307361; sel_timezone_v2=Asia/Jakarta; auto_timezone_v2=yes; full_timezone_v2=Waktu Indonesia Barat; short_timezone_v2=WIB; preferred_stserver=kuramadrive; should_do_galak=hide; XSRF-TOKEN=eyJpdiI6IkdyTzN0NzF3a0tXL1UyR0VUNnUwM1E9PSIsInZhbHVlIjoiamVsZ2VsV0tWMFlOY0VlMU5UTCtyRFpDNFVVZEFlLysrSlBVY05iSmV3YmEySGlKanhoNnhuc1o2RzV3amJXb0o2am1VazNoelgzMnFCL2hWNTZ0VUI1TGhJNDhIaXFPa2I4bzg4S1pDdE91amxQcmNFeEw2b0VKeWtWVzh2UU0iLCJtYWMiOiI0ZmE3YTA5YmYzOGJjYmMzZmJkMDg3YjI1OWE2OGRjZjIxMTc0N2JmMzQzOTQ4OGZlMjQ4ODEyMjQyN2M0ZDllIiwidGFnIjoiIn0%3D; kuramanime_session=eyJpdiI6InNrUW15bmJhUnVhbUkvL0kzL0ljeVE9PSIsInZhbHVlIjoiaHoyRzEvNVRQZFN0VHlUenJGWDZOaEdqNUVKUHpsanRacVk3dXdKSHZuSGIwTWtBTGtVZG5oK085eC9ZZWtLYVhIdHMvVTBSUUJuRVl1ZWk3OGIwb1Z3R3VQNFRhWWVuT291OGcrTnFXTEF2NXR1YjcvV0FxQkZmcitPMytlWWwiLCJtYWMiOiJlMDcyZDBmOTZiYWFhZDFhYTlkMzllOTg5ZTU2ZDhiMzhlZWEzZGU4NzU1N2ZmM2NmOWQ1YTI0NGU0MjJjMGE4IiwidGFnIjoiIn0%3D; _ga_D00EX1436J=GS1.1.1743649833.3.1.1743654424.0.0.0",
      Pragma: "no-cache",
      Priority: "u=0, i",
      Origin: "https://v6.kuramanime.run",
      "Sec-Ch-Ua":
        '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
      "Sec-Fetch-Mode": " same-origin",
      "Sec-Fetch-Site": " same-origin",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    },
  });
  const html = await response.text();
  const $ = load(html);
  const title = $("title").text();

  res.send(title);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
