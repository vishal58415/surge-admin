import { validationResult } from "express-validator";
import { customLog } from "../lib/customLogger";

export const validateAuthData = (req: any, res: any, next: any) => {
  let extractedErrors: any = "validateAuthData error";
  try {
    customLog("validateAuthData result ");
    const errors = validationResult(req);
    customLog("validateAuthData result: 11 ");

    if (errors.isEmpty()) {
      return next();
    }
    extractedErrors = errors.array()[0]["msg"];
    customLog("validateAuthData 0 " + extractedErrors);
  } catch (error: any) {
    customLog("Error:validateAuthData:" + error.stack.toString());
  }
  let url = "/?emsg=" + extractedErrors;
  res.redirect(url);
};

export const validateData = (req: any, res: any, next: any) => {
  let extractedErrors: any = "validateData error";
  try {
    customLog("validateData result ");
    const errors = validationResult(req);
    customLog("validateData result: 11 ");

    if (errors.isEmpty()) {
      return next();
    }
    extractedErrors = errors.array()[0]["msg"];
    customLog("validateData 0 " + extractedErrors);
  } catch (error: any) {
    customLog("Error:validateData:" + error.stack.toString());
  }
  let url = "/index?emsg=" + extractedErrors;
  res.redirect(url);
};

export const validateApiData = (req: any, res: any, next: any) => {
  let objResponse: any = {};
  objResponse['status'] = false;

  let extractedErrors: any = "validateData error";
  try {
    customLog("validateData result ");
    const errors = validationResult(req);
    customLog("validateData result: 11 ");

    if (errors.isEmpty()) {
      return next();
    }
    extractedErrors = errors.array()[0]["msg"];
    customLog("validateData 0 " + extractedErrors);
    objResponse['message'] = extractedErrors;

  } catch (error: any) {
    customLog("Error:validateData:" + error.stack.toString());
  }
  res.json(objResponse);
};