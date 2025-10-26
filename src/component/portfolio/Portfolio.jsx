import React from 'react'
import port1 from '../../assets/portfolio/poert1.png'
import port2 from '../../assets/portfolio/port2.png'
import port3 from '../../assets/portfolio/port3.png'
export default function Portfolio() {
  return (
    <div className='container'>
      <h1 className='text-center pt-4 header-pot'>portfolio component</h1>
      <div className='line d-flex justify-content-center align-items-center mb-3'>
        <div className='line-1 bg-black'></div>
        <i className="fa-solid fa-star text-black"></i>
        <div className='line-2 bg-black'></div>
      </div>
      <div className='row g-4'>
        <div className='col-md-4'>
          <div className='card'>
            <img className='w-100' src={port1} ></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <img className='w-100' src={port2}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <img className='w-100' src={port3}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <img className='w-100' src={port1}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <img className='w-100' src={port2}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <img className='w-100' src={port3}></img>
          </div>
        </div>

      </div>
    </div>
  )
}
