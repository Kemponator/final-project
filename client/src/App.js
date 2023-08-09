import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Forum from "./pages/Forum/Forum";
import Landing from "./pages/Landing/Landing";
import RoverPics from "./pages/RoverPics/RoverPics";
import Weather from "./pages/Weather/Weather";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import ForumHome from "./components/ForumHome/ForumHome";
import Replies from "./components/Replies/Replies";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/roverpics" element={<RoverPics />} />
          <Route path="/weather" element={<Weather />} />
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<ForumHome />} />
          <Route path='/:id/replies' element={<Replies />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
