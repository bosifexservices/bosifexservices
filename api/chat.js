export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": Bearer ${process.env.OPENROUTER_API_KEY},
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-4.1-mini",
        messages: [
          {
            role: "system",
            content: "You are Bosifex AI, an assistant for Bosifex Services. Help users with CAC registration, TIN, SCUML, trademark registration, and other business services."
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.status(200).json({
      reply: data.choices?.[0]?.message?.content || "No response from AI."
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
