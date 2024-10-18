import DashboardLayout from "@containers/DashboardLayout";
import Overview from "./Agent/Overview";
import LeadsPage from "./Agent/LeadsPage";
import UsersPage from "./Agent/UsersPage";
import SettingsPage from "./Agent/SettingsPage";
import AccountPage from "./Agent/AccountPage";

const navItems = [
  { key: "overview", title: "Overview", href: "Overview", icon: "chart-pie" },
  { key: "leads", title: "Leads", href: "Leads", icon: "leads" },
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
  // { key: "error", title: "Error", href: "./", icon: "x-square" },
];

const AgentDashboard = ({ activePage, setActivePage }) => {
  // Rendering components based on the value of activePage
  let pageComponent;
  // console.log(activePage);
  if (activePage === "Overview" || activePage === "") {
    pageComponent = <Overview />;
  } else if (activePage === "Leads") {
    pageComponent = <LeadsPage />;
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

export default AgentDashboard;