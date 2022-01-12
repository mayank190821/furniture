import mongoose from "mongoose";
import express from "express";
import {signup} from '../controllers/controller.signup.js'
const exp =express();
mongoose.connect(process.env.mongoUrl)
mongoose.connection.on("connected",()=>{
    console.log("connected")
})

mongoose.connection.on("error",(e)=>{
    console.log(e);
})

exp.use(express.json())
exp.post('/user/signup',signup)
exp.listen(8080,()=>{
    console.log("listning...");
})