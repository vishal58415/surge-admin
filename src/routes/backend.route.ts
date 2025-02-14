import { Router } from "express";
import * as validationMiddleware from "../middlewares/validation.middleware";
import { validateAuthData, validateData } from "../middlewares/validator.middleware";
import * as authController from "../controllers/AuthController";
import * as appController from "../controllers/ApiController";
import * as adminController from "../controllers/AdminController";

const routes = Router();

routes.get("/", function (req: any, res: any, next: any) {
    res.send("something went wrong!");
});

routes.post("/login", validationMiddleware.UserValidation(), validateAuthData, authController.loginUser);
routes.post("/submit-notes", authController.isAuthenticateUser, validationMiddleware.createNoteValidation(), validateData, adminController.createNewNote);

routes.get("/delete-redis-key/:rkId", authController.isAuthenticateUser, adminController.deleteRedisKey);

export default routes;