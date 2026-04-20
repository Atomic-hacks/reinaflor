import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Hero from "./component/Hero";
import Footer from "./component/layout/Footer";
import Work from "./shop/Shop";
import Speaking from "./speaking/Speaking";
const Olympiadiary = Work;
const Podcast = Speaking;
import About from "./brand/Brand";
import Journal from "./journal/Journal";
import Contact from "./contact/Contact";
import BookSession from "./book/BookSession";
import Navbar from "./component/layout/Navbar";
import WorkDetail from "./ProductDetail";
import Reform from "./reform/Reform";
import { gsapScrollToTop, useLenisScroll } from "./lib/gsap";

const RouteScrollManager = () => {
  const location = useLocation();
  // Initialize Lenis smooth scroll globally
  useLenisScroll();

  React.useEffect(() => {
    gsapScrollToTop();
  }, [location.pathname]);

  return null;
};

const AppLayout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <>
      <RouteScrollManager />
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<WorkDetail />} />
        <Route path="/olympiadiary" element={<Olympiadiary />} />
        <Route path="/olympiadiary/:id" element={<WorkDetail />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-session" element={<BookSession />} />
        <Route path="/reform" element={<Reform />} />
        <Route path="/brand" element={<Navigate to="/about" replace />} />
        <Route path="/shop" element={<Navigate to="/work" replace />} />
        <Route path="/shop/:id" element={<Navigate to="/work" replace />} />
      </Routes>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <main className="relative mx-auto">
      <Router>
        <AppLayout />
      </Router>
    </main>
  );
};

export default App;
