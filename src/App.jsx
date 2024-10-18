import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "@pages/HomePage";
import "./App.css";
import ServicesPage from "@pages/ServicesPage";
import AboutPage from "@pages/AboutPage";
import FaqsPage from "@pages/FaqsPage";
import BlogsPage from "@pages/BlogsPage";
import BlogTemp from "@containers/Blog/BlogTemp";
import PageNotFound from "@pages/PageNotFound";
import ContactPage from "@pages/ContactPage";
import AgentRequestPage from "@pages/AgentRequestPage";
import AgentLoginPage from "@pages/AgentLoginPage";
import { useState } from "react";
import AdminDashboard from "@pages/AdminDashboard";
import AgentDashboard from "@pages/AgentDashboard";

function App() {
  const [activePage, setActivePage] = useState("Overview");
  return (
    <Router>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog-post" element={<BlogTemp />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/agent-apply" element={<AgentRequestPage />} />
        <Route path="/agent-login" element={<AgentLoginPage />} />
        <Route
          path="/agent/dashboard"
          element={
            <AgentDashboard
              activePage={activePage}
              setActivePage={setActivePage}
            />
          }
        />

        {/* <Route path="/dashboard">
          <Route path="" element={<Dashboard activePage={"overview"} />} />
          <Route path="leads" element={<Dashboard activePage={"leads"} />} />
          <Route path="users" element={<Dashboard activePage={"users"} />} />
          <Route
            path="settings"
            element={<Dashboard activePage={"settings"} />}
          />
          <Route
            path="account"
            element={<Dashboard activePage={"account"} />}
          />
        </Route> */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminDashboard
              activePage={activePage}
              setActivePage={setActivePage}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
