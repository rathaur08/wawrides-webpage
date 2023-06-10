import React from 'react'
import "./globalIndex.css"

const WawrideCardPage = () => {
  return (
    <>
      <div className="ownership-program-card-container">
        <div className="ownership-program-card-main">
          <div className="ownership-program-card">
            <div className="ownershipcard-section1">
              <div className="">
                <h2>Join the Elite with our </h2>
                <h1>Fractional Ownership Program.</h1>
              </div>
            </div>
            <div className="ownershipcard-section2 mt-5">
              <div className="">
                <div className="row">
                  <div className="col-md-4 p-0">
                    <div className="input-group mb-3">
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Location</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 p-0">
                    <div className="input-group mb-3">
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Brand</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 p-0">
                    <div className="input-group mb-3">
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Fuel Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <span className="input-group-text" id="basic-addon2">SEARCH</span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex">
                      <p>18 of 150 options show</p>
                      <p>Grid Icon * 2 </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Cards --> */}
              <div className="">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <img src="https://cdn-icons-png.flaticon.com/128/1048/1048315.png" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Porsche 718 Cayman GT4</h5>
                        <div className="d-flex justify-content-between">
                          <p>Class:</p>
                          <p>Premium</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Air Condition</p>
                          <p>Yes</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Body Style:</p>
                          <p>Sedan</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Transmission:</p>
                          <p>Automatic</p>
                        </div>
                        <p>₹ 1.50 lakhs</p>
                        <div className="d-flex justify-content-between">
                          <p>1 ticket price</p>
                          <a href="*" className="">Go somewhere</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- 2card --> */}
                  <div className="col-md-4">
                    <div className="card">
                      <img src="https://cdn-icons-png.flaticon.com/128/1048/1048315.png" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Porsche 718 Cayman GT4</h5>
                        <div className="d-flex justify-content-between">
                          <p>Class:</p>
                          <p>Premium</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Air Condition</p>
                          <p>Yes</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Body Style:</p>
                          <p>Sedan</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Transmission:</p>
                          <p>Automatic</p>
                        </div>
                        <p>₹ 1.50 lakhs</p>
                        <div className="d-flex justify-content-between">
                          <p>1 ticket price</p>
                          <a href="*" className="">Go somewhere</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- 3cards --> */}
                  <div className="col-md-4">
                    <div className="card">
                      <img src="https://cdn-icons-png.flaticon.com/128/1048/1048315.png" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Porsche 718 Cayman GT4</h5>
                        <div className="d-flex justify-content-between">
                          <p>Class:</p>
                          <p>Premium</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Air Condition</p>
                          <p>Yes</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Body Style:</p>
                          <p>Sedan</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Transmission:</p>
                          <p>Automatic</p>
                        </div>
                        <p>₹ 1.50 lakhs</p>
                        <div className="d-flex justify-content-between">
                          <p>1 ticket price</p>
                          <a href="*" className="">Go somewhere</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6>
                    {/* << 1>> */}
                  </h6>
                  <p>The WAWrides platform is a blockchain-based system that enables users to invest in and partially own
                    high-end assets such as cars, yachts, and private jets. The platform utilizes
                    blockchain technology to tokenize ownership shares, allowing users to buy, sell, and trade these shares
                    on a secure and transparent platform. In addition to ownership, users can also use
                    the platform to rent these assets, making luxury travel and transportation more accessible to a wider
                    audience</p>

                  <p>Quick answers to the questions you may have. Checkout our FAQs for any related information, by clicking
                    here</p>

                  {/* <!--  --> */}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default WawrideCardPage