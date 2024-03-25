import React from 'react';
import image_1 from '../../assets/images/poert1.png'
import image_2 from '../../assets/images/port2.png'
import image_3 from '../../assets/images/port3.png'

export default function Portfolio() {
  return <>
    <div className="portfolio py-5">
      <h2 className='fw-bold fs-1'>PORTFOLIO COMPONENT</h2>
      <div className="style">
        <i className="fa-solid fa-star pb-3"></i>
      </div>
      <div className="container">
        <div className="row g-5">
          <div className="col-md-4">
            <div className="image" data-bs-toggle="modal" data-bs-target="#exampleModal_1">
              <img src={image_1} alt="card" />
              <div className="layer">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image" data-bs-toggle="modal" data-bs-target="#exampleModal_2">
              <img src={image_2} alt="card" />
              <div className="layer">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image" data-bs-toggle="modal" data-bs-target="#exampleModal_3">
              <img src={image_3} alt="card" />
              <div className="layer">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image" data-bs-toggle="modal" data-bs-target="#exampleModal_4">
              <img src={image_1} alt="card" />
              <div className="layer">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image" data-bs-toggle="modal" data-bs-target="#exampleModal_5">
              <img src={image_2} alt="card" />
              <div className="layer">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image" data-bs-toggle="modal" data-bs-target="#exampleModal_6">
              <img src={image_3} alt="card" />
              <div className="layer">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Modal */}
    <div className="modal fade" id="exampleModal_1"  >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <img src={image_1} alt="card" />
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal_2"  >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <img src={image_2} alt="card" />
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal_3"  >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <img src={image_3} alt="card" />
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal_4"  >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <img src={image_1} alt="card" />
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal_5"  >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <img src={image_2} alt="card" />
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal_6"  >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <img src={image_3} alt="card" />
        </div>
      </div>
    </div>
  </>
}
