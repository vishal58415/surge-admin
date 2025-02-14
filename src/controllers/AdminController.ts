import Environment from "../configs/global";
import { Request, Response, NextFunction, response } from "express";
const baseUrl = Environment.baseUrl;
import * as url from "url";
const url_path_identifier = ".";
import config from "../configs/global";
import moment from "moment";
import { customLog } from "../lib/customLogger";
import { logger } from "../lib/logger";

console.log(" baseUrlenv " + process.env.NODE_ENV);

export const createNewNote = async (
  req: any,
  res: any,
  next: any
) => {
  let response_msg = "emsg=Something went wrong in createNewNote";

  try {
    let reqBody = req.body;
    customLog("reqBody: " + " | " + JSON.stringify(reqBody));

    const nObj: any = {};
    nObj['title'] = reqBody.note_title;
    nObj['description'] = reqBody.note_description;
    nObj['link'] = (reqBody.note_link) ? (decodeURI(reqBody.note_link)) : "#";
    customLog("nObj: " + " | " + JSON.stringify(nObj));

  } catch (error: any) {
    logger.error("createNewNote : " + " | " + error.stack?.toString());
  }
  let red_url = "/manage-notes?" + response_msg;
  res.redirect(red_url);
};

export const deleteRedisKey = async (
  req: any,
  res: any,
  next: any
) => {
  let response_msg = "emsg=Something went wrong in deleteRedisKey";
  try {
    let reqData = req.params;
    customLog("reqData: " + " | " + JSON.stringify(reqData));
    const redis_key = reqData.rkId;
    const objResponse = true;
    if (objResponse) {
      response_msg = "msg=Redis Key Removed";
    } else {
      response_msg = "msg=Redis Key not Removed";
    }
  } catch (error: any) {
    logger.error("deleteRedisKey : " + " | " + error.stack?.toString());
  }
  let red_url = "/manage-redis-keys?" + response_msg;
  res.redirect(red_url);
};