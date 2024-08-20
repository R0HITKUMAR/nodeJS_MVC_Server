import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

export const appConfig = new Schema({
    _id: mongoose.ObjectId,
    type: { type: String, required: true },
    key: { type: String, required: true },
    value: { type: String, required: true },
    isActive: { type: Boolean, default: true },
}, { 
    collection: "appConfig", 
    timestamps: true 
})

export const appConfigModel = model("appConfig", appConfig);