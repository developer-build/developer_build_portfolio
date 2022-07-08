import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shear/SectionTitle/SectionTitle";
import { useNavigate } from 'react-router-dom';
import './PortfolioSection.css';

const PortfolioSection = () => {
  const [portfolios, setPortfolios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('portfolio.json')
      .then(res => res.json())
      .then(data => setPortfolios(data))
  }, [])

  return (
    <section className="px-10 my-20">
      <SectionTitle title="Portfolio" title_type="Our Demo" />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {portfolios.map(portfolio =>
          <div className="single-portfolio flex flex-col gap-5" key={portfolio?.id}>
            <div className="overflow-hidden rounded-2xl">
              <img src={portfolio?.img} alt="" />
            </div>
            
            <div className="portfolio-details flex flex-col justify-center gap-2 p-5">
              <h2 title={portfolio?.title} className="text-info text-3xl uppercase font-bold">{portfolio?.title.length > 10 ? portfolio?.title.slice(0, 10) + '...' : portfolio?.title}</h2>
              <p>{portfolio?.description.slice(0, 40)}...</p>

              <div className="flex gap-5 mx-auto">
                <button className="badge badge-warning w-10 h-10 livelink flex justify-center items-center" onClick={() => navigate('/portfolio/' + portfolio?.id)}><i className="fa-solid fa-magnifying-glass"></i></button>
                <a className="badge badge-primary w-10 h-10 livelink flex justify-center items-center" href={portfolio?.livesite} target="blank"><i className="fa-solid fa-link"></i></a>
              </div>
            </div>
          </div>)}
      </div>
    </section>
  );
};

export default PortfolioSection;
