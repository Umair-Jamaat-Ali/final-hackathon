import mongoose from "mongoose";
import { Schema } from "mongoose";

const patientData = new Schema({
    name : {type: String, require: true},
    contact: {type: String, require: true},
    medicalHistory: {type: String, require: true},
    createdAt: { type: Date, default: Date.now },
})

export const patientModel = mongoose.models?.patients || mongoose.model("patients", patientData)