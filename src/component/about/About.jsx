import React from 'react'

export default function About() {
  return (
    <div className='conatiner-about'>
      <div className='about-content d-flex flex-column justify-content-center align-items-center'>
        <h2 className='header'>About component</h2>
        <div className='line d-flex justify-content-center align-items-center mb-3'>
          <div className='line-1'></div>
          <i className="fa-solid fa-star"></i>
          <div className='line-2'></div>
        </div>


        <div className='under-about d-flex text-white' >
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>

      </div>
    </div>
  )
}
