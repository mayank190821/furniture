import adminModel from "../models/admin.model.js";

const adminLogin = async(req,res)=>{
    try{
        let field = "email";
        if (!req.body.userInput.includes("@"))
        field = "phoneNumber"
        console.log(field);
        let user = await adminModel.findOne({[field]:req.body.userInput});
        console.log(user)
        if(!user) return res.status(405).json({error:"user not found"});
        if(!user.authenticate(req.body.password)) return res.status(401).json({error:"Email and password not match"});
        return res.status(200).json({
            message:"login"
        })
    }
    catch(err){
        res.status(404).json({
            error:err
        });
    }
}
export {adminLogin};