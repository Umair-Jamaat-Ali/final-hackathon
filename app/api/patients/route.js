// const { dbConnection } = require("@/config/db");
import dbConnection from "@/config/db";
const { patientModel } = require("@/model/patientsData");
const { NextResponse } = require("next/server");

dbConnection();

export const GET = () => {
  return NextResponse.json({message:"get function called"})
}

export const POST = async (req) => {
  try {
    const body = await req.json();
    console.log("body", body);

    if (body.name && body.contact && body.medicalHistory) {
      // Database logic
      const patient = new patientModel(body);
      await patient.save();
      return NextResponse.json({ message: "Successful upload" });
    }
 return NextResponse.json({ message: "All params are required" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Something went wrong", error });
  }
};


export const DELETE = async (req) => {
  try {
    const body = await req.json();
    if(body.id){
      await patientModel.deleteOne({
        _id:body.id
      })
      return NextResponse.json({ message: "Successful deleted" });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Something went wrong", error });
  }
}


