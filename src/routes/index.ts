import { Request, Response } from "express";
import { AdminController } from "../controllers/AdminController"; // attaching controller class function with route
import { AuthController } from "../controllers/AuthController";
import { SideBarController } from "../controllers/SideBarController";

export class Routes {
  // making instance of controller class
  public authController: AuthController = new AuthController();
  public adminController: AdminController = new AdminController(); // making instance of controller class 
  public sideBarController: SideBarController = new SideBarController();

  public routes(app): void {

    app
      .route("/") // Handling route for login
      .get(this.authController.login)
      .post(this.authController.user_login);

    app.
      route("/logout")
      .get(this.authController.logout);

    app.
      route("/test-route")
      .get(
        this.authController.test_route
      );

    app.
      route("/no-rights")
      .get(
        this.sideBarController.user_sidebar_menu,
        this.authController.no_access_right
      );

    app
      .route("/player")
      .get(this.authController.isAuthenticated,
        this.sideBarController.user_sidebar_menu,
        this.adminController.player_search
      );

  }
}
