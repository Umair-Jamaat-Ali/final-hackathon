import dbConnection from "@/config/db"
import { studentModel } from "@/model/student"
import { NextResponse } from "next/server";


dbConnection

export const GET = async (req, route) => {
    try {
        const data = await studentModel.find();
        return NextResponse.json({message: "success", student:data})
    } catch (error) {
        return NextResponse.json({message: "error", error})
    }
};
