const dotenv=require("dotenv");
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const pdfParse = require("pdf-parse");
const axios = require("axios");

dotenv.config();
const app = express();
const upload = multer();

app.use(cors());
app.use(express.json());

const API_KEY = process.env.OPENROUTER_API_KEY;

let storedResume = null;

// Store Resume
app.post("/storeResume", upload.single("resume"), async (req, res) => {
    const pdfData = await pdfParse(req.file.buffer);
    storedResume = pdfData.text;
    res.json({ success: true });
});

// Remove Resume
app.post("/removeResume", (req, res) => {
    storedResume = null;
    res.json({ success: true });
});

// AI Function
async function getAIScore(jd, resumeText) {
    try {
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openrouter/free",
                messages: [
                    {
                        role: "user",
                        content: `
Return ONLY JSON:
{
  "score": number,
  "missingSkills": [],
  "matchingSkills": [],
  "improvementSuggestions": []
}

JD:
${jd}

Resume:
${resumeText}
`
                    }
                ]
            },
            {
                headers: {
                    Authorization: "Bearer " +  API_KEY,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "http://localhost:9000",
                    "X-Title": "ATS Checker"
                }
            }
        );

        return response.data.choices[0].message.content;

    } catch (err) {
        console.error(err.response?.data || err.message);
        return null;
    }
}

// Calculate Score
app.post("/calculateScore", async (req, res) => {

    if (!storedResume) {
        return res.json({ error: "Upload resume first" });
    }

    const jd = req.body.jd;

    const aiResult = await getAIScore(jd, storedResume);

    if (!aiResult) {
        return res.json({ error: "AI failed" });
    }

    const match = aiResult.match(/\{[\s\S]*\}/);

    if (!match) {
        return res.json({ error: "Invalid AI response" });
    }

    res.json(JSON.parse(match[0]));
});

app.listen(9000, () => {
    console.log("Server running on port 9000");
});