import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Shear/Header/Header";
import Footer from "./Components/Shear/Footer/Footer";
import PortfolioDetail from './Components/Home/PortfolioSection/PortfolioDetail/PortfolioDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
      </Routes>
      <Footer />
  
    </>
  );
}

export default App;
