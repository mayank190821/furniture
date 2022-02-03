import express from 'express';
import { signup } from '../controllers/controller.signup.js';
import {login} from '../controllers/controller.login.js';
import {adminLogin} from "../controllers/controller.admin.login.js";
import { adminSignup } from '../controllers/controller.admin.signup.js';
const routes = express();

//*************SignUp API************/

routes.route("/user/signup").post(signup);//req.body = FName, LName, Add, phone number, hashed Password, salt.
routes.route("/user/login").post(login);// req.body = {email,hashedPassword}
routes.route("/admin/login").post(adminLogin); // req,body =  {email,hashed password, salt}
routes.route("/admin/signup").post(adminSignup); // req,body =  {email,hashed password, salt}
export default routes;