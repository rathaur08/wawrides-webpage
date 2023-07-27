import React from 'react'
import "./globalIndex.css"

const WelcomeWawride = () => {
  return (
    <>
      <div className="welcomewawride-container">
        <div className="welcomewawride-main">
          <div className="welcomewawride">
            <div className="welcomewawride-section1">
              <img src="./Image/about_banner.jpg" className="about-banner-img" alt="section1-card" />
              <div className=" text-on-image text-center">
                <div className="d-flex justify-content-center">
                  <h2>WELCOME </h2>
                  <h1 className='font-45 text-white'>WAWRides</h1>
                </div>
                <div className='d-flex justify-content-center'>
                  <p className=" w-75">Looking for a luxury Car, Yacht, or Private plane for an upcoming vacation or business trip? In WAWRides,
                    we make investing and co-owning seamless so you can get right on your way.</p>
                </div>

              </div>
            </div>
            <div className="welcomewawride-section2">
              <div className="p-2">
                <div className="row m-0">
                  <div className="col-md-4 mt-5">
                    <h5 className='m-0'>The Brand </h5>
                    <h1>WAWRides</h1>
                  </div>
                  <div className="col-md-8 mt-5">
                    <p>"WAWrides - where water, air, and wheels meet to create your ultimate adventure.”</p>
                    <p>The WAWrides platform is a blockchain-based system that enables users to invest in and partially own
                      high-end
                      assets such as cars, yachts, and private jets. The platform utilizes blockchain technology to tokenize
                      ownership
                      shares, allowing users to buy, sell, and trade these shares on a secure and transparent platform. In
                      addition to
                      ownership, users can also use the platform to rent these assets, making luxury travel and
                      transportation more
                      accessible to a wider audience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="welcomewawride-section3">
              <div className="p-2">
                <div className="row m-0">
                  <div className="col-md-6 mt-5">
                    <h5 className='m-0'>Our</h5>
                    <h1>MISSION</h1>
                    <div className=''>
                      <p>The WAWrides platform is a blockchain-based system that enables users to invest in and partially own
                        high-end
                        assets such as cars, yachts, and private jets. The platform utilizes blockchain technology to tokenize
                        ownership
                        shares, allowing users to buy, sell, and trade these shares on a secure and transparent platform. In
                        addition to
                        ownership, users can also use the platform to rent these assets, making luxury travel and
                        transportation more
                        accessible to a wider audience.</p>
                      <p><b> Mr. Rajeev Chhabra, CEO @WAWRides </b></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className='ourmission-img'>
                      <img className='ourmission-imgs' src='https://static6.depositphotos.com/1006839/644/i/450/depositphotos_6449253-stock-photo-black-car.jpg' alt="" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="welcomewawride-section4">
              <div className=" p-2 mt-5">
                <h5 className='m-0'>Offered</h5>
                <h1>BRANDS</h1>
                <div className="text-center">
                  <img className='brands-logo' src="./Image/Mercedes-Logo.png" alt="" />
                  <img className='brands-logo' src="./Image/audi-logo.png" alt="" />
                  <img className='brands-logo' src="./Image/Jaguar_logo.png" alt="" />
                  <img className='brands-logo' src="./Image/yamaha_boat.png" alt="" />
                  <img className='brands-logo' src="./Image/formula_yacht.png" alt="" />
                  <img className='brands-logo' src="./Image/Gulfstream_Aerospace_logo.svg.png" alt="" />
                  <img className='brands-logo' src="./Image/Bombardier-Learjet.png" alt="" />
                </div>
              </div>
            </div>
            <div className="welcomewawride-section5 p-2">
              <div className="mt-5">
                <h5 className='m-0'>Team</h5>
                <h1>INCREDIBLE</h1>
              </div>
              <div className='text-center'>
                <img className='team-img' src='https://st.depositphotos.com/1010751/3812/v/450/depositphotos_38123119-stock-illustration-vector-logo-teamwork-embrace-5.jpg' alt="" />
              </div>

            </div>
            <div className="welcomewawride-section6">
              <div className="p-2">
                <div className="row m-0">
                  <div className="col-md-4">
                    <div className="mt-5">
                      <h5 className='m-0'>How to</h5>
                      <h1>CONTACT</h1>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="mt-5">

                      <p><i class="fa-solid fa-location-dot"></i> 100, XYZ Street, ABC Area, Banglore, Karnataka-110011</p>
                      <p className='text-org'><img className='contct-icon' src='./Image/mail.png' alt="" /> reachus@wawrides.com</p>
                      <p className='text-org'><img className='contct-icon' src='./Image/call.png' alt="" /> +91-999999999</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default WelcomeWawride