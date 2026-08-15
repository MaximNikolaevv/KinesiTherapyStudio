import { Router } from "express";
import Controllers from "../Controllers/controllers.js";


const router = Router();

router.use("/api", Controllers);

export default router;