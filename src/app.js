// src/app.js
import express from "express";
import cors from "cors";
import routes from "./routes/index.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const frontendURL = process.env.FRONTEND_URL.replace(/\/$/, "");
app.use(
  cors({
    origin: frontendURL,
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

export default app;
