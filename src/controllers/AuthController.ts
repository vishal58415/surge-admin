import Environment from "../configs/global";
import { Request, Response } from "express";
import * as routesConstants from "../constants/routesConstants";
import { logger } from "../lib/logger";
const baseUrl = Environment.baseUrl;

export const login = ((req: any, res: Response) => {
  try {
    if (req.session.username) {
      return res.redirect(baseUrl + "index");
    }

    res.render(routesConstants.index_without_nav_layout, {
      title: "Login",
      layout: routesConstants.index_without_nav_layout,
      page_path: "login",
    });
  } catch (err) {
    console.log("err" + JSON.stringify(err));
    res.render(routesConstants.index_without_nav_layout, {
      title: "Login",
      layout: routesConstants.index_without_nav_layout,
      page_path: "login",
    });
  }
});

export const loginUser = (async (req: any, res: any) => {
  try {
    var new_req = req.body;
    let username = new_req.username.toString();
    let password = new_req.password.toString();

    //check user exists or not using userName.
    let response_result = {
      status: true,
      _id: "67911d6ae6b544444c23438f",
      user_role_name: "admin",
      last_login_time: "67911d6ae6b544444c23438f",
      role_id: "23",
    }

    // console.log("response_result" + JSON.stringify(response_result));
    // console.log("username" + JSON.stringify(username));
    // console.log("password" + JSON.stringify(password));

    if (response_result != null && typeof (response_result) != "undefined") {

      let user_id = response_result._id.toString();
      let ip_address = req.ip;
      console.log("ip_address" + ip_address);

      res.locals.username = new_req.username;
      req.session.username = new_req.username;
      req.session.user_role_name = response_result.user_role_name;
      req.session.last_login_time = response_result.last_login_time;
      req.session.user_role_id = response_result.role_id;
      req.session.user_id = user_id;
      req.session.save(null);
      res.redirect(baseUrl + "index?msz=Welcome to Stick Pool");
    }
    else {
      console.log("record not found!");
      res.redirect(
        baseUrl + "?msz=Login Failed , Please try again later."
      );
    }
  } catch (err) {
    res.redirect(
      baseUrl + "?msz=Login Failed , Please try again later."
    );
  }
});

export const isNonAuthenticated = (async (req: any, res: any, next: any) => {
  console.log("base " + baseUrl);
  // return next(); // making this bypass , for development
  try {
    let url_replace_options = req.url.replace("?", "").replace("/", "");
    let routes: any = {};
    for (var key in routesConstants.public_routes) {
      routes[key] = routesConstants.public_routes[key].replace("/", "");
    }
    res.locals.routes = routes;
    res.locals.active_path = url_replace_options;
    return next();
  } catch (e) {
    console.log(e);
    res.redirect(baseUrl);
  }
});

export const isAuthenticateUser = (async (req: any, res: any, next: any) => {
  console.log("base " + baseUrl);
  // return next(); // making this bypass , for development
  try {
    if (req.session.username) {
      let user_role_id = req.session.user_role_id;
      if (user_role_id == "VR68hp5g") { // direct bypass for a specific user role id
        req.session.permission = "2";
        return next();
      } else {
        let requestSegments = req.path.split('/');

        let page_url = requestSegments[1];
        console.log("page_url" + JSON.stringify(page_url));

        //   page_url = "index";

        let response_result = { status: true, permission: [] }
        // console.log("response_result" + JSON.stringify(response_result));
        if (response_result != null && typeof (response_result) != "undefined" && response_result.status == true) {
          req.session.permission = response_result.permission;

          let url_replace_options = req.url.replace("?", "").replace("/", "");
          let routes: any = {};
          for (var key in routesConstants.public_routes) {
            routes[key] = routesConstants.public_routes[key].replace("/", "");
          }
          res.locals.routes = routes;
          res.locals.active_path = url_replace_options;
          return next();
        } else {
          res.redirect("/no-rights");
        }
      }
    } else {
      res.redirect(baseUrl);
    }
  } catch (e) {
    console.log(e);
    res.redirect(baseUrl);
  }
});


export const isAuthenticateApiReq = async (
  req: any,
  res: any,
  next: any
) => {
  let objResponse: any = {};
  objResponse['status'] = false;
  objResponse['type'] = "invalid";
  objResponse['message'] = "Bad Request";

  try {
    const auth_token = req.headers['authorization'];
    if (auth_token) {
      const tokenResponse = await validateUserAuthToken(auth_token);
      if (tokenResponse.length !== 0) {
        next();
      } else {
        res.json(objResponse);
      }
    } else {
      res.json(objResponse);
    }
  } catch (error: any) {
    logger.error("isAuthenticateApiReq : " + " | " + error.stack?.toString());

    res.json(objResponse);
  }
};

export const logout = ((req: any, res: any, next: any) => {
  try {
    req.session.destroy(null);
    console.log("session.destroy");
  } catch (e) {
    console.log(e);
  } finally {
    res.redirect(baseUrl);
  }
});

export const no_access_right = (async (req: any, res: any, next: any) => {
  if (req.session.username) {
    return res.render("no_access_right", {
      title: "No Access Right"
    });
  } else {
    res.redirect("./");
  }
});

export const test_route = (async (req: Request, res: Response, next: any) => {
  return res.render("test_page", {
    layout: "test_page",
    title: "test_page"
  });
});

function validateUserAuthToken(auth_token: any) {
  const objResponse: any = {};
  objResponse['status'] = true;
  return objResponse;
}
