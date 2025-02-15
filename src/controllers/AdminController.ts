import Environment from "../configs/global";
import { Request, Response, NextFunction, response } from "express";
const baseUrl = Environment.baseUrl;
import * as url from "url";
const url_path_identifier = ".";
import config from "../configs/global";
import moment from "moment";
import { customLog } from "../lib/customLogger";
import { logger } from "../lib/logger";
import * as routesConstants from "../constants/routesConstants";

console.log(" baseUrlenv " + process.env.NODE_ENV);

export const deals_dashboard = ((req: any, res: Response) => {
  const objResponse: any = {};
  try {
    objResponse['title'] = "New Created Deals";
    const deals = [
      {
        "deal_name": "Deal 1",
        "stage": "Conversation",
        "deal_value": "$04,51,000",
        "probability": "85%",
        "status": "Lost"
      },
      {
        "deal_name": "Deal 2",
        "stage": "Pipeline",
        "deal_value": "$14,51,000",
        "probability": "56%",
        "status": "Won"
      },
      {
        "deal_name": "Deal 3",
        "stage": "Won",
        "deal_value": "$12,51,000",
        "probability": "15%",
        "status": "Won"
      },
      {
        "deal_name": "Deal 4",
        "stage": "Lost",
        "deal_value": "$51,000",
        "probability": "45%",
        "status": "Lost"
      },
      {
        "deal_name": "Wisozk",
        "stage": "Follow Up",
        "deal_value": "$67,000",
        "probability": "5%",
        "status": "Won"
      }
    ];

    objResponse['newDeals'] = deals;

  } catch (err) {
    console.log("err" + JSON.stringify(err));
  }
  res.render(routesConstants.index, {
    title: "Dashboard - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "dashboard/deals-dashboard",
    data: objResponse
  });
});

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