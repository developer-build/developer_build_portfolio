import React, { Fragment } from 'react'
import './barand.css'
import freelancer from '../.../../../../Assets/Images/brand/fee.png'
import fiveer from '../.../../../../Assets/Images/brand/fiv.png'
import linkdeing from '../.../../../../Assets/Images/brand/link.png'
import upwork from '../.../../../../Assets/Images/brand/up.png'
const Brand = () => {
    return (
        <Fragment>
            <div className="bard-aria py-8 custom_container">
                <div className="grid grid-cols-1 lg:grid-cols-4 mt-7 px-12 justify-items-center ">
                    <img id='bradnimg' className='w-[200px] my-2' src={freelancer} />
                    <img id='bradnimg' className='w-[120px] my-2' src={fiveer} />
                    <img id='bradnimg' className='w-[150px] my-2 mt-3' src={linkdeing} />
                    <img id='bradnimg' className='w-[150px] my-2 mt-4' src={upwork} />

                </div>
            </div>
        </Fragment>
    )
}

export default Brand