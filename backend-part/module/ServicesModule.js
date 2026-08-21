import { Schema, model } from "mongoose";

const serviceSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        info: {
            type: String,
            required: true,
            maxlength: 500
        },
        price: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false,
        }

    }

);


const Service = model("Service", serviceSchema, "CurrentService");

export default Service;