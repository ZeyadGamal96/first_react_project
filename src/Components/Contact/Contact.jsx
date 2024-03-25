import React from 'react'

export default function Contact() {
  return <>
    <div className="contact py-5">
      <h2 className='fw-bold fs-1'>CONATCT SECTION</h2>
      <div className="style mb-5">
        <i className="fa-solid fa-star pb-3"></i>
      </div>
      <div className="container">
        <div>
          <div className="form-floating mb-3 w-75 m-auto">
            <input type="text" className="form-control border-0 border-bottom rounded-0" id="floatingInput" placeholder="User Name" />
            <label htmlFor="floatingInput">User Name</label>
          </div>
          <div className="form-floating mb-3 w-75 m-auto">
            <input type="number" className="form-control border-0 border-bottom rounded-0" id="floatingInput" placeholder="Number" />
            <label htmlFor="floatingInput">User Age</label>
          </div>
          <div className="form-floating mb-3 w-75 m-auto">
            <input type="email" className="form-control border-0 border-bottom rounded-0" id="floatingInput" placeholder="Email" />
            <label htmlFor="floatingInput">User Email</label>
          </div>
          <div className="form-floating mb-3 w-75 m-auto">
            <input type="password" className="form-control border-0 border-bottom rounded-0" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">User Password</label>
          </div>
          <div className="mt-4">
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  </>
}
