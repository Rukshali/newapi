import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/userRoute.js";

const app=express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL).then(()=>{
    console.log("DB connected successfully");
    app.listen(PORT,()=>{
        console.log(`server is running at ${PORT} `);
    })
}).catch(error=>console.log(error));

app.use("/api/user",route);