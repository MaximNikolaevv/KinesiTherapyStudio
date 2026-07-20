import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use("/img", express.static(path.join(projectRoot, "img")));
app.use("/model", express.static(path.join(projectRoot, "model")));
app.use("/node_modules", express.static(path.join(projectRoot, "node_modules")));
app.use(express.static(path.join(projectRoot, "frontend-part")));

app.get("/{*path}", (_req, res) => {
    res.sendFile(path.join(projectRoot, "frontend-part", "home.html"));
});

app.listen(PORT, () => {
    console.log(`KinesiTherapy Studio is running at http://localhost:${PORT}/`);
});
