import React from "react";
import {
  BrowserRouter as Router,
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

const App = () => {
  return (
    <Router basename="/sumoki">
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const hideNavbarAndFooterRoutes = ["/menu"]; // Add paths where Navbar and Footer should be hidden

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
      </Routes>
      {!shouldHideNavbarAndFooter && <Footer />}
    </div>
  );
};

export default App;
