import mongoose from 'mongoose'

const products  = new mongoose.Schema({
    categories:String,
    name:String,
    specs:{
        type:String,
        brand:String,
        price:Number,
        qty:Number,
        size:{
            type:Number,
            length:Number,
            width:Number,
            height:Number,
            unit:String
        },
        material:String,
        weight:Number,
        weightUnit:String
    },
})

export default mongoose.model("products",products);