import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors()); // frontendga ruxsat berish
app.use(express.json()); // JSON formatdagi malumotni tushunish

app.get("/api/status", (req, res) => {
  res.json({
    massage: "SmartControl server ishlamoqda! 🚀",
    time: new Date().toDateString(),
  });
});

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`-----------------------------------`);
  console.log(`✅ Server ishga tushdi: http://localhost:${PORT}`);
  console.log(`-----------------------------------`);
});
