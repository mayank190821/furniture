import mongoose from "mongoose.js";
// import express from "express";
import adminModel from '../models/admin.model.js'

mongoose.connect(process.env.mongoUrl)
mongoose.connection.on("connected",()=>{
console.log("connected")
})

mongoose.connection.on("error",(e)=>{
    console.log(e);
})

const user = new adminModel({
    name:"Mayank",
    email:"mayank@gmail.com",
    phone:"9313415766",
    address:"661/21 jc",
})
user.save()