import express from "express";
import session from "express-session"; // taking express session
import * as bodyParser from "body-parser";
import Environment from "./config/global";
import path from "path";
import { Routes } from "./routes/index"; // import route & attach to main config
import expressLayouts from 'express-ejs-layouts';

// Defining all configuration here

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(expressLayouts);
    this.app.set('layout', 'layouts/layout');
    this.app.use(bodyParser.json());
    this.app.set("views", path.join("views"));
    this.app.set("view engine", "ejs"); // set view engine path
    this.app.set('trust proxy',true); 
    this.app.use(express.static(path.join("public"))); 
    this.app.use(
      session({
        // session configuration
        secret: "sp-admin",
        resave: true,
        saveUninitialized: true,
      })
    );
    this.app.locals.config = Environment; // making Environment Class constant to global available for ejs & node js
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}
export default new App().app;
