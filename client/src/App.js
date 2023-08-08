import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Forum from "./pages/Forum/Forum";
import Landing from "./pages/Landing/Landing";
import RoverPics from "./pages/RoverPics/RoverPics";
import Weather from "./pages/Weather/Weather";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<Forum />} />
          <Route path="/roverpics" element={<RoverPics />} />
          <Route path="/contact" element={<Weather />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
