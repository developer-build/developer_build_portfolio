import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Shear/Header/Header";
import Footer from "./Components/Shear/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
  
    </>
  );
}

export default App;
