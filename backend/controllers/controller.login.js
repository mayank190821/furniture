import userModel from "../models/user.model.js";

const login = async(req,res)=>{
    try{
        console.log("yha hu");
        let field = "email";
        if (!req.body.userInput.includes("@"))
            field = "phoneNumber"
        let user = await userModel.findOne({[field]:req.body.userInput});
        if(!user) return res.status(401).json({error:"user not found"});
        if(!user.authenticate(req.body.password)) return res.status(401).json({error:"Email and password not match"});
        return res.status(200).json({
            message:"login"
        })
    }
    catch(err){
        res.status(401).json({
            error:err
        });
    }
}
export {login};