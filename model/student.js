import mongoose from "mongoose";

import { Schema } from "mongoose";

const studentData = new Schema({
    name: {type: String, require: true}, 
    fatherName : {type: String, require: true},
    email : {type: String, require: true},
    phone: String
})

export const studentModel = mongoose.models?.profiles || mongoose.model("profiles", studentData)


