const express = require("express");
const route = express.Router();
const public_routes = require("./public.routes");

const index = "index";
const index_without_nav = "index-without-nav";
const index_error = "index-error";

route.use(function (req, res, next) {
  let url_replace_options = req.url.replace("?", "").replace("/", "");
  let routes = {};
  for (var key in public_routes) {
    routes[key] = public_routes[key].replace("/", "");
  }
  res.locals.routes = routes;
  res.locals.active_path = url_replace_options;
  next();
});

//   -------------- ( Auth ) ------------------

route.get(public_routes.login, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Login",
    layout: index_without_nav,
    page_path: "login",
  });
});
route.get(public_routes.coming_soon, (req, res, next) => {
  res.render(index_without_nav, {
    title: "coming soon",
    layout: index_without_nav,
    page_path: "coming-soon",
  });
});

// route.get(public_routes.coming_soon, (req, res, next) => {
//   res.render("../views/Auth/coming-soon");
// });

route.get(public_routes.register, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Register",
    layout: index_without_nav,
    page_path: "register",
  });
});

route.get(public_routes.forgot_password, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Forgot password",
    layout: index_without_nav,
    page_path: "forgot-password",
  });
});

route.get(public_routes.reset_password, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Reset password",
    layout: index_without_nav,
    page_path: "reset-password",
  });
});
route.get(public_routes.email_verification, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Email Verification",
    layout: index_without_nav,
    page_path: "email-verification",
  });
});
route.get(public_routes.lock_screen, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Lock Screen",
    layout: index_without_nav,
    page_path: "lock-screen",
  });
});
route.get(public_routes.two_step_verification, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Two Step Verification",
    layout: index_without_nav,
    page_path: "two-step-verification",
  });
});

// --------------- ( Main ) ----------------------

route.get(public_routes.deals_dashboard, (req, res, next) => {
  res.render(index, {
    title: "Dashboard - CRMS admin template",
    page_path: "dashboard/deals-dashboard",
  });
});

route.get(public_routes.projects_dashboard, (req, res, next) => {
  res.render(index, {
    title: "Projects Dashboard - CRMS admin template",
    page_path: "dashboard/projects-dashboard",
  });
});

route.get(public_routes.leads_dashboard, (req, res, next) => {
  res.render(index, {
    title: "Leads dashboard - CRMS admin template",
    page_path: "dashboard/leads-dashboard",
  });
});

route.get(public_routes.tasks, (req, res, next) => {
  res.render(index, {
    title: "Tasks - CRMS admin template",
    page_path: "tasks/tasks",
  });
});

route.get(public_routes.tasks_completed, (req, res, next) => {
  res.render(index, {
    title: "Tasks - CRMS admin template",
    page_path: "tasks/tasks-completed",
  });
});

route.get(public_routes.tasks_important, (req, res, next) => {
  res.render(index, {
    title: "Tasks - CRMS admin template",
    page_path: "tasks/tasks-important",
  });
});

route.get(public_routes.proposals, (req, res, next) => {
  res.render(index, {
    title: "Proposals - CRMS admin template",
    page_path: "proposals/proposals",
  });
});

route.get(public_routes.proposals_grid, (req, res, next) => {
  res.render(index, {
    title: "Proposals - CRMS admin template",
    page_path: "proposals/proposals-grid",
  });
});

route.get(public_routes.contracts, (req, res, next) => {
  res.render(index, {
    title: "Contracts - CRMS admin template",
    page_path: "contracts/contracts",
  });
});

route.get(public_routes.contracts_grid, (req, res, next) => {
  res.render(index, {
    title: "Contracts - CRMS admin template",
    page_path: "contracts/contracts-grid",
  });
});

route.get(public_routes.estimations, (req, res, next) => {
  res.render(index, {
    title: "Estimations - CRMS admin template",
    page_path: "estimations/estimations",
  });
});

route.get(public_routes.estimations_kanban, (req, res, next) => {
  res.render(index, {
    title: "Estimations - CRMS admin template",
    page_path: "estimations/estimations-kanban",
  });
});

route.get(public_routes.payments, (req, res, next) => {
  res.render(index, {
    title: "Payments - CRMS admin template",
    page_path: "payments/payments",
  });
});

route.get(public_routes.contacts, (req, res, next) => {
  res.render(index, {
    title: "Contacts - CRMS admin template",
    page_path: "contacts/contacts",
  });
});
route.get(public_routes.contact_grid, (req, res, next) => {
  res.render(index, {
    title: "Contacts - CRMS admin template",
    page_path: "contacts/contact-grid",
  });
});
route.get(public_routes.contact_details, (req, res, next) => {
  res.render(index, {
    title: "Contacts - CRMS admin template",
    page_path: "contacts/contact-details",
  });
});

route.get(public_routes.companies, (req, res, next) => {
  res.render(index, {
    title: "Companies - CRMS admin template",
    page_path: "companies/companies",
  });
});

route.get(public_routes.companies_grid, (req, res, next) => {
  res.render(index, {
    title: "Companies - CRMS admin template",
    page_path: "companies/companies-grid",
  });
});

route.get(public_routes.companies_details, (req, res, next) => {
  res.render(index, {
    title: "Companies - CRMS admin template",
    page_path: "companies/company-details",
  });
});

route.get(public_routes.leads, (req, res, next) => {
  res.render(index, {
    title: "Leads - CRMS admin template",
    page_path: "leads/leads",
  });
});

route.get(public_routes.leads_kanban_view, (req, res, next) => {
  res.render(index, {
    title: "Leads - CRMS admin template",
    page_path: "leads/leads-kanban-view",
  });
});

route.get(public_routes.leads_details, (req, res, next) => {
  res.render(index, {
    title: "Leads - CRMS admin template",
    page_path: "leads/leads-details",
  });
});

route.get(public_routes.deals, (req, res, next) => {
  res.render(index, {
    title: "Deals - CRMS admin template",
    page_path: "deals/deals",
  });
});

route.get(public_routes.deals_kanban_view, (req, res, next) => {
  res.render(index, {
    title: "Deals - CRMS admin template",
    page_path: "deals/deals-kanban-view",
  });
});

route.get(public_routes.deals_details, (req, res, next) => {
  res.render(index, {
    title: "Deals - CRMS admin template",
    page_path: "deals/deals-details",
  });
});

route.get(public_routes.projects, (req, res, next) => {
  res.render(index, {
    title: "Projects - CRMS admin template",
    page_path: "projects/projects",
  });
});

route.get(public_routes.projects_grid, (req, res, next) => {
  res.render(index, {
    title: "Projects - CRMS admin template",
    page_path: "projects/project-grid",
  });
});

route.get(public_routes.projects_details, (req, res, next) => {
  res.render(index, {
    title: "Projects - CRMS admin template",
    page_path: "projects/project-details",
  });
});

route.get(public_routes.lead_reports, (req, res, next) => {
  res.render(index, {
    title: "Reports - CRMS admin template",
    page_path: "reports/lead-reports",
  });
});
route.get(public_routes.deal_reports, (req, res, next) => {
  res.render(index, {
    title: "Reports - CRMS admin template",
    page_path: "reports/deal-reports",
  });
});
route.get(public_routes.contact_reports, (req, res, next) => {
  res.render(index, {
    title: "Reports - CRMS admin template",
    page_path: "reports/contact-reports",
  });
});
route.get(public_routes.company_reports, (req, res, next) => {
  res.render(index, {
    title: "Reports - CRMS admin template",
    page_path: "reports/company-reports",
  });
});
route.get(public_routes.project_reports, (req, res, next) => {
  res.render(index, {
    title: "Reports - CRMS admin template",
    page_path: "reports/project-reports",
  });
});
route.get(public_routes.task_reports, (req, res, next) => {
  res.render(index, {
    title: "Reports - CRMS admin template",
    page_path: "reports/task-reports",
  });
});
route.get(public_routes.industry, (req, res, next) => {
  res.render(index, {
    title: "Reports - CRMS admin template",
    page_path: "crms-settings/industry",
  });
});
route.get(public_routes.contact_stage, (req, res, next) => {
  res.render(index, {
    title: "Reports - CRMS admin template",
    page_path: "crms-settings/contact-stage",
  });
});
route.get(public_routes.lost_reason, (req, res, next) => {
  res.render(index, {
    title: "Reports - CRMS admin template",
    page_path: "crms-settings/lost-reason",
  });
});
route.get(public_routes.sources, (req, res, next) => {
  res.render(index, {
    title: "Reports - CRMS admin template",
    page_path: "crms-settings/sources",
  });
});
route.get(public_routes.calls, (req, res, next) => {
  res.render(index, {
    title: "Reports - CRMS admin template",
    page_path: "crms-settings/calls",
  });
});
route.get(public_routes.manage_users, (req, res, next) => {
  res.render(index, {
    title: "Reports - CRMS admin template",
    page_path: "user-management/manage-users",
  });
});
route.get(public_routes.roles_permissions, (req, res, next) => {
  res.render(index, {
    title: "Reports - CRMS admin template",
    page_path: "user-management/roles-permissions",
  });
});
route.get(public_routes.delete_request, (req, res, next) => {
  res.render(index, {
    title: "Reports - CRMS admin template",
    page_path: "user-management/delete-request",
  });
});
route.get(public_routes.permission, (req, res, next) => {
  res.render(index, {
    title: "Reports - CRMS admin template",
    page_path: "user-management/permission",
  });
});

route.get(public_routes.activities, (req, res, next) => {
  res.render(index, {
    title: "Activities - CRMS admin template",
    page_path: "activities/activities",
  });
});

route.get(public_routes.activity_calls, (req, res, next) => {
  res.render(index, {
    title: "Activities - CRMS admin template",
    page_path: "activities/activity-calls",
  });
});

route.get(public_routes.activity_mail, (req, res, next) => {
  res.render(index, {
    title: "Activities - CRMS admin template",
    page_path: "activities/activity-mail",
  });
});

route.get(public_routes.activity_meeting, (req, res, next) => {
  res.render(index, {
    title: "Activities - CRMS admin template",
    page_path: "activities/activity-meeting",
  });
});

route.get(public_routes.activity_task, (req, res, next) => {
  res.render(index, {
    title: "Activities - CRMS admin template",
    page_path: "activities/activity-task",
  });
});

route.get(public_routes.blog, (req, res, next) => {
  res.render(index, {
    title: "Blog - CRMS admin template",
    page_path: "blog/blog",
  });
});

route.get(public_routes.blog_details, (req, res, next) => {
  res.render(index, {
    title: "Blog - CRMS admin template",
    page_path: "blog/blog-details",
  });
});

route.get(public_routes.pending_blog, (req, res, next) => {
  res.render(index, {
    title: "Pending blog - CRMS admin template",
    page_path: "blog/pending-blog",
  });
});

route.get(public_routes.add_blog, (req, res, next) => {
  res.render(index, {
    title: "Add blog - CRMS admin template",
    page_path: "blog/add-blog",
  });
});

route.get(public_routes.edit_blog, (req, res, next) => {
  res.render(index, {
    title: "Edit blog - CRMS admin template",
    page_path: "blog/edit-blog",
  });
});

route.get(public_routes.blog_Categories, (req, res, next) => {
  res.render(index, {
    title: "Blog Categories - CRMS admin template",
    page_path: "blog/blog-Categories",
  });
});

route.get(public_routes.invoices, (req, res, next) => {
  res.render(index, {
    title: "Invoices - CRMS admin template",
    page_path: "invoices/invoices",
  });
});

route.get(public_routes.invoice_grid, (req, res, next) => {
  res.render(index, {
    title: "Invoice grid - CRMS admin template",
    page_path: "invoices/invoice-grid",
  });
});

// route.get(public_routes.email, (req, res, next) => {
//   res.render(index, {
//     title: "Email - CRMS admin template",
//     page_path: "email/email",
//   });
// });

route.get(public_routes.mail_view, (req, res, next) => {
  res.render(index, {
    title: "Email - CRMS admin template",
    page_path: "email/mail-view",
  });
});

route.get(public_routes.settings, (req, res, next) => {
  res.render(index, {
    title: "Settings - CRMS admin template",
    page_path: "settings/settings",
  });
});



route.get(public_routes.email_settings, (req, res, next) => {
  res.render(index, {
    title: "Settings - CRMS admin template",
    page_path: "settings/system-settings/email-settings",
  });
});




// ---------------- ( Pages ) ---------------------


route.get(public_routes.pageNotFount, (req, res, next) => {
  res.render(index_error, {
    title: "Error 404",
    page_path: "error-404",
    layout: index_error,
  });
});
route.get(public_routes.under_maintenance, (req, res, next) => {
  res.render(index_error, {
    title: "Under Maintenance",
    page_path: "under-maintenance",
    layout: index_error,
  });
});
route.get(public_routes.serverError, (req, res, next) => {
  res.render(index_error, {
    title: "Error 500",
    page_path: "error-500",
    layout: index_error,
  });
});

route.get(public_routes.faq, (req, res, next) => {
  res.render(index, {
    title: "Faq - CRMS admin template",
    page_path: "page/faq",
  });
});

route.get(public_routes.terms, (req, res, next) => {
  res.render(index, {
    title: "Terms - CRMS admin template",
    page_path: "page/terms",
  });
});

route.get(public_routes.privacy_policy, (req, res, next) => {
  res.render(index, {
    title: "Privacy policy - CRMS admin template",
    page_path: "page/privacy-policy",
  });
});

route.get(public_routes.blank_page, (req, res, next) => {
  res.render(index, {
    title: "Blank page - CRMS admin template",
    page_path: "page/blank-page",
  });
});

// --------------- () ----------------

route.get(public_routes.components, (req, res, next) => {
  res.render(index, {
    title: "Components - CRMS admin template",
    page_path: "components/components",
  });
});

route.get(public_routes.sweetalerts, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/sweetalerts",
  });
});

route.get(public_routes.tooltip, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/tooltip",
  });
});

route.get(public_routes.popover, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/popover",
  });
});

route.get(public_routes.ribbon, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/ribbon",
  });
});

route.get(public_routes.clipboard, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/clipboard",
  });
});

route.get(public_routes.drag_drop, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/drag-drop",
  });
});

route.get(public_routes.rangeslider, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/rangeslider",
  });
});

route.get(public_routes.rating, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/rating",
  });
});

route.get(public_routes.toastr, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/toastr",
  });
});

route.get(public_routes.text_editor, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/text-editor",
  });
});

route.get(public_routes.counter, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/counter",
  });
});

route.get(public_routes.scrollbar, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/scrollbar",
  });
});

route.get(public_routes.spinner, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/spinner",
  });
});

// route.get(public_routes.notification, (req, res, next) => {
//   res.render(index, {
//     title: "Elements - CRMS admin template",
//     page_path: "elements/notification",
//   });
// });

route.get(public_routes.lightbox, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/lightbox",
  });
});

route.get(public_routes.stickynote, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/stickynote",
  });
});

route.get(public_routes.timeline, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/timeline",
  });
});

route.get(public_routes.horizontal_timeline, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/horizontal-timeline",
  });
});

route.get(public_routes.form_wizard, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/form-wizard",
  });
});

// ---------------- ( charts ) --------------------------

route.get(public_routes.chart_apex, (req, res, next) => {
  res.render(index, {
    title: "Charts - CRMS admin template",
    page_path: "charts/chart-apex",
  });
});

route.get(public_routes.chart_js, (req, res, next) => {
  res.render(index, {
    title: "Charts - CRMS admin template",
    page_path: "charts/chart-js",
  });
});

route.get(public_routes.chart_morris, (req, res, next) => {
  res.render(index, {
    title: "Charts - CRMS admin template",
    page_path: "charts/chart-morris",
  });
});

route.get(public_routes.chart_flot, (req, res, next) => {
  res.render(index, {
    title: "Charts - CRMS admin template",
    page_path: "charts/chart-flot",
  });
});

route.get(public_routes.chart_peity, (req, res, next) => {
  res.render(index, {
    title: "Charts - CRMS admin template",
    page_path: "charts/chart-peity",
  });
});

route.get(public_routes.chart_c3, (req, res, next) => {
  res.render(index, {
    title: "Charts - CRMS admin template",
    page_path: "charts/chart-c3",
  });
});

// -------------- ( Icons ) --------------

route.get(public_routes.icon_fontawesome, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-fontawesome",
  });
});

route.get(public_routes.icon_feather, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-feather",
  });
});

route.get(public_routes.icon_ionic, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-ionic",
  });
});

route.get(public_routes.icon_material, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-material",
  });
});

route.get(public_routes.icon_pe7, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-pe7",
  });
});

route.get(public_routes.icon_simpleline, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-simpleline",
  });
});

route.get(public_routes.icon_themify, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-themify",
  });
});

route.get(public_routes.icon_weather, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-weather",
  });
});

route.get(public_routes.icon_typicon, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-typicon",
  });
});

route.get(public_routes.icon_flag, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-flag",
  });
});

// ------------- ( Forms ) ----------------

route.get(public_routes.form_basic_inputs, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-basic-inputs",
  });
});

route.get(public_routes.form_input_groups, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-input-groups",
  });
});

route.get(public_routes.form_horizontal, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-horizontal",
  });
});

route.get(public_routes.form_vertical, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-vertical",
  });
});

route.get(public_routes.form_mask, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-mask",
  });
});

route.get(public_routes.form_validation, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-validation",
  });
});

route.get(public_routes.form_checkbox_radios, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-checkbox-radios",
  });
});
route.get(public_routes.form_grid_gutters, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-grid-gutters",
  });
});
route.get(public_routes.form_select, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-select",
  });
});
route.get(public_routes.form_fileUpload, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-fileupload",
  });
});
route.get(public_routes.form_floating_labels, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-floating-labels",
  });
});
route.get(public_routes.form_formSelected2, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-select2",
  });
});

// -------------- ( Tables ) ----------------------

route.get(public_routes.tables_basic, (req, res, next) => {
  res.render(index, {
    title: "Tables - CRMS admin template",
    page_path: "tables/tables-basic",
  });
});

route.get(public_routes.data_tables, (req, res, next) => {
  res.render(index, {
    title: "Tables - CRMS admin template",
    page_path: "tables/data-tables",
  });
});

route.get(public_routes.profile, (req, res, next) => {
  res.render(index, {
    title: "Employee Profile - CRMS admin template",
    page_path: "profile/profile",
  });
});


route.get(public_routes.application_chat, (req, res, next) => {
  res.render(index, {
    page_path: "application/chat",
    title: "Chat",
  });
});
route.get(public_routes.call_history, (req, res, next) => {
  res.render(index, {
    page_path: "application/call-history",
    title: "Call",
  });
});
route.get(public_routes.audio_call, (req, res, next) => {
  res.render(index, {
    page_path: "application/audio-call",
    title: "audio-call",
  });
});
route.get(public_routes.video_call, (req, res, next) => {
  res.render(index, {
    page_path: "application/video-call",
    title: "video-call",
  });
});
route.get(public_routes.file_manager, (req, res, next) => {
  res.render(index, {
    page_path: "application/file-manager",
    title: "File-manager",
  });
});
route.get(public_routes.file_shared, (req, res, next) => {
  res.render(index, {
    page_path: "application/file-shared",
    title: "File-manager",
  });
});
route.get(public_routes.file_document, (req, res, next) => {
  res.render(index, {
    page_path: "application/file-document",
    title: "File-manager",
  });
});
route.get(public_routes.file_recent, (req, res, next) => {
  res.render(index, {
    page_path: "application/file-recent",
    title: "File-manager",
  });
});
route.get(public_routes.file_favourites, (req, res, next) => {
  res.render(index, {
    page_path: "application/file-favourites",
    title: "File-manager",
  });
});
route.get(public_routes.file_archived, (req, res, next) => {
  res.render(index, {
    page_path: "application/file-archived",
    title: "File-manager",
  });
});
route.get(public_routes.file_manager_deleted, (req, res, next) => {
  res.render(index, {
    page_path: "application/file-manager-deleted",
    title: "File-manager",
  });
});
route.get(public_routes.notes, (req, res, next) => {
  res.render(index, {
    page_path: "application/notes",
    title: "Notes",
  });
});
route.get(public_routes.todo, (req, res, next) => {
  res.render(index, {
    page_path: "application/todo",
    title: "todo",
  });
});

//Calendar
route.get(public_routes.application_calendar, (req, res, next) => {
  res.render(index, {
    page_path: "application/calendar",
    title: "Calendar",
  });
});

//Email
route.get(public_routes.application_email, (req, res, next) => {
  res.render(index, {
    page_path: "application/email",
    title: "Email",
  });
});


// ---------------- ( Settings ) ---------------------


route.get(public_routes.securitySettings, (req, res, next) => {
  res.render(index, {
    page_path: "settings/general-settings/security",
    title: "Settings",
  });
});

route.get(public_routes.notification, (req, res, next) => {
  res.render(index, {
    page_path: "settings/general-settings/notification",
    title: "Settings",
  });
});

route.get(public_routes.connectedApps, (req, res, next) => {
  res.render(index, {
    page_path: "settings/general-settings/connected-apps",
    title: "Settings",
  });
});

route.get(public_routes.companySettings, (req, res, next) => {
  res.render(index, {
    page_path: "settings/website-settings/company-settings",
    title: "Settings",
  });
});

route.get(public_routes.localizationSettings, (req, res, next) => {
  res.render(index, {
    page_path: "settings/website-settings/localization-settings",
    title: "Settings",
  });
});

route.get(public_routes.languageSettings, (req, res, next) => {
  res.render(index, {
    page_path: "settings/website-settings/language-settings",
    title: "Settings",
  });
});

route.get(public_routes.appearance, (req, res, next) => {
  res.render(index, {
    page_path: "settings/website-settings/appearance",
    title: "Settings",
  });
});

route.get(public_routes.preference, (req, res, next) => {
  res.render(index, {
    page_path: "settings/website-settings/preference",
    title: "Settings",
  });
});

route.get(public_routes.prefixes, (req, res, next) => {
  res.render(index, {
    page_path: "settings/website-settings/prefixes",
    title: "Settings",
  });
});

route.get(public_routes.customFields, (req, res, next) => {
  res.render(index, {
    page_path: "settings/app-settings/custom-fields",
    title: "Settings",
  });
});

route.get(public_routes.printerSettings, (req, res, next) => {
  res.render(index, {
    page_path: "settings/app-settings/printers",
    title: "Settings",
  });
});

route.get(public_routes.invoiceSettings, (req, res, next) => {
  res.render(index, {
    page_path: "settings/app-settings/invoice-settings",
    title: "Settings",
  });
});

route.get(public_routes.gdprSettings, (req, res, next) => {
  res.render(index, {
    page_path: "settings/system-settings/gdpr-settings",
    title: "Settings",
  });
});


route.get(public_routes.smsGateway, (req, res, next) => {
  res.render(index, {
    page_path: "settings/system-settings/sms-gateway",
    title: "Settings",
  });
});

route.get(public_routes.currencySettings, (req, res, next) => {
  res.render(index, {
    page_path: "settings/financial-settings/currencies",
    title: "Settings",
  });
});

route.get(public_routes.bankSettingsGrid, (req, res, next) => {
  res.render(index, {
    page_path: "settings/financial-settings/bank-accounts",
    title: "Settings",
  });
});


route.get(public_routes.paymentGatewaySettings, (req, res, next) => {
  res.render(index, {
    page_path: "settings/financial-settings/payment-gateways",
    title: "Settings",
  });
});
route.get(public_routes.setting_taxRates, (req, res, next) => {
  res.render(index, {
    page_path: "settings/financial-settings/tax-rates",
    title: "Settings",
  });
});

route.get(public_routes.storageSettings, (req, res, next) => {
  res.render(index, {
    page_path: "settings/other-settings/storage",
    title: "Settings",
  });
});

route.get(public_routes.banIpAddress, (req, res, next) => {
  res.render(index, {
    page_path: "settings/other-settings/ban-ip-address",
    title: "Settings",
  });
});

route.get(public_routes.ui_carousel, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-carousel",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_cards, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-cards",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_breadcrumb, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-breadcrumb",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_buttons_group, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-buttons-group",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_buttons, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-buttons",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_borders, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-borders",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_badges, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-badges",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_avatar, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-avatar",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_accordion, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-accordion",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_alerts, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-alerts",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_colors, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-colors",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_popovers, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-popovers",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_pagination, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-pagination",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_offcanvas, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-offcanvas",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_modals, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-modals",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_media, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-media",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_lightbox, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-lightbox",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_images, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-images",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_grid, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-grid",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_dropdowns, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-dropdowns",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_progress, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-progress",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_video, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-video",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_typography, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-typography",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_tooltips, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-tooltips",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_toasts, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-toasts",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_nav_tabs, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-nav-tabs",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_sweetalerts, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-sweetalerts",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_spinner, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-spinner",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_rangeslider, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-rangeslider",
    title: "Base-UI",
  });
});

route.get(public_routes.ui_placeholders, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-placeholders",
    title: "Base-UI",
  });
});

route.get(public_routes.pipeline, (req, res, next) => {
  res.render(index, {
    page_path: "pipeline/pipeline",
    title: "CRMS Admin Template",
  });
});

route.get(public_routes.campaign, (req, res, next) => {
  res.render(index, {
    page_path: "campaign/campaign",
    title: "CRMS Admin Template",
  });
});

route.get(public_routes.campaign_complete, (req, res, next) => {
  res.render(index, {
    page_path: "campaign/campaign-complete",
    title: "CRMS Admin Template",
  });
});

route.get(public_routes.campaign_archieve, (req, res, next) => {
  res.render(index, {
    page_path: "campaign/campaign-archieve",
    title: "CRMS Admin Template",
  });
});



route.get(public_routes.analytics, (req, res, next) => {
  res.render(index, {
    page_path: "analytics/analytics",
    title: "CRMS Admin Template",
  });
});
route.get(public_routes.membership_plans, (req, res, next) => {
  res.render(index, {
    page_path: "membership/membership-plans",
    title: "CRMS Admin Template",
  });
});
route.get(public_routes.membership_transactions, (req, res, next) => {
  res.render(index, {
    page_path: "membership/membership-transactions",
    title: "CRMS Admin Template",
  });
});
route.get(public_routes.membership_addons, (req, res, next) => {
  res.render(index, {
    page_path: "membership/membership-addons",
    title: "CRMS Admin Template",
  });
});
route.get(public_routes.countries, (req, res, next) => {
  res.render(index, {
    page_path: "content/locations/countries",
    title: "CRMS Admin Template",
  });
});
route.get(public_routes.cities, (req, res, next) => {
  res.render(index, {
    page_path: "content/locations/cities",
    title: "CRMS Admin Template",
  });
});
route.get(public_routes.states, (req, res, next) => {
  res.render(index, {
    page_path: "content/locations/states",
    title: "CRMS Admin Template",
  });
});
route.get(public_routes.testimonials, (req, res, next) => {
  res.render(index, {
    page_path: "content/testimonials",
    title: "CRMS Admin Template",
  });
});
route.get(public_routes.pages, (req, res, next) => {
  res.render(index, {
    page_path: "content/pages",
    title: "CRMS Admin Template",
  });
});
route.get(public_routes.tickets, (req, res, next) => {
  res.render(index, {
    page_path: "support/tickets",
    title: "CRMS Admin Template",
  });
});
route.get(public_routes.contact_messages, (req, res, next) => {
  res.render(index, {
    page_path: "support/contact-messages",
    title: "CRMS Admin Template",
  });
});

route.get("/", function (req, res) {
  res.redirect(public_routes.login);
});
route.get("*", function (req, res) {
  res.redirect(public_routes.pageNotFount);
});


module.exports = route