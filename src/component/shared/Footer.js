import React from 'react'
import "./Nav.css";

const Footer = () => {
  return (
    <div>

      <div class="footer-section">
        <div class="row container-section9 m-0">
          <div class="col-md-4">
            <h4>Subscribe to our Newsletter</h4>
          </div>
          <div class="col-md-7">
            <div class="input-group input-group-lg footer-input-group">
              <input type="email" class="form-control input-text" placeholder="Enter Your Email Address" />
              <button class="btn btn-light btn-form" type="button">SUBMIT</button>
            </div>
          </div>
        </div>
        <div class="footer-container">
          <div class="footer-container-main">
            <div class="footer">
              <div class="row footerrow p-3 m-0">
                <div class="col-md-3">
                  <img src="./Image/Logo_white.png" class="section8-img"
                    alt="section1-card" />
                  <p className='font-12'>
                    Unlock a world of possibilities with
                    WAWrides' blockchain-powered
                    platform.
                  </p>
                </div>
                <div class="col-md-2">
                  <div class="mt-5">
                    <h6>Services</h6>
                    <p className='font-12'>Car</p>
                    <p className='font-12'>Yacht</p>
                    <p className='font-12'>Private Planes</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="mt-5">
                    <h6>Company</h6>
                    <p className='font-12'>Wha's New</p>
                    <p className='font-12'>About us</p>
                    <p className='font-12'>How it works</p>
                    <p className='font-12'>career</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="mt-5">
                    <h6>Resources</h6>
                    <p className='font-12'>FAQs</p>
                    <p className='font-12'>Blogs</p>
                    <p className='font-12'>Terms & Conditions</p>
                    <p className='font-12'>Refund Policy</p>
                    <p className='font-12'>White Papers</p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="mt-5">
                    <h6>Get in Touch</h6>
                    <p className='font-12'>Phone: +91-99999999</p>
                    <p className='font-12'>Email: info@wawrides.com</p>
                    <h6>Social Medias</h6>
                    <h2>
                      <i class="fa-brands fa-facebook m-2 ml-0"></i>
                      <i class="fa-brands fa-instagram m-2"></i>
                      <i class="fa-brands fa-linkedin m-2"></i>
                      <i class="fa-brands fa-square-twitter m-2"></i>
                    </h2>
                  </div>
                </div>
                <div>
                  {/* <hr /> */}
                  <p className='font-12'>Copyright @ 2023 WaWRides | All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer