import { Router } from 'express';
import Feedback from "../module/FeedbacksModule.js";


const Controllers = Router();

// GET /api/testimonials?type=Класически масаж
Controllers.get("/testimonials", async (req, res) => {
    console.log("API endpoint hit!");
    try {
        const { type } = req.query;

        console.log(type);

        const filter = type ? { massageType: type } : {};
        const feedbacks = await Feedback.find(filter);

        console.log(feedbacks);

        res.json(feedbacks);

    } catch (error) {
        console.error(error);
    }
});

export default Controllers;

