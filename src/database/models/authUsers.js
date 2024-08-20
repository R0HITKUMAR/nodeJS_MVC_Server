import mongoose from "mongoose";

const { Schema, model } = mongoose;

export const authUsersSchema = new Schema({
    _id: mongoose.ObjectId,
    name: { type: String },
    phoneNumber: { type: String },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    emailConfirmed: { type: Boolean, default: false },
    phoneNumberConfirmed: { type: Boolean, default: false },
    passwordHashUpdatedOn: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
    twoFactorEnabled: { type: Boolean, default: false },
    securityStamp: { type: String },
    concurrencyStamp: { type: String },
    accessFailedCount: { type: Number, default: 0 },
    lockoutEnabled: { type: Boolean, default: false },
    lockoutEnd: { type: Date },
}, {
    collection: "authUsers",
    timestamps: true
});

// Adding an index to the email field
authUsersSchema.index({ email: 1 });

export const authUsersModel = model("authUsers", authUsersSchema);
