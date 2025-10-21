import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    domain: "kangfuad.duckdns.org",
    message: "Gateway SSL aktif 🔒",
  });
});

app.listen(3000, () => console.log("Gateway running on port 3000"));
