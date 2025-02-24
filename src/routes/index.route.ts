import { Application, Request, Response, Router } from "express";
import * as adminController from "../controllers/AdminController"; // attaching controller class function with route
import * as authController from "../controllers/AuthController";
import * as sideBarController from "../controllers/SideBarController";
import * as routesConstants from "../constants/routesConstants";

const routes = Router();

routes.get("/", authController.isNonAuthenticated, authController.login);

routes.get("/login", authController.isNonAuthenticated, authController.login);
routes.get("/logout", authController.logout);

routes.get(routesConstants.public_routes.coming_soon, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index_without_nav_layout, {
    title: "coming soon",
    layout: routesConstants.index_without_nav_layout,
    page_path: "coming-soon",
  });
});


// routes.get(routesConstants.public_routes.coming_soon, authController.isNonAuthenticated, (req, res, next) => {
//   res.render("../views/Auth/coming-soon");
// });

routes.get(routesConstants.public_routes.register, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index_without_nav_layout, {
    title: "Register",
    layout: routesConstants.index_without_nav_layout,
    page_path: "register",
  });
});


routes.get(routesConstants.public_routes.forgot_password, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index_without_nav_layout, {
    title: "Forgot password",
    layout: routesConstants.index_without_nav_layout,
    page_path: "forgot-password",
  });
});


routes.get(routesConstants.public_routes.reset_password, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index_without_nav_layout, {
    title: "Reset password",
    layout: routesConstants.index_without_nav_layout,
    page_path: "reset-password",
  });
});

routes.get(routesConstants.public_routes.email_verification, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index_without_nav_layout, {
    title: "Email Verification",
    layout: routesConstants.index_without_nav_layout,
    page_path: "email-verification",
  });
});

routes.get(routesConstants.public_routes.lock_screen, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index_without_nav_layout, {
    title: "Lock Screen",
    layout: routesConstants.index_without_nav_layout,
    page_path: "lock-screen",
  });
});

routes.get(routesConstants.public_routes.two_step_verification, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index_without_nav_layout, {
    title: "Two Step Verification",
    layout: routesConstants.index_without_nav_layout,
    page_path: "two-step-verification",
  });
});


// --------------- ( Main ) ----------------------

routes.get(routesConstants.public_routes.deals_dashboard, authController.isNonAuthenticated, adminController.deals_dashboard);

routes.get(routesConstants.public_routes.projects_dashboard, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Projects Dashboard - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "dashboard/projects-dashboard",
  });
});


routes.get(routesConstants.public_routes.leads_dashboard, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Leads dashboard - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "dashboard/leads-dashboard",
  });
});


routes.get(routesConstants.public_routes.tasks, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Tasks - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "tasks/tasks",
  });
});


routes.get(routesConstants.public_routes.tasks_completed, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Tasks - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "tasks/tasks-completed",
  });
});


routes.get(routesConstants.public_routes.tasks_important, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Tasks - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "tasks/tasks-important",
  });
});


routes.get(routesConstants.public_routes.proposals, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Proposals - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "proposals/proposals",
  });
});


routes.get(routesConstants.public_routes.proposals_grid, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Proposals - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "proposals/proposals-grid",
  });
});


routes.get(routesConstants.public_routes.contracts, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Contracts - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "contracts/contracts",
  });
});


routes.get(routesConstants.public_routes.contracts_grid, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Contracts - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "contracts/contracts-grid",
  });
});


routes.get(routesConstants.public_routes.estimations, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Estimations - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "estimations/estimations",
  });
});


routes.get(routesConstants.public_routes.estimations_kanban, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Estimations - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "estimations/estimations-kanban",
  });
});


routes.get(routesConstants.public_routes.payments, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Payments - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "payments/payments",
  });
});


routes.get(routesConstants.public_routes.contacts, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Contacts - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "contacts/contacts",
  });
});

routes.get(routesConstants.public_routes.contact_grid, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Contacts - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "contacts/contact-grid",
  });
});

routes.get(routesConstants.public_routes.contact_details, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Contacts - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "contacts/contact-details",
  });
});


routes.get(routesConstants.public_routes.companies, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Companies - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "companies/companies",
  });
});


routes.get(routesConstants.public_routes.companies_grid, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Companies - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "companies/companies-grid",
  });
});


routes.get(routesConstants.public_routes.companies_details, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Companies - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "companies/company-details",
  });
});


routes.get(routesConstants.public_routes.leads, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Leads - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "leads/leads",
  });
});


routes.get(routesConstants.public_routes.leads_kanban_view, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Leads - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "leads/leads-kanban-view",
  });
});


routes.get(routesConstants.public_routes.leads_details, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Leads - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "leads/leads-details",
  });
});


routes.get(routesConstants.public_routes.deals, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Deals - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "deals/deals",
  });
});


routes.get(routesConstants.public_routes.deals_kanban_view, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Deals - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "deals/deals-kanban-view",
  });
});


routes.get(routesConstants.public_routes.deals_details, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Deals - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "deals/deals-details",
  });
});


routes.get(routesConstants.public_routes.projects, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Projects - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "projects/projects",
  });
});


routes.get(routesConstants.public_routes.projects_grid, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Projects - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "projects/project-grid",
  });
});


routes.get(routesConstants.public_routes.projects_details, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Projects - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "projects/project-details",
  });
});


routes.get(routesConstants.public_routes.lead_reports, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Reports - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "reports/lead-reports",
  });
});

routes.get(routesConstants.public_routes.deal_reports, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Reports - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "reports/deal-reports",
  });
});

routes.get(routesConstants.public_routes.contact_reports, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Reports - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "reports/contact-reports",
  });
});

routes.get(routesConstants.public_routes.company_reports, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Reports - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "reports/company-reports",
  });
});

routes.get(routesConstants.public_routes.project_reports, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Reports - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "reports/project-reports",
  });
});

routes.get(routesConstants.public_routes.task_reports, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Reports - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "reports/task-reports",
  });
});

routes.get(routesConstants.public_routes.industry, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Reports - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "crms-settings/industry",
  });
});

routes.get(routesConstants.public_routes.contact_stage, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Reports - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "crms-settings/contact-stage",
  });
});

routes.get(routesConstants.public_routes.lost_reason, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Reports - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "crms-settings/lost-reason",
  });
});

routes.get(routesConstants.public_routes.sources, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Reports - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "crms-settings/sources",
  });
});

routes.get(routesConstants.public_routes.calls, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Reports - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "crms-settings/calls",
  });
});

routes.get(routesConstants.public_routes.manage_users, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Reports - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "user-management/manage-users",
  });
});

routes.get(routesConstants.public_routes.roles_permissions, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Reports - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "user-management/roles-permissions",
  });
});

routes.get(routesConstants.public_routes.delete_request, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Reports - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "user-management/delete-request",
  });
});

routes.get(routesConstants.public_routes.permission, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Reports - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "user-management/permission",
  });
});


routes.get(routesConstants.public_routes.activities, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Activities - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "activities/activities",
  });
});


routes.get(routesConstants.public_routes.activity_calls, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Activities - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "activities/activity-calls",
  });
});


routes.get(routesConstants.public_routes.activity_mail, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Activities - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "activities/activity-mail",
  });
});


routes.get(routesConstants.public_routes.activity_meeting, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Activities - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "activities/activity-meeting",
  });
});


routes.get(routesConstants.public_routes.activity_task, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Activities - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "activities/activity-task",
  });
});


routes.get(routesConstants.public_routes.blog, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Blog - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "blog/blog",
  });
});


routes.get(routesConstants.public_routes.blog_details, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Blog - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "blog/blog-details",
  });
});


routes.get(routesConstants.public_routes.pending_blog, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Pending blog - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "blog/pending-blog",
  });
});


routes.get(routesConstants.public_routes.add_blog, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Add blog - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "blog/add-blog",
  });
});


routes.get(routesConstants.public_routes.edit_blog, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Edit blog - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "blog/edit-blog",
  });
});


routes.get(routesConstants.public_routes.blog_Categories, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Blog Categories - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "blog/blog-Categories",
  });
});


routes.get(routesConstants.public_routes.invoices, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Invoices - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "invoices/invoices",
  });
});


routes.get(routesConstants.public_routes.invoice_grid, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Invoice grid - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "invoices/invoice-grid",
  });
});


// routes.get(routesConstants.public_routes.email, authController.isNonAuthenticated, (req, res, next) => {
//   res.render(routesConstants.index, {
//     title: "Email - CRMS admin template",
//     layout: routesConstants.index_layout,
// page_path: "email/email",
//   });
// });

routes.get(routesConstants.public_routes.mail_view, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Email - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "email/mail-view",
  });
});


routes.get(routesConstants.public_routes.settings, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Settings - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "settings/settings",
  });
});




routes.get(routesConstants.public_routes.email_settings, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Settings - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "settings/system-settings/email-settings",
  });
});





// ---------------- ( Pages ) ---------------------


routes.get(routesConstants.public_routes.pageNotFount, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index_error_layout, {
    title: "Error 404",
    layout: routesConstants.index_error_layout,
    page_path: "error-404",
  });
});

routes.get(routesConstants.public_routes.under_maintenance, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index_error_layout, {
    title: "Under Maintenance",
    layout: routesConstants.index_layout,
    page_path: "under-maintenance",
  });
});

routes.get(routesConstants.public_routes.serverError, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index_error_layout, {
    title: "Error 500",
    layout: routesConstants.index_layout,
    page_path: "error-500",
  });
});


routes.get(routesConstants.public_routes.faq, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Faq - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "page/faq",
  });
});


routes.get(routesConstants.public_routes.terms, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Terms - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "page/terms",
  });
});


routes.get(routesConstants.public_routes.privacy_policy, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Privacy policy - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "page/privacy-policy",
  });
});


routes.get(routesConstants.public_routes.blank_page, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Blank page - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "page/blank-page",
  });
});


// --------------- () ----------------

routes.get(routesConstants.public_routes.components, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Components - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "components/components",
  });
});


routes.get(routesConstants.public_routes.sweetalerts, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/sweetalerts",
  });
});


routes.get(routesConstants.public_routes.tooltip, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/tooltip",
  });
});


routes.get(routesConstants.public_routes.popover, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/popover",
  });
});


routes.get(routesConstants.public_routes.ribbon, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/ribbon",
  });
});


routes.get(routesConstants.public_routes.clipboard, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/clipboard",
  });
});


routes.get(routesConstants.public_routes.drag_drop, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/drag-drop",
  });
});


routes.get(routesConstants.public_routes.rangeslider, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/rangeslider",
  });
});


routes.get(routesConstants.public_routes.rating, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/rating",
  });
});


routes.get(routesConstants.public_routes.toastr, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/toastr",
  });
});


routes.get(routesConstants.public_routes.text_editor, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/text-editor",
  });
});


routes.get(routesConstants.public_routes.counter, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/counter",
  });
});


routes.get(routesConstants.public_routes.scrollbar, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/scrollbar",
  });
});


routes.get(routesConstants.public_routes.spinner, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/spinner",
  });
});


// routes.get(routesConstants.public_routes.notification, authController.isNonAuthenticated, (req, res, next) => {
//   res.render(routesConstants.index, {
//     title: "Elements - CRMS admin template",
//     layout: routesConstants.index_layout,
// page_path: "elements/notification",
//   });
// });

routes.get(routesConstants.public_routes.lightbox, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/lightbox",
  });
});


routes.get(routesConstants.public_routes.stickynote, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/stickynote",
  });
});


routes.get(routesConstants.public_routes.timeline, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/timeline",
  });
});


routes.get(routesConstants.public_routes.horizontal_timeline, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/horizontal-timeline",
  });
});


routes.get(routesConstants.public_routes.form_wizard, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Elements - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "elements/form-wizard",
  });
});


// ---------------- ( charts ) --------------------------

routes.get(routesConstants.public_routes.chart_apex, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Charts - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "charts/chart-apex",
  });
});


routes.get(routesConstants.public_routes.chart_js, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Charts - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "charts/chart-js",
  });
});


routes.get(routesConstants.public_routes.chart_morris, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Charts - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "charts/chart-morris",
  });
});


routes.get(routesConstants.public_routes.chart_flot, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Charts - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "charts/chart-flot",
  });
});


routes.get(routesConstants.public_routes.chart_peity, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Charts - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "charts/chart-peity",
  });
});


routes.get(routesConstants.public_routes.chart_c3, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Charts - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "charts/chart-c3",
  });
});


// -------------- ( Icons ) --------------

routes.get(routesConstants.public_routes.icon_fontawesome, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Icons - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "icons/icon-fontawesome",
  });
});


routes.get(routesConstants.public_routes.icon_feather, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Icons - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "icons/icon-feather",
  });
});


routes.get(routesConstants.public_routes.icon_ionic, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Icons - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "icons/icon-ionic",
  });
});


routes.get(routesConstants.public_routes.icon_material, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Icons - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "icons/icon-material",
  });
});


routes.get(routesConstants.public_routes.icon_pe7, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Icons - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "icons/icon-pe7",
  });
});


routes.get(routesConstants.public_routes.icon_simpleline, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Icons - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "icons/icon-simpleline",
  });
});


routes.get(routesConstants.public_routes.icon_themify, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Icons - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "icons/icon-themify",
  });
});


routes.get(routesConstants.public_routes.icon_weather, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Icons - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "icons/icon-weather",
  });
});


routes.get(routesConstants.public_routes.icon_typicon, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Icons - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "icons/icon-typicon",
  });
});


routes.get(routesConstants.public_routes.icon_flag, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Icons - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "icons/icon-flag",
  });
});


// ------------- ( Forms ) ----------------

routes.get(routesConstants.public_routes.form_basic_inputs, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Forms - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "forms/form-basic-inputs",
  });
});


routes.get(routesConstants.public_routes.form_input_groups, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Forms - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "forms/form-input-groups",
  });
});


routes.get(routesConstants.public_routes.form_horizontal, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Forms - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "forms/form-horizontal",
  });
});


routes.get(routesConstants.public_routes.form_vertical, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Forms - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "forms/form-vertical",
  });
});


routes.get(routesConstants.public_routes.form_mask, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Forms - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "forms/form-mask",
  });
});


routes.get(routesConstants.public_routes.form_validation, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Forms - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "forms/form-validation",
  });
});


routes.get(routesConstants.public_routes.form_checkbox_radios, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Forms - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "forms/form-checkbox-radios",
  });
});

routes.get(routesConstants.public_routes.form_grid_gutters, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Forms - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "forms/form-grid-gutters",
  });
});

routes.get(routesConstants.public_routes.form_select, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Forms - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "forms/form-select",
  });
});

routes.get(routesConstants.public_routes.form_fileUpload, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Forms - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "forms/form-fileupload",
  });
});

routes.get(routesConstants.public_routes.form_floating_labels, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Forms - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "forms/form-floating-labels",
  });
});

routes.get(routesConstants.public_routes.form_formSelected2, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Forms - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "forms/form-select2",
  });
});


// -------------- ( Tables ) ----------------------

routes.get(routesConstants.public_routes.tables_basic, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Tables - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "tables/tables-basic",
  });
});


routes.get(routesConstants.public_routes.data_tables, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Tables - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "tables/data-tables",
  });
});


routes.get(routesConstants.public_routes.profile, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    title: "Employee Profile - CRMS admin template",
    layout: routesConstants.index_layout,
    page_path: "profile/profile",
  });
});



routes.get(routesConstants.public_routes.application_chat, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "application/chat",
    title: "Chat",
  });
});

routes.get(routesConstants.public_routes.call_history, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "application/call-history",
    title: "Call",
  });
});

routes.get(routesConstants.public_routes.audio_call, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "application/audio-call",
    title: "audio-call",
  });
});

routes.get(routesConstants.public_routes.video_call, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "application/video-call",
    title: "video-call",
  });
});

routes.get(routesConstants.public_routes.file_manager, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "application/file-manager",
    title: "File-manager",
  });
});

routes.get(routesConstants.public_routes.file_shared, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "application/file-shared",
    title: "File-manager",
  });
});

routes.get(routesConstants.public_routes.file_document, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "application/file-document",
    title: "File-manager",
  });
});

routes.get(routesConstants.public_routes.file_recent, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "application/file-recent",
    title: "File-manager",
  });
});

routes.get(routesConstants.public_routes.file_favourites, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "application/file-favourites",
    title: "File-manager",
  });
});

routes.get(routesConstants.public_routes.file_archived, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "application/file-archived",
    title: "File-manager",
  });
});

routes.get(routesConstants.public_routes.file_manager_deleted, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "application/file-manager-deleted",
    title: "File-manager",
  });
});

routes.get(routesConstants.public_routes.notes, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "application/notes",
    title: "Notes",
  });
});

routes.get(routesConstants.public_routes.todo, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "application/todo",
    title: "todo",
  });
});


//Calendar
routes.get(routesConstants.public_routes.application_calendar, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "application/calendar",
    title: "Calendar",
  });
});


//Email
routes.get(routesConstants.public_routes.application_email, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "application/email",
    title: "Email",
  });
});



// ---------------- ( Settings ) ---------------------


routes.get(routesConstants.public_routes.securitySettings, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/general-settings/security",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.notification, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/general-settings/notification",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.connectedApps, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/general-settings/connected-apps",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.companySettings, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/website-settings/company-settings",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.localizationSettings, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/website-settings/localization-settings",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.languageSettings, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/website-settings/language-settings",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.appearance, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/website-settings/appearance",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.preference, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/website-settings/preference",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.prefixes, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/website-settings/prefixes",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.customFields, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/app-settings/custom-fields",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.printerSettings, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/app-settings/printers",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.invoiceSettings, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/app-settings/invoice-settings",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.gdprSettings, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/system-settings/gdpr-settings",
    title: "Settings",
  });
});



routes.get(routesConstants.public_routes.smsGateway, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/system-settings/sms-gateway",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.currencySettings, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/financial-settings/currencies",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.bankSettingsGrid, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/financial-settings/bank-accounts",
    title: "Settings",
  });
});



routes.get(routesConstants.public_routes.paymentGatewaySettings, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/financial-settings/payment-gateways",
    title: "Settings",
  });
});

routes.get(routesConstants.public_routes.setting_taxRates, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/financial-settings/tax-rates",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.storageSettings, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/other-settings/storage",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.banIpAddress, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "settings/other-settings/ban-ip-address",
    title: "Settings",
  });
});


routes.get(routesConstants.public_routes.ui_carousel, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-carousel",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_cards, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-cards",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_breadcrumb, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-breadcrumb",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_buttons_group, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-buttons-group",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_buttons, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-buttons",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_borders, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-borders",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_badges, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-badges",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_avatar, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-avatar",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_accordion, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-accordion",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_alerts, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-alerts",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_colors, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-colors",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_popovers, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-popovers",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_pagination, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-pagination",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_offcanvas, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-offcanvas",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_modals, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-modals",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_media, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-media",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_lightbox, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-lightbox",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_images, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-images",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_grid, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-grid",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_dropdowns, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-dropdowns",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_progress, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-progress",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_video, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-video",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_typography, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-typography",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_tooltips, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-tooltips",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_toasts, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-toasts",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_nav_tabs, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-nav-tabs",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_sweetalerts, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-sweetalerts",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_spinner, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-spinner",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_rangeslider, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-rangeslider",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.ui_placeholders, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "base-ui/ui-placeholders",
    title: "Base-UI",
  });
});


routes.get(routesConstants.public_routes.pipeline, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "pipeline/pipeline",
    title: "CRMS Admin Template",
  });
});


routes.get(routesConstants.public_routes.campaign, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "campaign/campaign",
    title: "CRMS Admin Template",
  });
});


routes.get(routesConstants.public_routes.campaign_complete, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "campaign/campaign-complete",
    title: "CRMS Admin Template",
  });
});


routes.get(routesConstants.public_routes.campaign_archieve, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "campaign/campaign-archieve",
    title: "CRMS Admin Template",
  });
});




routes.get(routesConstants.public_routes.analytics, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "analytics/analytics",
    title: "CRMS Admin Template",
  });
});

routes.get(routesConstants.public_routes.membership_plans, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "membership/membership-plans",
    title: "CRMS Admin Template",
  });
});

routes.get(routesConstants.public_routes.membership_transactions, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "membership/membership-transactions",
    title: "CRMS Admin Template",
  });
});

routes.get(routesConstants.public_routes.membership_addons, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "membership/membership-addons",
    title: "CRMS Admin Template",
  });
});

routes.get(routesConstants.public_routes.countries, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "content/locations/countries",
    title: "CRMS Admin Template",
  });
});

routes.get(routesConstants.public_routes.cities, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "content/locations/cities",
    title: "CRMS Admin Template",
  });
});

routes.get(routesConstants.public_routes.states, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "content/locations/states",
    title: "CRMS Admin Template",
  });
});

routes.get(routesConstants.public_routes.testimonials, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "content/testimonials",
    title: "CRMS Admin Template",
  });
});

routes.get(routesConstants.public_routes.pages, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "content/pages",
    title: "CRMS Admin Template",
  });
});

routes.get(routesConstants.public_routes.tickets, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "support/tickets",
    title: "CRMS Admin Template",
  });
});

routes.get(routesConstants.public_routes.contact_messages, authController.isNonAuthenticated, (req, res, next) => {
  res.render(routesConstants.index, {
    layout: routesConstants.index_layout,
    page_path: "support/contact-messages",
    title: "CRMS Admin Template",
  });
});

// routes.get("*", function (req, res) {
//   res.redirect(routesConstants.public_routes.pageNotFount);
// });

export default routes;