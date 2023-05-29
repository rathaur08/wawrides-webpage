import React from 'react'
import "./globalIndex.css"

const WawrideCardPage = () => {
  return (
    <>
      <div class="ownership-program-card-container">
        <div class="ownership-program-card-main">
          <div class="ownership-program-card">
            <div class="ownershipcard-section1">
              <div class="">
                <h2>Join the Elite with our </h2>
                <h1>Fractional Ownership Program.</h1>
              </div>
            </div>
            <div class="ownershipcard-section2 mt-5">
              <div class="">
                <div class="row">
                  <div class="col-md-4 p-0">
                    <div class="input-group mb-3">
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Location</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4 p-0">
                    <div class="input-group mb-3">
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Brand</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4 p-0">
                    <div class="input-group mb-3">
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Fuel Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <span class="input-group-text" id="basic-addon2">SEARCH</span>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="d-flex">
                      <p>18 of 150 options show</p>
                      <p>Grid Icon * 2 </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Cards --> */}
              <div class="">
                <div class="row">
                  <div class="col-md-4">
                    <div class="card">
                      <img src="https://cdn-icons-png.flaticon.com/128/1048/1048315.png" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Porsche 718 Cayman GT4</h5>
                        <div class="d-flex justify-content-between">
                          <p>Class:</p>
                          <p>Premium</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p>Air Condition</p>
                          <p>Yes</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p>Body Style:</p>
                          <p>Sedan</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p>Transmission:</p>
                          <p>Automatic</p>
                        </div>
                        <p>₹ 1.50 lakhs</p>
                        <div class="d-flex justify-content-between">
                          <p>1 ticket price</p>
                          <a href="#" class="">Go somewhere</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- 2card --> */}
                  <div class="col-md-4">
                    <div class="card">
                      <img src="https://cdn-icons-png.flaticon.com/128/1048/1048315.png" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Porsche 718 Cayman GT4</h5>
                        <div class="d-flex justify-content-between">
                          <p>Class:</p>
                          <p>Premium</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p>Air Condition</p>
                          <p>Yes</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p>Body Style:</p>
                          <p>Sedan</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p>Transmission:</p>
                          <p>Automatic</p>
                        </div>
                        <p>₹ 1.50 lakhs</p>
                        <div class="d-flex justify-content-between">
                          <p>1 ticket price</p>
                          <a href="#" class="">Go somewhere</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- 3cards --> */}
                  <div class="col-md-4">
                    <div class="card">
                      <img src="https://cdn-icons-png.flaticon.com/128/1048/1048315.png" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Porsche 718 Cayman GT4</h5>
                        <div class="d-flex justify-content-between">
                          <p>Class:</p>
                          <p>Premium</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p>Air Condition</p>
                          <p>Yes</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p>Body Style:</p>
                          <p>Sedan</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p>Transmission:</p>
                          <p>Automatic</p>
                        </div>
                        <p>₹ 1.50 lakhs</p>
                        <div class="d-flex justify-content-between">
                          <p>1 ticket price</p>
                          <a href="#" class="">Go somewhere</a>
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