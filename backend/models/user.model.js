import mongoose from 'mongoose';
import crypto from "crypto";

const userModel = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: "Email already exist"
    },
    phoneNumber: {
        type: Number,
        unique: "Phone number already exist"
    },
    address: String,
    salt: String,
    hashedPassword: String
})

userModel.virtual("password").set(function(input) {
    this._password = input;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(input);
}).get(function() {
    return this._password;
});

userModel.methods = {
    makeSalt: function() {
        const size = this.email.length;
        const string= this.email;
        let ASCIIEmail="";
        for(let i=0;i<size;i+=2){
            ASCIIEmail+=string.charCodeAt(i);
        }
        return Math.round(new Date().valueOf()+ASCIIEmail)+"";

    },
    encryptPassword: function(password) {
        if(!password) return "";
        try{
            return crypto.createHmac("sha1",this.salt).update(password).digest("hex");
        }
        catch(err){
            return "";
        }
    },
    authenticate: function(password){
        return this.encryptPassword(password) === this.hashedPassword;
    }
}

export default mongoose.model("userModel", userModel);