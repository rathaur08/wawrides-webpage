import React from 'react'
import { Link } from 'react-router-dom';
import NavSwiper from './NavSwiper';
import "./Nav.css"

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand m-0" to="/">WaWRides</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link nav-linkbar active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-linkbar" to="/">CAR</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-linkbar" to="/">YACHT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-linkbar" to="/">PRIVATE PLANE</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-linkbar" to="/">HOW IT WORKS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-linkbar" to="/">FAQs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-linkbar p-0 pt-2" to="/" data-bs-toggle="modal" data-bs-target="#loginModal">LOGIN/</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-linkbar p-0 pt-2" to="/" data-bs-toggle="modal" data-bs-target="#signupModal">SIGNUP</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Login Modal  */}
      <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h2>Welcome to WAWRides Community !</h2>
              <div className="row p-3">
                <div className="col-md-6">
                  <h4>Login</h4>
                  <form action="">
                    <div className="mb-3">
                      <input type="email" className="form-control input-color" id="" placeholder="Your Email Address" />
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control input-color" id="" placeholder="Your Password" />
                    </div>
                    <div className="mb-3">
                      <a href="/" className="text-org float-end" data-bs-target="#forgotModal" data-bs-toggle="modal" data-bs-dismiss="modal">Forgot Password ?</a>
                    </div>
                    <div className="mb-3">
                      <button type="submit" className="btn btn-card-detail">Submit</button>
                    </div>
                    <div className="mb-3">
                      <a href="/" className="text-blk float-end" data-bs-target="#signupModal" data-bs-toggle="modal" data-bs-dismiss="modal">New Member ? <span className='text-org'>Signup now</span></a>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  {/* <!-- Swiper --> */}
                  <div className=''>
                    <NavSwiper />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SignUP Modal  */}
      <div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h2>Welcome to WAWRides Community !</h2>
              <div className="row p-3">
                <div className="col-md-6">
                  <h4>Registration Form</h4>
                  <form action="">
                    <div className="mb-3">
                      <input type="text" className="form-control input-color" id="" placeholder="First Name" />
                    </div>
                    <div className="mb-3">
                      <input type="text" className="form-control input-color" id="" placeholder="Last Name" />
                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control input-color" id="" placeholder="Email Address" />
                    </div>
                    <div className="mb-3">
                      <input type="number" className="form-control input-color" id="" placeholder="Mobile" />
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control input-color" id="" placeholder="Choose your Password" />
                    </div>
                    <div className="mb-3">
                      <button type="submit" className="btn btn-card-detail w-100 mt-2">Submit</button>
                    </div>
                    <div className="mb-3">
                      <a href="/" className="text-org" data-bs-target="#loginModal" data-bs-toggle="modal" data-bs-dismiss="modal">Back to Login</a>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  {/* <!-- Swiper --> */}
                  <div className=''>
                    <NavSwiper />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Forgot Password Modal  */}
      <div className="modal fade" id="forgotModal" tabindex="-1" aria-labelledby="forgotModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h2>Welcome to WAWRides Community !</h2>
              <div className="row p-3">
                <div className="col-md-6">
                  <h4>Forgot Password</h4>
                  <form action="">
                    <div className="mb-3">
                      <input type="email" className="form-control input-color" id="" placeholder="Your Registered Email Address" />
                    </div>
                    <div className="mb-3">
                      <button type="submit" className="btn btn-card-detail ">Submit</button>
                    </div>
                    <div className="mb-3">
                      <a href="/" className="text-org" data-bs-target="#loginModal" data-bs-toggle="modal" data-bs-dismiss="modal">Back to Login</a>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  {/* <!-- Swiper --> */}
                  <div className=''>
                    <NavSwiper />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* OTP Verification Modal  */}
      <div className="modal fade" id="otpVerificationModal" tabindex="-1" aria-labelledby="otpVerificationLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h2>Welcome to WAWRides Community !</h2>
              <div className="row p-3">
                <div className="col-md-6">
                  <h4>OTP Verification</h4>
                  <p>We have sent OTP on your phone <strong>+91-9999999999</strong> & email
                    <strong>abc@gmail.com.</strong> Please enter both the OTPs</p>
                  <form action="">
                    <div className="mb-3">
                      <input type="text" className="form-control input-color" id="" placeholder="Your Email OTP" />
                    </div>
                    <div className="mb-3">
                      <input type="text" className="form-control input-color" id="" placeholder="Your Phone OTP" />
                    </div>
                    <div className="mb-3">
                      <button type="submit" className="btn btn-card-detail mt-2">Submit</button>
                    </div>
                    <div className="mb-3">
                      <a href="/" className="text-blk float-end">If you have not received the OTP, <span className='text-org'>RESEND</span></a>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  {/* <!-- Swiper --> */}
                  <div className=''>
                    <NavSwiper />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav