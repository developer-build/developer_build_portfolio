import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Shear/Header/Header";
import Footer from "./Components/Shear/Footer/Footer";
import PortfolioDetail from "./Components/Home/PortfolioSection/PortfolioDetail/PortfolioDetail";
import { useEffect, useState } from "react";
import Loading from "./Components/Shear/Loading";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);
  return (
    <>
      {!isLoading ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
