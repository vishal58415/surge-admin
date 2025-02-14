require("dotenv").config();
import { APPLICATION_VERSION, APP_BASE_URL, IS_LIVE_ENVIRONMENT } from "./constants/commonConstants";

import express from "express"
import http from "http";
import { startServices } from "./app";
import session from "express-session";

var expressLayouts = require('express-ejs-layouts');

import indexRoutes from "./routes/index.route";
import apiRoutes from "./routes/api.route";
import backendRoutes from "./routes/backend.route";
import { logger } from "./lib/logger";
import { customLog } from "./lib/customLogger";
import deflautConfigs from "./configs/global";

const app = express();

/** Parse the request */
app.use(express.urlencoded({ extended: true }));
/** Takes care of JSON data */
app.use(express.json());

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('views', 'views/Layouts');
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(function (req: any, res: any, next: any) {
  // customLog("baseUrl : " + APP_BASE_URL);
  app.locals.base_url = APP_BASE_URL;
  app.locals.app_version = APPLICATION_VERSION;
  app.locals.error_log_count = 0;
  app.locals.user_api_token = (req.session["userAuthToken"]) ? (req.session["userAuthToken"]) : "";
  app.locals.config = deflautConfigs; // making Environment Class constant to global available for ejs & node js

  next();
});

app.use("/", indexRoutes);
app.use("/api", apiRoutes);
app.use("/bk", backendRoutes);

app.get('*', function (req, res) {
  res.status(404).send('something went wrong!');
});

const port = process.env.PORT || 1006;

//initialize a simple http server
const server = http.createServer(app);

process.on("uncaughtException", function (error: any) {
  logger.error("uncaughtException : " + " | " + error.stack?.toString());
});

process.on("unhandledRejection", function (error: any) {
  logger.error("unhandledRejection : ", error);
});

server.listen(port, async function () {
  startServices(server);
  customLog(`Server Running: http://localhost:${port}/`, true);
}); 