import express, { Router } from "express";
import * as userController from "../controllers/user.controller";

const userRouter: Router = express.Router()

userRouter.get("/userData", userController.userData)
userRouter.post("/postUserData", userController.createUser)


export default userRouter;  