import mongoose from 'mongoose'

const adminModel = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    address:String,
    salt:String,
    hashpassword:String,
    alternatePhone:Number,
})
export default mongoose.model("adminModel",adminModel);