import { Router } from "express";
import * as authController from "../controllers/AuthController";
import * as apiController from "../controllers/ApiController";
import * as validationMiddleware from "../middlewares/validation.middleware";
import * as validatorMiddleware from "../middlewares/validator.middleware";

const routes = Router();

routes.get("/", function (req: any, res: any, next: any) {
    res.send("something went wrong!");
});

// api routes

routes.get("/get-important-live-info", authController.isAuthenticateApiReq, apiController.getImportantInfo);

routes.post("/update-player-status", authController.isAuthenticateApiReq, validationMiddleware.UpdatePsValidation(), validatorMiddleware.validateApiData, apiController.updatePlayerStatus);

export default routes;