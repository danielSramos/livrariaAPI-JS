import mongoose from "mongoose";

mongoose.connect("mongodb+srv://<USUARIODABASE>:<SENHADABASE>@cluster0.zvcbjss.mongodb.net/node-express");
    
let db = mongoose.connection;

export default db;