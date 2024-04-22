import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/page.tsx";
import "./App.css";
import About from "./about/page.tsx";
import Header1 from "./components/Header/header.tsx";
import Footer from "./components/Footer/footer.tsx";
import Services from "./services/page.tsx";

function App() {
  return (
    <div className="App bg-[#f2eeee]">
      <Header1 />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
