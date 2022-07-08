import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import './PortfolioDetail.css';

const PortfolioDetail = () => {
    const { id } = useParams();
    const [portfolio, setPortfolio] = useState({});

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Developer-Barsha/db-port-json/main/portfolio.json')
            .then(res => res.json())
            .then(data => {
                const project = data.find(p => p.id == id);
                console.log(project)
                return setPortfolio(project);
            })
    }, [id])

    return (
        <section id="portfolio-detail" className='pt-24 lg:px-16 px-5 py-10'>
            <div className='flex items-center gap-8 lg:flex-row flex-col w-full'>
                <div className='w-full lg:w-1/2 flex flex-col gap-3'>
                    <img className='rounded-lg w-full border' src={portfolio?.img} alt="" />
                </div>
                <div className='flex flex-col gap-5 w-full lg:w-1/2'>
                    <h1 className='font-bold text-warning text-3xl'>Detail About: <span className='text-primary'>{portfolio?.title}</span></h1>
                    <h1 className='text-black'>{portfolio?.description} </h1>
                    <div className='flex gap-3' style={{ transition: '0.5s' }}>
                        <button className="badge badge-primary text-white w-10 h-10 cursor-pointer">
                            <a href={portfolio?.livesite} target='blank'><i className="fa-solid fa-link"></i></a>
                        </button>
                        <button className="badge badge-secondary w-10 h-10 cursor-pointer">
                            <Link to='/'><i className="fa-solid fa-home"></i></Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioDetail;