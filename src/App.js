import "./index.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";

const  App = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="App relative">
      <Router>
        <Navbar />
        <Routes>
          {/* ======================= Start-pages ======================= */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* ======================= End-pages ======================= */}

          {/* ======================= Start-Error ======================= */}
          <Route path="*" element={<Error />} />
          {/* ======================= End-Error ======================= */}
        </Routes>
        <Footer />
      </Router>
      <div className="fixed bottom-0 right-0">
        <div
          className="bgsecondary cursor-pointer up-box rounded-full flex justify-center items-center m10"
          onClick={scrollToTop}
        >
          <img
            src="https://i.imgur.com/MEcgvFc.png"
            alt="upimg"
            className="up-img"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
