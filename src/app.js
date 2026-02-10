// src/app.js
import express from "express";
import cors from "cors";
import routes from "./routes/index.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:3000",
  "http://localhost:5173",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      console.log("CORS origin:", origin);

      // Allow server-to-server, curl, postman
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // ❌ DO NOT throw error
      // ✅ Just deny
      return callback(null, false);
    },
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

export default app;
