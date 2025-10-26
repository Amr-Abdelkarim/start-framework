import React from 'react'

export default function Contact() {
  return (
    <>
      <div className='container'>
        <h1 className='text-center pt-4 header-pot'>Contact Component</h1>
        <div className='line d-flex justify-content-center align-items-center mb-3'>
          <div className='line-1 bg-black'></div>
          <i className="fa-solid fa-star text-black"></i>
          <div className='line-2 bg-black'></div>
        </div>
        <form>
          <div className="mb-3 w-50 m-auto">
            <label htmlFor="name" className="form-label ">Name</label>
            <input type="text" className="form-control " id="name" />
          </div>
          <div className="mb-3 w-50 m-auto">
            <label htmlFor="age" className="form-label">userAge</label>
            <input type="text" className="form-control" id="age" />
          </div>
          <div className="mb-3 w-50 m-auto">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3 w-50 m-auto">
            <label htmlFor="pass" className="form-label">password</label>
            <input type="password" className="form-control" id="pass" />
          </div>

          .<div className="mb-3 w-50 m-auto">
          <button type="submit" className="text-center btn btn-success">Send Message</button>
          </div>
        </form>
      </div>
    </>
  )
}
