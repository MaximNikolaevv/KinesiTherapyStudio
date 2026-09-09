import { Router } from 'express';
import Feedback from "../module/FeedbacksModule.js";
import Services from "../module/ServicesModule.js";


const Controllers = Router();

// GET /api/testimonials?type=Класически масаж
Controllers.get("/testimonials", async (req, res) => {
    console.log("API endpoint hit!");
    try {
        const { type } = req.query; // req.query.type sushto stava

        const filter = type ? { massageType: type } : {};
        const feedbacks = await Feedback.find(filter);

        res.json(feedbacks);

    } catch (error) {
        console.error(error);
    }
});


Controllers.get("/services", async (req, res) => {
    try {
        const services = await Services.find({});

        res.json(services);

    } catch (error) {
        console.error(error);
    }

});

export default Controllers;

