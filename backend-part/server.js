import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes/routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const app = express();

async function start() {

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use("/img", express.static(path.join(projectRoot, "img")));
    app.use("/model", express.static(path.join(projectRoot, "model")));
    app.use("/node_modules", express.static(path.join(projectRoot, "node_modules")));
    app.use(express.static(path.join(projectRoot, "frontend-part")));
    app.use(routes);

    const uri = "mongodb://localhost:27017/KinesiTherapy";
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");


    app.get(/.*/, (_req, res) => {
        res.sendFile(path.join(projectRoot, "frontend-part", "home.html"));
    });

    const APP_PORT = Number(process.env.PORT) || 3000;

    app.listen(APP_PORT, () => {
        console.log(`KinesiTherapy Studio is running at http://localhost:${APP_PORT}/`);
    });

}

start();