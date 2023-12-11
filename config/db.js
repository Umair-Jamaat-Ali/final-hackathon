import mongoose from "mongoose";

const connection = {


}

export default async function dbConnection() {
  if (connection.isConnected) {
    return
  }
  const db = await mongoose.connect(process.env.DATABASE_CONNECTION)

  connection.isConnected = db.connections[0].readyState;
}
