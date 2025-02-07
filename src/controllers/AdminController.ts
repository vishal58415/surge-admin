import Environment from "../config/global";
import { Request, Response, NextFunction, response } from "express";
const baseUrl = Environment.baseUrl;
import * as url from "url";
const url_path_identifier = ".";
import config from "../config/global";
import moment from "moment";

console.log(" baseUrlenv " + process.env.NODE_ENV);

export class AdminController {

  public player_search = async (req: Request, res: Response) => {
    let response_result = {};

    let url_parts = url.parse(req.url, true);

    let reset_url = url_path_identifier + url_parts.pathname;

    let query_data: any = url_parts.query;
    //console.log("query" + JSON.stringify(query_data));

    if (Object.keys(query_data).length != 0) {
      //console.log("query" + JSON.stringify(query_data));
      let player_response_result = {
        status: true,
        result: []
      }

      if (player_response_result.status) {
        response_result = player_response_result.result;
      }
    }

    //console.log("response_result" + JSON.stringify(response_result));

    return res.render("player", {
      title: "Manage Player",
      model_title: "Player Details",
      response_result: response_result,
      filter_query: query_data,
      reset_url: reset_url,
    });
  };

}
