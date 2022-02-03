import adminModel from "../models/admin.model.js"
const adminSignup = async(req,res)=>{
    const user = new adminModel(req.body);
    try{
        await user.save();
        return res.status(200).json({
            message:"admin added"
        })
    }catch(err){
        console.log(err);
    }
}
export {adminSignup};