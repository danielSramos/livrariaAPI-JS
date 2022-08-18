import mongoose from "mongoose";

mongoose.connect("mongodb+srv://dk_zero:blackAllien-22@cluster0.zvcbjss.mongodb.net/node-express");

let db = mongoose.connection;

export default db;