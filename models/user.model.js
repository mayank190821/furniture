import mongoose from 'mongoose'
const userModel = new mongoose.Schema({
    name:String,
    email:{
        type:String
    },
    phone:Number,
    address:String,
    salt:String,
    hashedPassword:String
})

export default mongoose.model("userModel",userModel);