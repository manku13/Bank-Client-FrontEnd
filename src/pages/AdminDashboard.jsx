import DashboardLayout from "@containers/DashboardLayout";
import Overview from "./Agent/Overview";
import LeadsPage from "./Agent/LeadsPage";
import UsersPage from "./Agent/UsersPage";
import SettingsPage from "./Agent/SettingsPage";
import AccountPage from "./Agent/AccountPage";
import AdminOverview from "./Admin/AdminOverview";
import AdminLeadsPage from "./Admin/AdminLeadsPage";
import AddBank from "@components/dashboard/tools/AddBank";
import AddAgent from "@components/dashboard/tools/AddAgent";
import AddNews from "@components/dashboard/tools/AddNews";

const navItems = [
  { key: "overview", title: "Overview", href: "Overview", icon: "chart-pie" },

  { key: "leads", title: "Leads", href: "Leads", icon: "leads" },
  {
    key: "tools",
    title: "Tools",
    icon: "tools",
    children: [
      { key: "addbank", title: "AddBank", href: "AddBank" },
      { key: "addagent", title: "AddAgent", href: "AddAgent" },
      { key: "addnews", title: "AddNews", href: "AddNews" },
      // Add more tools as needed
    ],
  },
  {
    key: "users",
    title: "Users",
    href: "Users",
    icon: "users-icon",
  },
  {
    key: "settings",
    title: "Settings",
    href: "Settings",
    icon: "gear-six",
  },
  {
    key: "account",
    title: "Account",
    href: "Account",
    icon: "user",
  },
];

const AdminDashboard = ({ activePage, setActivePage }) => {
  // Rendering components based on the value of activePage
  let pageComponent;
  // console.log(activePage);
  if (activePage === "Overview" || activePage === "") {
    pageComponent = <AdminOverview />;
  } else if (activePage === "Leads") {
    pageComponent = <AdminLeadsPage />;
  } else if (activePage === "AddNews") {
    pageComponent = <AddNews />;
  } else if (activePage === "AddBank") {
    pageComponent = <AddBank />;
  } else if (activePage === "AddAgent") {
    pageComponent = <AddAgent />;
  } else if (activePage === "Users") {
    pageComponent = <UsersPage />;
  } else if (activePage === "Settings") {
    pageComponent = <SettingsPage />;
  } else if (activePage === "Account") {
    pageComponent = <AccountPage />;
  }

  return (
    <DashboardLayout
      navItems={navItems}
      activePage={activePage}
      setActivePage={setActivePage}
    >
      {pageComponent}
    </DashboardLayout>
  );
};

export default AdminDashboard;
