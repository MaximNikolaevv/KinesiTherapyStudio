import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import routes from "./routes/routes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/img", express.static(path.join(projectRoot, "img")));
app.use("/model", express.static(path.join(projectRoot, "model")));
app.use("/node_modules", express.static(path.join(projectRoot, "node_modules")));
app.use(express.static(path.join(projectRoot, "frontend-part")));

// Кеширан connection - ВАЖНО: това трябва да е ПРЕДИ routes и catch-all,
// иначе никога не се извиква (catch-all маршрутът поглъща всичко първи)
let isConnected = false;
async function connectDB() {
    if (isConnected) return;

    const uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error("MONGODB_URI не е зададен в environment variables");
    }

    await mongoose.connect(uri);
    isConnected = true;
    console.log("Connected to MongoDB");
}

app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        console.error("DB connection error:", error);
        res.status(500).json({ error: "Database connection failed" });
    }
});

app.use(routes);

app.get(/.*/, (_req, res) => {
    res.sendFile(path.join(projectRoot, "frontend-part", "home.html"));
});

// Локално стартиране само извън Vercel
if (!process.env.VERCEL) {
    const APP_PORT = Number(process.env.PORT) || 3000;
    app.listen(APP_PORT, () => {
        console.log(`KinesiTherapy Studio is running at http://localhost:${APP_PORT}/`);
    });
}

export default app;