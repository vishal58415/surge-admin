import moment from "moment";
import { logger } from "../lib/logger";
import { customLog } from "../lib/customLogger";

export const getImportantInfo = async (
  req: any,
  res: any) => {
  let objResponse: any = {};
  objResponse['status'] = false;
  const records: any = {};
  try {
    records['erroLogsCount'] = 0;
    records['vmFundInfo'] = 100;
    objResponse['status'] = true;
  } catch (error: any) {
    logger.error("getImportantInfo : " + " | " + error.stack?.toString());
  }
  objResponse['records'] = records;
  res.json(objResponse);
};


export const updatePlayerStatus = async (
  req: any,
  res: any,
  next: any
) => {
  let objResponse: any = {};
  objResponse['status'] = false;
  objResponse['message'] = "Bad Request!";

  try {
    let reqBody = req.body;
    customLog("reqBody: " + " | " + JSON.stringify(reqBody));
    const pId = reqBody.insId;
    const pStatus = reqBody.insStatus;

    objResponse['status'] = true;
    objResponse['message'] = "Player status updated";
  } catch (error: any) {
    logger.error("updatePlayerStatus : " + " | " + error.stack?.toString());
  }
  res.json(objResponse);
};