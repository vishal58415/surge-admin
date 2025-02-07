import { Request, Response } from "express";
import { AdminController } from "../controllers/AdminController"; // attaching controller class function with route
import { AuthController } from "../controllers/AuthController";
import { SideBarController } from "../controllers/SideBarController";
import * as routesConstants from "../constants/routesConstants";

export class Routes {
  // making instance of controller class
  public authController: AuthController = new AuthController();
  public adminController: AdminController = new AdminController(); // making instance of controller class 
  public sideBarController: SideBarController = new SideBarController();

  public routes(app): void {

    app
      .route("/") // Handling route for login
      .get(this.authController.isNonAuthenticated, this.authController.login)
      .post(this.authController.user_login);

    app.
      route("/logout")
      .get(this.authController.logout);

    app.
      route("/test-route")
      .get(
        this.authController.isAuthenticated,
        this.authController.test_route
      );

    app.
      route("/no-rights")
      .get(
        this.authController.isNonAuthenticated,
        this.sideBarController.user_sidebar_menu,
        this.authController.no_access_right
      );

    app
      .route("/player")
      .get(this.authController.isAuthenticated,
        this.sideBarController.user_sidebar_menu,
        this.adminController.player_search
      );

    app.get(routesConstants.public_routes.coming_soon, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index_without_nav_layout, {
        title: "coming soon",
        layout: routesConstants.index_without_nav_layout,
        page_path: "coming-soon",
      });
    });


    // app.get(routesConstants.public_routes.coming_soon, this.authController.isNonAuthenticated, (req, res, next) => {
    //   res.render("../views/Auth/coming-soon");
    // });

    app.get(routesConstants.public_routes.register, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index_without_nav_layout, {
        title: "Register",
        layout: routesConstants.index_without_nav_layout,
        page_path: "register",
      });
    });


    app.get(routesConstants.public_routes.forgot_password, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index_without_nav_layout, {
        title: "Forgot password",
        layout: routesConstants.index_without_nav_layout,
        page_path: "forgot-password",
      });
    });


    app.get(routesConstants.public_routes.reset_password, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index_without_nav_layout, {
        title: "Reset password",
        layout: routesConstants.index_without_nav_layout,
        page_path: "reset-password",
      });
    });

    app.get(routesConstants.public_routes.email_verification, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index_without_nav_layout, {
        title: "Email Verification",
        layout: routesConstants.index_without_nav_layout,
        page_path: "email-verification",
      });
    });

    app.get(routesConstants.public_routes.lock_screen, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index_without_nav_layout, {
        title: "Lock Screen",
        layout: routesConstants.index_without_nav_layout,
        page_path: "lock-screen",
      });
    });

    app.get(routesConstants.public_routes.two_step_verification, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index_without_nav_layout, {
        title: "Two Step Verification",
        layout: routesConstants.index_without_nav_layout,
        page_path: "two-step-verification",
      });
    });


    // --------------- ( Main ) ----------------------

    app.get(routesConstants.public_routes.deals_dashboard, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Dashboard - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "dashboard/deals-dashboard",
      });
    });


    app.get(routesConstants.public_routes.projects_dashboard, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Projects Dashboard - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "dashboard/projects-dashboard",
      });
    });


    app.get(routesConstants.public_routes.leads_dashboard, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Leads dashboard - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "dashboard/leads-dashboard",
      });
    });


    app.get(routesConstants.public_routes.tasks, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Tasks - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "tasks/tasks",
      });
    });


    app.get(routesConstants.public_routes.tasks_completed, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Tasks - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "tasks/tasks-completed",
      });
    });


    app.get(routesConstants.public_routes.tasks_important, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Tasks - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "tasks/tasks-important",
      });
    });


    app.get(routesConstants.public_routes.proposals, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Proposals - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "proposals/proposals",
      });
    });


    app.get(routesConstants.public_routes.proposals_grid, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Proposals - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "proposals/proposals-grid",
      });
    });


    app.get(routesConstants.public_routes.contracts, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Contracts - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "contracts/contracts",
      });
    });


    app.get(routesConstants.public_routes.contracts_grid, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Contracts - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "contracts/contracts-grid",
      });
    });


    app.get(routesConstants.public_routes.estimations, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Estimations - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "estimations/estimations",
      });
    });


    app.get(routesConstants.public_routes.estimations_kanban, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Estimations - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "estimations/estimations-kanban",
      });
    });


    app.get(routesConstants.public_routes.payments, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Payments - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "payments/payments",
      });
    });


    app.get(routesConstants.public_routes.contacts, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Contacts - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "contacts/contacts",
      });
    });

    app.get(routesConstants.public_routes.contact_grid, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Contacts - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "contacts/contact-grid",
      });
    });

    app.get(routesConstants.public_routes.contact_details, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Contacts - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "contacts/contact-details",
      });
    });


    app.get(routesConstants.public_routes.companies, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Companies - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "companies/companies",
      });
    });


    app.get(routesConstants.public_routes.companies_grid, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Companies - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "companies/companies-grid",
      });
    });


    app.get(routesConstants.public_routes.companies_details, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Companies - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "companies/company-details",
      });
    });


    app.get(routesConstants.public_routes.leads, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Leads - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "leads/leads",
      });
    });


    app.get(routesConstants.public_routes.leads_kanban_view, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Leads - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "leads/leads-kanban-view",
      });
    });


    app.get(routesConstants.public_routes.leads_details, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Leads - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "leads/leads-details",
      });
    });


    app.get(routesConstants.public_routes.deals, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Deals - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "deals/deals",
      });
    });


    app.get(routesConstants.public_routes.deals_kanban_view, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Deals - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "deals/deals-kanban-view",
      });
    });


    app.get(routesConstants.public_routes.deals_details, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Deals - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "deals/deals-details",
      });
    });


    app.get(routesConstants.public_routes.projects, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Projects - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "projects/projects",
      });
    });


    app.get(routesConstants.public_routes.projects_grid, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Projects - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "projects/project-grid",
      });
    });


    app.get(routesConstants.public_routes.projects_details, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Projects - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "projects/project-details",
      });
    });


    app.get(routesConstants.public_routes.lead_reports, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Reports - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "reports/lead-reports",
      });
    });

    app.get(routesConstants.public_routes.deal_reports, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Reports - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "reports/deal-reports",
      });
    });

    app.get(routesConstants.public_routes.contact_reports, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Reports - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "reports/contact-reports",
      });
    });

    app.get(routesConstants.public_routes.company_reports, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Reports - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "reports/company-reports",
      });
    });

    app.get(routesConstants.public_routes.project_reports, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Reports - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "reports/project-reports",
      });
    });

    app.get(routesConstants.public_routes.task_reports, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Reports - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "reports/task-reports",
      });
    });

    app.get(routesConstants.public_routes.industry, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Reports - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "crms-settings/industry",
      });
    });

    app.get(routesConstants.public_routes.contact_stage, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Reports - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "crms-settings/contact-stage",
      });
    });

    app.get(routesConstants.public_routes.lost_reason, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Reports - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "crms-settings/lost-reason",
      });
    });

    app.get(routesConstants.public_routes.sources, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Reports - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "crms-settings/sources",
      });
    });

    app.get(routesConstants.public_routes.calls, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Reports - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "crms-settings/calls",
      });
    });

    app.get(routesConstants.public_routes.manage_users, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Reports - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "user-management/manage-users",
      });
    });

    app.get(routesConstants.public_routes.roles_permissions, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Reports - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "user-management/roles-permissions",
      });
    });

    app.get(routesConstants.public_routes.delete_request, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Reports - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "user-management/delete-request",
      });
    });

    app.get(routesConstants.public_routes.permission, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Reports - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "user-management/permission",
      });
    });


    app.get(routesConstants.public_routes.activities, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Activities - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "activities/activities",
      });
    });


    app.get(routesConstants.public_routes.activity_calls, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Activities - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "activities/activity-calls",
      });
    });


    app.get(routesConstants.public_routes.activity_mail, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Activities - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "activities/activity-mail",
      });
    });


    app.get(routesConstants.public_routes.activity_meeting, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Activities - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "activities/activity-meeting",
      });
    });


    app.get(routesConstants.public_routes.activity_task, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Activities - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "activities/activity-task",
      });
    });


    app.get(routesConstants.public_routes.blog, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Blog - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "blog/blog",
      });
    });


    app.get(routesConstants.public_routes.blog_details, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Blog - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "blog/blog-details",
      });
    });


    app.get(routesConstants.public_routes.pending_blog, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Pending blog - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "blog/pending-blog",
      });
    });


    app.get(routesConstants.public_routes.add_blog, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Add blog - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "blog/add-blog",
      });
    });


    app.get(routesConstants.public_routes.edit_blog, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Edit blog - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "blog/edit-blog",
      });
    });


    app.get(routesConstants.public_routes.blog_Categories, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Blog Categories - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "blog/blog-Categories",
      });
    });


    app.get(routesConstants.public_routes.invoices, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Invoices - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "invoices/invoices",
      });
    });


    app.get(routesConstants.public_routes.invoice_grid, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Invoice grid - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "invoices/invoice-grid",
      });
    });


    // app.get(routesConstants.public_routes.email, this.authController.isNonAuthenticated, (req, res, next) => {
    //   res.render(routesConstants.index, {
    //     title: "Email - CRMS admin template",
    //     layout: routesConstants.index_layout,
    // page_path: "email/email",
    //   });
    // });

    app.get(routesConstants.public_routes.mail_view, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Email - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "email/mail-view",
      });
    });


    app.get(routesConstants.public_routes.settings, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Settings - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "settings/settings",
      });
    });




    app.get(routesConstants.public_routes.email_settings, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Settings - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "settings/system-settings/email-settings",
      });
    });





    // ---------------- ( Pages ) ---------------------


    app.get(routesConstants.public_routes.pageNotFount, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index_error_layout, {
        title: "Error 404",
        layout: routesConstants.index_error_layout,
        page_path: "error-404",
      });
    });

    app.get(routesConstants.public_routes.under_maintenance, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index_error_layout, {
        title: "Under Maintenance",
        layout: routesConstants.index_layout,
        page_path: "under-maintenance",
      });
    });

    app.get(routesConstants.public_routes.serverError, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index_error_layout, {
        title: "Error 500",
        layout: routesConstants.index_layout,
        page_path: "error-500",
      });
    });


    app.get(routesConstants.public_routes.faq, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Faq - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "page/faq",
      });
    });


    app.get(routesConstants.public_routes.terms, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Terms - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "page/terms",
      });
    });


    app.get(routesConstants.public_routes.privacy_policy, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Privacy policy - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "page/privacy-policy",
      });
    });


    app.get(routesConstants.public_routes.blank_page, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Blank page - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "page/blank-page",
      });
    });


    // --------------- () ----------------

    app.get(routesConstants.public_routes.components, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Components - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "components/components",
      });
    });


    app.get(routesConstants.public_routes.sweetalerts, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/sweetalerts",
      });
    });


    app.get(routesConstants.public_routes.tooltip, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/tooltip",
      });
    });


    app.get(routesConstants.public_routes.popover, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/popover",
      });
    });


    app.get(routesConstants.public_routes.ribbon, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/ribbon",
      });
    });


    app.get(routesConstants.public_routes.clipboard, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/clipboard",
      });
    });


    app.get(routesConstants.public_routes.drag_drop, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/drag-drop",
      });
    });


    app.get(routesConstants.public_routes.rangeslider, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/rangeslider",
      });
    });


    app.get(routesConstants.public_routes.rating, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/rating",
      });
    });


    app.get(routesConstants.public_routes.toastr, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/toastr",
      });
    });


    app.get(routesConstants.public_routes.text_editor, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/text-editor",
      });
    });


    app.get(routesConstants.public_routes.counter, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/counter",
      });
    });


    app.get(routesConstants.public_routes.scrollbar, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/scrollbar",
      });
    });


    app.get(routesConstants.public_routes.spinner, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/spinner",
      });
    });


    // app.get(routesConstants.public_routes.notification, this.authController.isNonAuthenticated, (req, res, next) => {
    //   res.render(routesConstants.index, {
    //     title: "Elements - CRMS admin template",
    //     layout: routesConstants.index_layout,
    // page_path: "elements/notification",
    //   });
    // });

    app.get(routesConstants.public_routes.lightbox, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/lightbox",
      });
    });


    app.get(routesConstants.public_routes.stickynote, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/stickynote",
      });
    });


    app.get(routesConstants.public_routes.timeline, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/timeline",
      });
    });


    app.get(routesConstants.public_routes.horizontal_timeline, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/horizontal-timeline",
      });
    });


    app.get(routesConstants.public_routes.form_wizard, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Elements - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "elements/form-wizard",
      });
    });


    // ---------------- ( charts ) --------------------------

    app.get(routesConstants.public_routes.chart_apex, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Charts - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "charts/chart-apex",
      });
    });


    app.get(routesConstants.public_routes.chart_js, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Charts - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "charts/chart-js",
      });
    });


    app.get(routesConstants.public_routes.chart_morris, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Charts - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "charts/chart-morris",
      });
    });


    app.get(routesConstants.public_routes.chart_flot, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Charts - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "charts/chart-flot",
      });
    });


    app.get(routesConstants.public_routes.chart_peity, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Charts - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "charts/chart-peity",
      });
    });


    app.get(routesConstants.public_routes.chart_c3, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Charts - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "charts/chart-c3",
      });
    });


    // -------------- ( Icons ) --------------

    app.get(routesConstants.public_routes.icon_fontawesome, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Icons - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "icons/icon-fontawesome",
      });
    });


    app.get(routesConstants.public_routes.icon_feather, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Icons - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "icons/icon-feather",
      });
    });


    app.get(routesConstants.public_routes.icon_ionic, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Icons - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "icons/icon-ionic",
      });
    });


    app.get(routesConstants.public_routes.icon_material, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Icons - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "icons/icon-material",
      });
    });


    app.get(routesConstants.public_routes.icon_pe7, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Icons - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "icons/icon-pe7",
      });
    });


    app.get(routesConstants.public_routes.icon_simpleline, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Icons - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "icons/icon-simpleline",
      });
    });


    app.get(routesConstants.public_routes.icon_themify, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Icons - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "icons/icon-themify",
      });
    });


    app.get(routesConstants.public_routes.icon_weather, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Icons - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "icons/icon-weather",
      });
    });


    app.get(routesConstants.public_routes.icon_typicon, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Icons - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "icons/icon-typicon",
      });
    });


    app.get(routesConstants.public_routes.icon_flag, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Icons - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "icons/icon-flag",
      });
    });


    // ------------- ( Forms ) ----------------

    app.get(routesConstants.public_routes.form_basic_inputs, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Forms - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "forms/form-basic-inputs",
      });
    });


    app.get(routesConstants.public_routes.form_input_groups, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Forms - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "forms/form-input-groups",
      });
    });


    app.get(routesConstants.public_routes.form_horizontal, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Forms - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "forms/form-horizontal",
      });
    });


    app.get(routesConstants.public_routes.form_vertical, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Forms - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "forms/form-vertical",
      });
    });


    app.get(routesConstants.public_routes.form_mask, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Forms - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "forms/form-mask",
      });
    });


    app.get(routesConstants.public_routes.form_validation, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Forms - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "forms/form-validation",
      });
    });


    app.get(routesConstants.public_routes.form_checkbox_radios, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Forms - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "forms/form-checkbox-radios",
      });
    });

    app.get(routesConstants.public_routes.form_grid_gutters, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Forms - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "forms/form-grid-gutters",
      });
    });

    app.get(routesConstants.public_routes.form_select, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Forms - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "forms/form-select",
      });
    });

    app.get(routesConstants.public_routes.form_fileUpload, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Forms - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "forms/form-fileupload",
      });
    });

    app.get(routesConstants.public_routes.form_floating_labels, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Forms - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "forms/form-floating-labels",
      });
    });

    app.get(routesConstants.public_routes.form_formSelected2, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Forms - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "forms/form-select2",
      });
    });


    // -------------- ( Tables ) ----------------------

    app.get(routesConstants.public_routes.tables_basic, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Tables - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "tables/tables-basic",
      });
    });


    app.get(routesConstants.public_routes.data_tables, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Tables - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "tables/data-tables",
      });
    });


    app.get(routesConstants.public_routes.profile, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        title: "Employee Profile - CRMS admin template",
        layout: routesConstants.index_layout,
        page_path: "profile/profile",
      });
    });



    app.get(routesConstants.public_routes.application_chat, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "application/chat",
        title: "Chat",
      });
    });

    app.get(routesConstants.public_routes.call_history, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "application/call-history",
        title: "Call",
      });
    });

    app.get(routesConstants.public_routes.audio_call, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "application/audio-call",
        title: "audio-call",
      });
    });

    app.get(routesConstants.public_routes.video_call, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "application/video-call",
        title: "video-call",
      });
    });

    app.get(routesConstants.public_routes.file_manager, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "application/file-manager",
        title: "File-manager",
      });
    });

    app.get(routesConstants.public_routes.file_shared, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "application/file-shared",
        title: "File-manager",
      });
    });

    app.get(routesConstants.public_routes.file_document, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "application/file-document",
        title: "File-manager",
      });
    });

    app.get(routesConstants.public_routes.file_recent, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "application/file-recent",
        title: "File-manager",
      });
    });

    app.get(routesConstants.public_routes.file_favourites, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "application/file-favourites",
        title: "File-manager",
      });
    });

    app.get(routesConstants.public_routes.file_archived, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "application/file-archived",
        title: "File-manager",
      });
    });

    app.get(routesConstants.public_routes.file_manager_deleted, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "application/file-manager-deleted",
        title: "File-manager",
      });
    });

    app.get(routesConstants.public_routes.notes, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "application/notes",
        title: "Notes",
      });
    });

    app.get(routesConstants.public_routes.todo, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "application/todo",
        title: "todo",
      });
    });


    //Calendar
    app.get(routesConstants.public_routes.application_calendar, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "application/calendar",
        title: "Calendar",
      });
    });


    //Email
    app.get(routesConstants.public_routes.application_email, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "application/email",
        title: "Email",
      });
    });



    // ---------------- ( Settings ) ---------------------


    app.get(routesConstants.public_routes.securitySettings, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/general-settings/security",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.notification, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/general-settings/notification",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.connectedApps, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/general-settings/connected-apps",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.companySettings, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/website-settings/company-settings",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.localizationSettings, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/website-settings/localization-settings",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.languageSettings, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/website-settings/language-settings",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.appearance, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/website-settings/appearance",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.preference, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/website-settings/preference",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.prefixes, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/website-settings/prefixes",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.customFields, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/app-settings/custom-fields",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.printerSettings, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/app-settings/printers",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.invoiceSettings, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/app-settings/invoice-settings",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.gdprSettings, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/system-settings/gdpr-settings",
        title: "Settings",
      });
    });



    app.get(routesConstants.public_routes.smsGateway, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/system-settings/sms-gateway",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.currencySettings, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/financial-settings/currencies",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.bankSettingsGrid, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/financial-settings/bank-accounts",
        title: "Settings",
      });
    });



    app.get(routesConstants.public_routes.paymentGatewaySettings, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/financial-settings/payment-gateways",
        title: "Settings",
      });
    });

    app.get(routesConstants.public_routes.setting_taxRates, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/financial-settings/tax-rates",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.storageSettings, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/other-settings/storage",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.banIpAddress, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "settings/other-settings/ban-ip-address",
        title: "Settings",
      });
    });


    app.get(routesConstants.public_routes.ui_carousel, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-carousel",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_cards, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-cards",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_breadcrumb, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-breadcrumb",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_buttons_group, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-buttons-group",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_buttons, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-buttons",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_borders, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-borders",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_badges, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-badges",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_avatar, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-avatar",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_accordion, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-accordion",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_alerts, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-alerts",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_colors, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-colors",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_popovers, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-popovers",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_pagination, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-pagination",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_offcanvas, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-offcanvas",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_modals, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-modals",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_media, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-media",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_lightbox, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-lightbox",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_images, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-images",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_grid, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-grid",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_dropdowns, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-dropdowns",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_progress, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-progress",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_video, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-video",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_typography, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-typography",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_tooltips, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-tooltips",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_toasts, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-toasts",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_nav_tabs, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-nav-tabs",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_sweetalerts, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-sweetalerts",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_spinner, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-spinner",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_rangeslider, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-rangeslider",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.ui_placeholders, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "base-ui/ui-placeholders",
        title: "Base-UI",
      });
    });


    app.get(routesConstants.public_routes.pipeline, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "pipeline/pipeline",
        title: "CRMS Admin Template",
      });
    });


    app.get(routesConstants.public_routes.campaign, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "campaign/campaign",
        title: "CRMS Admin Template",
      });
    });


    app.get(routesConstants.public_routes.campaign_complete, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "campaign/campaign-complete",
        title: "CRMS Admin Template",
      });
    });


    app.get(routesConstants.public_routes.campaign_archieve, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "campaign/campaign-archieve",
        title: "CRMS Admin Template",
      });
    });




    app.get(routesConstants.public_routes.analytics, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "analytics/analytics",
        title: "CRMS Admin Template",
      });
    });

    app.get(routesConstants.public_routes.membership_plans, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "membership/membership-plans",
        title: "CRMS Admin Template",
      });
    });

    app.get(routesConstants.public_routes.membership_transactions, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "membership/membership-transactions",
        title: "CRMS Admin Template",
      });
    });

    app.get(routesConstants.public_routes.membership_addons, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "membership/membership-addons",
        title: "CRMS Admin Template",
      });
    });

    app.get(routesConstants.public_routes.countries, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "content/locations/countries",
        title: "CRMS Admin Template",
      });
    });

    app.get(routesConstants.public_routes.cities, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "content/locations/cities",
        title: "CRMS Admin Template",
      });
    });

    app.get(routesConstants.public_routes.states, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "content/locations/states",
        title: "CRMS Admin Template",
      });
    });

    app.get(routesConstants.public_routes.testimonials, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "content/testimonials",
        title: "CRMS Admin Template",
      });
    });

    app.get(routesConstants.public_routes.pages, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "content/pages",
        title: "CRMS Admin Template",
      });
    });

    app.get(routesConstants.public_routes.tickets, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "support/tickets",
        title: "CRMS Admin Template",
      });
    });

    app.get(routesConstants.public_routes.contact_messages, this.authController.isNonAuthenticated, (req, res, next) => {
      res.render(routesConstants.index, {
        layout: routesConstants.index_layout,
        page_path: "support/contact-messages",
        title: "CRMS Admin Template",
      });
    });

    app.get("*", function (req, res) {
      res.redirect(routesConstants.public_routes.pageNotFount);
    });
  }
}
