import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='upFooter'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 '>
              <div className='parts mb-4'>
                <div className='part-1'>
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='parts text-center text-white'>
                <div className='part-2'>
                  <h3>AROUND THE WEB</h3>
                  <div className='icon-footer'>
                    <ul className='d-flex justify-content-center align-items-center'>
                      <li><i className="fa-brands fa-facebook-f"></i></li>
                      <li><i className="fa-brands fa-twitter"></i></li>
                      <li><i className="fa-brands fa-linkedin-in"></i></li>
                      <li><i className="fa-brands fa-github"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='parts text-white text-center'>
                <div className='part-3'>
                  <h3>ABOUT FREELANCER</h3>
                  <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='downFooter text-center'>
        <p>Copyright © Your Website 2023</p>
      </div>
    </>
  )
}
