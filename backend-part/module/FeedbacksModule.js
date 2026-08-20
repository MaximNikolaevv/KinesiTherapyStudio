import { Schema, model } from "mongoose";

const FeedbacksSchema = new Schema({
    imageUrl: {
        type: String,
        required: true
    },
    massageType: {
        type: String,
        required: true,
        enum: [
            "Класически масаж",
            "Дълбокотъканен масаж",
            "Лечебен масаж",
            "Масаж на корем (ABS SCULPTING)",
            "Антицелулитен масаж"
        ]
    },

});

const Feedback = model("Feedbacks", FeedbacksSchema, "CurrentFeedback");

export default Feedback;

