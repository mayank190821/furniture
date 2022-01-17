import express from 'express';
import { signup } from '../controllers/controller.signup';

const routes = express();

//*************SignUp API************/

routes.route("/user/signup").post(signup);//req.body = FName, LName, Add, phone number, hashed Password, salt.

