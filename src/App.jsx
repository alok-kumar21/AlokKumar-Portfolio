import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MainContent from "./pages/MainContent";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MainContent />
      </Router>
    </>
  );
}

export default App;
