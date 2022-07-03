import React, { Fragment } from 'react'
import Brand from './Brand'
import './Services.css'
const Services = () => {
  return (
    <Fragment>
      <Brand/>
      <div className="servies-aria bg-[#F8FBFE] py-9">
        <div className="container mx-auto">
          <div className="conent-aria text-center">
            <h1 className='text-[#124265] font-bold text-3xl mt-4'>Sevices</h1>
            <p className='mt-4 w-[90%] mx-auto text-[#919191]'> Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas. </p>
          </div>
        </div>
        <div className="services-card-one pt-9">
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-7 px-12 ">
            <div className=" services_card card lg:max-w-lg mx-3 my-4 bg-base-100 shadow-xl py-8">
              <figure className="px-10 pt-10">
                <i id='icons-line' class="lni lni-service"></i>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-[#124265] text-1xl">Lorem Ipsum</h2>
                <p className='text-[#444444]'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi </p>
              </div>
            </div>
            <div className=" services_card card lg:max-w-lg mx-3 my-4 bg-base-100 shadow-xl py-8">
              <figure className="px-10 pt-10">
                <i id='icons-line' class="lni lni-service"></i>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-[#124265] text-1xl">Lorem Ipsum</h2>
                <p className='text-[#444444]'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi </p>
              </div>
            </div>
            <div className=" services_card card lg:max-w-lg mx-3 my-4 bg-base-100 shadow-xl py-8">
              <figure className="px-10 pt-10">
                <i id='icons-line' class="lni lni-service"></i>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-[#124265] text-1xl">Lorem Ipsum</h2>
                <p className='text-[#444444]'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi </p>
              </div>
            </div>
          </div>
        </div>
        <div className="services-card-two">
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-7 px-12 ">
            <div className=" services_card card lg:max-w-lg mx-3 my-4 bg-base-100 shadow-xl py-8">
              <figure className="px-10 pt-10">
                <i id='icons-line' class="lni lni-service"></i>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-[#124265] text-1xl">Lorem Ipsum</h2>
                <p className='text-[#444444]'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi </p>
              </div>
            </div>
            <div className=" services_card card lg:max-w-lg mx-3 my-4 bg-base-100 shadow-xl py-8">
              <figure className="px-10 pt-10">
                <i id='icons-line' class="lni lni-service"></i>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-[#124265] text-1xl">Lorem Ipsum</h2>
                <p className='text-[#444444]'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi </p>
              </div>
            </div>
            <div className=" services_card card lg:max-w-lg mx-3 my-4 bg-base-100 shadow-xl py-8">
              <figure className="px-10 pt-10">
                <i id='icons-line' class="lni lni-service"></i>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-[#124265] text-1xl">Lorem Ipsum</h2>
                <p className='text-[#444444]'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Services