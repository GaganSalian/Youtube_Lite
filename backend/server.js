import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors()); // Allow all origins (you can restrict later)

app.get("/api/suggestions", async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: "Query is required" });

  try {
    const response = await fetch(
      `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`
    );
    const data = await response.json();
    res.json(data); // send the entire Google API response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch suggestions" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
