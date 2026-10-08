import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./page/Home";
import Work from "./page/Work";
import Resume from "./page/Resume";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;