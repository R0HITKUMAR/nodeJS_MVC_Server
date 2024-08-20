import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

export const authUserTokens = new Schema({
    _id: mongoose.ObjectId,
    tokenProvider: { type: String, required: true },
    tokenName: { type: String, required: true },
    tokenValue: { type: String, required: true },
    userId: { type: String, required: true },
    isActive: { type: Boolean, default: true }
}, {
    collection: "authUserTokens",
    timestamps: true
})

export const authUserTokensModel = model("authUserTokens", authUserTokens);