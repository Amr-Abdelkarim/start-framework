import React from 'react'
import homePage from '../../assets/Home/avataaars.png'

export default function Beginning() {
  return (
    <div className='home'>
      <div className='content'>
        <img src={homePage} alt='homePage' className='homePage'>
        </img>
        <div className='text_home'>
          <h2 className='header_home'>start Framework</h2>
          <div className='line d-flex justify-content-center align-items-center mb-3'>
            <div className='line-1'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line-2'></div>
          </div>
        </div>
        <div className='text-under d-flex justify-content-center align-items-center'>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
  )
}

