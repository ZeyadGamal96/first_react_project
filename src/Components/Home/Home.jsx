import React from 'react'
import image from '../../assets/images/avataaars.svg'

export default function Home() {
  return <>
    <div className="home">
      <div className="row">
        <div className="col-md-12">
          <div>
          <img src={image} alt="avatar" className="img-fluid" />
            <h1 className='fw-bold'>START FRAMEWORK</h1>
            <div className="style">
              <i className="fa-solid fa-star pb-3"></i>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </div>
  </>
}
