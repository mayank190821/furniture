import userModel from "../models/user.model.js"
const signup = async(req,res)=>{
    const user = new userModel(req.body);
    try{
        await user.save();
        return res.status(200).json({
            message:"User added"
        })
    }catch(err){
        console.log(err)
    }
}
export {signup};