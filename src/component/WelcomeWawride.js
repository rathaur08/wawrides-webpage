import React from 'react'
import "./globalIndex.css"

const WelcomeWawride = () => {
  return (
    <>
      <div className="welcomewawride-container">
        <div className="welcomewawride-main">
          <div className="welcomewawride mt-5">
            <div className="welcomewawride-section1">
              <div className="">
                <h2>WELCOME </h2>
                <h1>WAWRides</h1>
                <p>Looking for a luxury Car, Yacht, or Private plane for an upcoming vacation or business trip? In WAWRides,
                  we make
                  investing and co-owning seamless so you can get right on your way.</p>
              </div>
            </div>
            <div className="welcomewawride-section2">
              <div className="">
                <div className="row m-0">
                  <div className="col-md-4">
                    <h5>The Brand </h5>
                    <h1>WAWRides</h1>
                  </div>
                  <div className="col-md-8">
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
              <div className="">
                <div className="row m-0">
                  <div className="col-md-5">
                    <h5>Our</h5>
                    <h1>MISSION</h1>
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
                  <div className="col-md-7">
                    {/* <img 
                      src="data:image/jpeg;base64,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"
                      alt=""/> */}

                  </div>
                </div>
              </div>

            </div>
            <div className="welcomewawride-section4">
              <div className="">
                <h5>Offered</h5>
                <h1>BRANDS</h1>
                <div className="">
                  <img
                    src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/003/480/original/travtalk.jpeg?1603438507"
                    alt="" />
                  <img
                    src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/003/480/original/travtalk.jpeg?1603438507"
                    alt="" />
                  <img
                    src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/003/480/original/travtalk.jpeg?1603438507"
                    alt="" />
                  <img
                    src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/003/480/original/travtalk.jpeg?1603438507"
                    alt="" />
                  <img
                    src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/003/480/original/travtalk.jpeg?1603438507"
                    alt="" />
                  <img
                    src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/003/480/original/travtalk.jpeg?1603438507"
                    alt="" />
                  <img
                    src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/003/480/original/travtalk.jpeg?1603438507"
                    alt="" />
                </div>
              </div>
            </div>
            <div className="welcomewawride-section5">
              <div className="">
                <h5>Team</h5>
                <h1>INCREDIBLE</h1>
              </div>

            </div>
            <div className="welcomewawride-section6">
              <div className="">
                <div className="row m-0">
                  <div className="col-md-4">
                    <div className="">
                      <h5>How to</h5>
                      <h1>CONTACT</h1>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="">
                      <p>100, XYZ Street, ABC Area, Banglore, Karnataka-110011</p>
                      <p>reachus@wawrides.com</p>
                      <p>+91-999999999</p>
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