import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import { Menu } from "./pages/Menu.jsx";
import Careers from "./pages/Careers.jsx";
import Info from "./pages/Info.jsx";
import Create from "./pages/Create.jsx";
import Update from "./pages/Update.jsx";
import Manage from "./pages/Manage.jsx";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  // Add paths where Navbar and Footer should be hidden
  const hideNavbarAndFooterRoutes = ["/menu"];

  // Check if the current route is in the "hide" list
  const shouldHideNavbarAndFooter = hideNavbarAndFooterRoutes.includes(
    location.pathname
  );

  return (
    <div>
      {!shouldHideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/info" element={<Info />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
        <Route path="/manage" element={<Manage />} />
        {/* Add a fallback for invalid routes */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      {!shouldHideNavbarAndFooter && <Footer />}
    </div>
  );
};

export default App;
