import dashboard from "../img/dashboard.svg";
import organization from "../img/organization.svg";
import campaign from "../img/campaign.svg";
import contact from "../img/contact.svg";
import topup from "../img/top-up.svg";
import report from "../img/report.svg";
import settings from "../img/settings.svg";
import profile from "../img/profile.svg";
import notification from "../img/notification.svg";
const Menus = [
  {
    id: 1,
    name: "Overview",
    link: "overview",
    menus: [{ id: 1, name: "Dashboard", link: "overview" }],
    icon: dashboard,
  },
  {
    id: 2,
    name: "Campaign",
    link: "new_campaign",
    menus: [
      { id: 1, name: "Start new campaign", link: "new_campaign" },
      { id: 2, name: "Choose Template", link: "choose_template" },
      { id: 3, name: "Campaign History", link: "campaign_history" },
    ],
    icon: campaign,
  },
  {
    id: 3,
    name: "Organization",
    link: "create_organization",
    menus: [
      { id: 1, name: "Create New", link: "create_organization" },
      { id: 2, name: "Invite Team Member", link: "invite_member" },
      { id: 3, name: "Organizations", link: "organizations" },
    ],
    icon: organization,
  },
  {
    id: 4,
    name: "Contact",
    link: "customer_list",
    menus: [
      { id: 1, name: "Customer List", link: "customer_list" },
      { id: 2, name: "Import Contact", link: "import_contact" },
      { id: 3, name: "Categories", link: "categories" },
    ],
    icon: contact,
  },
  {
    id: 5,
    name: "Top Up",
    link: "topup",
    menus: [
      { id: 1, name: "Account Top Up", link: "topup" },
      { id: 2, name: "Payment Method", link: "payment_method" },
    ],
    icon: topup,
  },
  {
    id: 6,
    name: "Reports",
    link: "campaign_report",
    menus: [
      { id: 1, name: "Campaign Report", link: "campaign_report" },
      { id: 2, name: "Billing History", link: "billing_history" },
      { id: 3, name: "Card Usage", link: "card_usage" },
      { id: 4, name: "Card Usagechart", link: "card_usageapexchart" },
    ],
    icon: report,
  },
  {
    id: 7,
    name: "Settings",
    link: "contact_us",
    menus: [
      { id: 1, name: "Contact Us", link: "contact_us" },
      { id: 2, name: "Security", link: "security" },
      { id: 3, name: "Activity Log", link: "activity_log" },
      { id: 4, name: "Integrations", link: "integrations" },
    ],
    icon: settings,
  },
  {
    id: 8,
    name: "Profile",
    link: "Contact_us",
    menus: [
      { id: 1, name: "Contact Us", link: "Contact_us" },
      { id: 2, name: "Activity Log", link: "Activity_log" },
      { id: 3, name: "Top Up Account", link: "top_up_account" },
      { id: 4, name: "Log Out", link: "log_out" },
      { id: 5, name: "Verification", link: "verification" },
    ],
    icon: profile,
  },
  {
    id: 9,
    name: "Notifications",
    link: "notification",
    menus: [],
    icon: notification,
  },
];

export default Menus;
