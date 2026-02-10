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
    origin: function (origin, callback) {
      // allow non-browser requests (Postman, curl)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

export default app;
