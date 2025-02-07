import Environment from "../config/global";
import { Request, Response, NextFunction } from "express";
const baseUrl = Environment.baseUrl;

export class SideBarController {

    public user_sidebar_menu = (async (req: any, res: Response, next: NextFunction) => {
        console.log("user_sidebar_menu");

        try {
            //check user exists or not using userName.
            let user_role_id = req.session.user_role_id;

            let response_result = {
                sidemenu_items_list: []
            }

            //    console.log("response_result" + JSON.stringify(response_result));
            if (response_result != null && typeof (response_result) != "undefined") {
                res.locals.menu_items = response_result.sidemenu_items_list;
                res.locals.username = req.session.username;
                res.locals.user_role_name = req.session.user_role_name;
                res.locals.last_login_time = req.session.last_login_time;

                let data: any = req.query;
                let response_message = "";
                if (data.hasOwnProperty("msz") && data.msz != "") {
                    response_message = data.msz;
                }
                res.locals.response_message = response_message;
            }
            return next();
        } catch (err) {
            res.redirect(
                baseUrl + "?msz=Login Failed , Please try again later."
            );
        }
    });

}
