export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { prompt } = req.body;
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2000,
        messages: [{ 
          role: "user", 
          content: prompt + "\n\nIMPORTANT: Your entire response must be ONLY a valid JSON object. No text before or after. No markdown. No backticks. Start with { and end with }"
        }],
      }),
    });
    const data = await response.json();
    console.log("Full API response:", JSON.stringify(data));
    const text = data.content?.map((i) => i.text || "").join("") || "";
    console.log("Text received:", text);
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return res.status(500).json({ error: "No valid response received" });
    }
    const parsed = JSON.parse(jsonMatch[0]);
    res.status(200).json(parsed);
  } catch (err) {
    console.log("Error:", err.message);
    res.status(500).json({ error: err.message });
  }
}
