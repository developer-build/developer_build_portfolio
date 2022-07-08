import React from 'react';
import './Quote.css';

const Quote = () => {
    return (
        <section id='quote_sec' className='flex lg:flex-row flex-col'>
            <div className='quote-img lg:w-3/12 w-full pt-3 px-3'>
                <img src="https://i.ibb.co/BLLN1d3/girl-pointing-removebg-preview.png" alt="" />
            </div>

            <div className="flex flex-col justify-center gap-3 p-6 lg:w-6/12 w-full">

                <p className='quote-text uppercase text-justify'>
                    You might not think that programmers are artists but, programming is an extremely creative profession. It's logic-based creativity
                </p>

                <h3 className='quoter-name'>By <span>John romero</span></h3>
            </div>
            <div className='quote-img lg:w-3/12 w-full'>
                <img src="https://i.ibb.co/5jSsD59/man-pointing.png" alt="" />
            </div>
        </section>
    );
};

export default Quote;