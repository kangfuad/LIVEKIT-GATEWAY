import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Gateway SSL aktif 🔒" });
});

app.listen(3000, () => console.log("Server listening on port 3000"));
