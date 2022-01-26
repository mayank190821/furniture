import express from 'express';
import { signup } from '../controllers/controller.signup.js';
import {login} from '../controllers/controller.login.js';
const routes = express();

//*************SignUp API************/

routes.route("/user/signup").post(signup);//req.body = FName, LName, Add, phone number, hashed Password, salt.
routes.route("/user/login").post(login);// req.body = {email,hashedPassword}

export default routes;