import React from 'react';
import "./globalIndex.css";

const WawrideDetail = () => {
  return (
    <>
      <div className="wawride-detail-container">
        <div className="wawride-detail-main">
          <div className="wawride-detail mt-3">
            <div className='row m-0'>
              <div className='col-md-8'>
                <div className='wawride-detail-nav'>
                  <ul className="nav nav-pills nav-tabslinks mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Dashboard</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Account Details</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"> All Orders</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-bankdetails-tab" data-bs-toggle="pill" data-bs-target="#pills-bankdetails" type="button" role="tab" aria-controls="pills-bankdetails" aria-selected="false">Bank Details</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-reports-tab" data-bs-toggle="pill" data-bs-target="#pills-reports" type="button" role="tab" aria-controls="pills-reports" aria-selected="false">Reports</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                      <div className=''>
                        <div className='d-flex justify-content-between'>
                          <h6>My Assets</h6>
                          <p className='box-container'>6 Month Change <span className='text-org'>▼</span></p>
                        </div>
                        {/* Card Sections */}
                        <div className='d-flex justify-content-between'>
                          <div className="card card-w">
                            <div className="card-body">
                              <div className="d-flex justify-content-between">
                                <p> C </p>
                                <p> <i class="fa-solid fa-arrow-trend-up"></i> 2.1 %</p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <h4> 1 </h4>
                                <p> INR </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <p>Token</p>
                                <p>80,30,220</p>
                              </div>
                            </div>
                          </div>
                          <div className="card card-w">
                            <div className="card-body">
                              <div className="d-flex justify-content-between">
                                <p> C </p>
                                <p><i class="fa-solid fa-arrow-trend-up"></i>  2.1 %</p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <h4> 1 </h4>
                                <p> INR </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <p>Token</p>
                                <p>80,30,220</p>
                              </div>
                            </div>
                          </div>
                          <div className="card card-w">
                            <div className="card-body">
                              <div className="d-flex justify-content-between">
                                <p> C </p>
                                <p><i class="fa-solid fa-arrow-trend-up"></i>  2.1 %</p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <h4> 1 </h4>
                                <p> INR </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <p>Token</p>
                                <p>80,30,220</p>
                              </div>
                            </div>
                          </div>
                          <div className="card card-w">
                            <div className="card-body">
                              <div className="d-flex justify-content-between">
                                <p> C </p>
                                <p> <i class="fa-solid fa-arrow-trend-up"></i> 2.1 %</p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <h4> 1 </h4>
                                <p> INR </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <p>Token</p>
                                <p>80,30,220</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='mt-3'>
                          <p className='text-org2'>INR <span className='font-35'>25,00,000</span> TOTAL DIVIDEND PAID</p>
                        </div>
                        {/* Table One */}
                        <div className='table-one'>
                          <h6>My Payout</h6>
                          <table className="table">
                            <thead>
                              <tr className='table-border'>
                                <th scope="col">Date</th>
                                <th scope="col">Asset Name</th>
                                <th scope="col">DIVIDEND PAID</th>
                                <th scope="col">PAYMENT MODE</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>14/02/2023</td>
                                <td>Porsche G 200</td>
                                <td>60,000,00</td>
                                <td>SBI Bank</td>
                              </tr>
                              <tr>
                                <td>14/02/2023</td>
                                <td>Porsche G 200</td>
                                <td>60,000,00</td>
                                <td>PNB Bank</td>
                              </tr>
                              <tr>
                                <td>14/02/2023</td>
                                <td>Porsche G 200</td>
                                <td>60,000,00</td>
                                <td>UPI</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* Table Second */}
                        <div className='table-one'>
                          <h6>My Trading</h6>
                          <table className="table">
                            <thead>
                              <tr className='table-border'>
                                <th scope="col">Date</th>
                                <th scope="col">Asset Name</th>
                                <th scope="col">Invested Value</th>
                                <th scope="col">Current Value</th>
                                <th scope="col">% Change</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>14/02/2023</td>
                                <td>Porsche G 200</td>
                                <td>60,000,00</td>
                                <td>50,000,00</td>
                                <td>3.4%</td>
                              </tr>
                              <tr>
                                <td>14/02/2023</td>
                                <td>Porsche G 200</td>
                                <td>60,000,00</td>
                                <td>50,000,00</td>
                                <td>3.4%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                      {/*----------------------------------------- Account Details Sections ---------------------------------*/}
                      <div className=''>
                        <ol className="list-group list-group-flush w-75">
                          <li className="list-group-item d-flex">
                            <div className="ms-2 me-auto">
                              <p className="">Name ( as on PAN Crad ) </p>
                            </div>
                            <span className="">Date off Birth</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <h6 className="">Vasu Dev</h6>
                            </div>
                            <h6 className="">10-10-2010</h6>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <p className="">Mobile Number <span class="badge bg-primary rounded-pill">✔</span> </p>
                            </div>
                            <span className="">Email <span class="badge bg-primary rounded-pill">✔</span> </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <h6 className="">+91-9999999999</h6>
                            </div>
                            <h6 className="">kaushik.vasudev@gmal.com</h6>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <p className="">PAN Number</p>
                            </div>
                            <span className="">Marital Status</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <h6 className="">BYSP359G</h6>
                            </div>
                            <h6 className="">MARRIED</h6>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <p className="">Gender</p>
                            </div>
                            <span className="">Unique Client Code</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <h6 className="">MALE</h6>
                            </div>
                            <h6 className="">X123545888</h6>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <p className="">Depository Participant</p>
                            </div>
                            <span className="">Depository Name</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <h6 className="">WAWRides Services Pvt ltd</h6>
                            </div>
                            <h6 className="">WAWRide</h6>
                          </li>
                        </ol>
                      </div>
                      <div className=''>
                        <p>Nominee Details</p>
                        <ol className="list-group list-group-flush w-75">
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <h6 className="">Name:</h6>
                            </div>
                            <h6 className="">VasuDev Kaushik</h6>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <h6 className="">Relation;</h6>
                            </div>
                            <h6 className="">Brother</h6>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <h6 className="">Date of Birth:</h6>
                            </div>
                            <h6 className="">08-07-1999</h6>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <h6 className="">Proof Number:</h6>
                            </div>
                            <h6 className="">XXXXXXXXXX8932</h6>
                            {/* <p className="">Upload Proof</p> */}
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <p className="">KYC Details </p>
                            </div>
                            <h6 className="text-grn">KYC Verification Successfully Done</h6>
                          </li>
                        </ol>
                        <form className="row g-3 m-2">
                          <h6 className="">Document</h6>
                          <div className="col-md-6">
                            <select className="form-select wawridecardpage-select report-input" aria-label="Default select example">
                              <option selected>Location</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div className="col-12"></div>
                          <div className="col-md-6">
                            <label for="inputCity" className="form-label">Upload Document</label>
                            <input type="file" className="form-control wawridecardpage-select report-input" id="" />
                          </div>
                          <div className="col-md-6">
                            <label for="inputState" className="form-label">Personal photo</label>
                            <input type="file" className="form-control wawridecardpage-select report-input" id="" />
                          </div>
                          <div className="col-md-6">
                            <label for="inputCity" className="form-label">First Name(As on Document)</label>
                            <input type="text" className="form-control wawridecardpage-select report-input" id="" />
                          </div>
                          <div className="col-md-6">
                            <label for="inputState" className="form-label">Last Name</label>
                            <input type="text" className="form-control wawridecardpage-select report-input" id="" />
                          </div>
                          <div className="col-md-6">
                            <label for="inputCity" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control wawridecardpage-select report-input" id="" />
                          </div>
                          <div className="col-12">
                          </div>
                          <div className="col-6">
                            <button type="submit" className="btn btn-outline-warning report-input">CANCEL</button>
                            <button type="submit" className="input-group-text btn-search float-end report-input">SUBMIT</button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                      {/*----------------------------------------- All Order Sections ---------------------------------*/}
                      <div className='all-order-section'>
                        <div className='all-order-section-main'>
                          <div className='all-order-container'>
                            <div className='box-filter'>
                              <p className='box-container text-end'>Filter By <span className='text-org'> ▼</span></p>
                            </div>
                            <div className='mt-3'>
                              <div className='d-flex justify-content-between'>
                                <h5>03 May 2023</h5>
                              </div>
                              <div className='activit-section'>
                                <div className='d-flex justify-content-between'>
                                  <p className='mb-1'>12:56 PM</p>
                                  <h6 className='text-grn'>BUY</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                  <h5>Porsche GT 200</h5>
                                  <h6>1 Token</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                  <p>Purchased</p>
                                  <p>Amt: INR 80,99,222</p>
                                </div>
                              </div>
                            </div>
                            <div className='mt-3'>
                              <div className='d-flex justify-content-between'>
                                <h5>03 May 2023</h5>
                              </div>
                              <div className='activit-section'>
                                <div className='d-flex justify-content-between'>
                                  <p className='mb-1'>12:56 PM</p>
                                  <h6 className='text-red'>SELL</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                  <h5>Porsche GT 200</h5>
                                  <h6>1 Token</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                  <p>Purchased</p>
                                  <p>Amt: INR 80,99,222</p>
                                </div>
                              </div>
                            </div>
                            <div className='mt-3'>
                              <div className='d-flex justify-content-between'>
                                <h5>03 May 2023</h5>
                              </div>
                              <div className='activit-section'>
                                <div className='d-flex justify-content-between'>
                                  <p className='mb-1'>12:56 PM</p>
                                  <h6 className='text-grn'>BUY</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                  <h5>Porsche GT 200</h5>
                                  <h6>1 Token</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                  <p>Purchased</p>
                                  <p>Amt: INR 80,99,222</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-bankdetails" role="tabpanel" aria-labelledby="pills-bankdetails-tab">
                      {/*----------------------------------------- Bank Details Sections ---------------------------------*/}
                      <div className='all-order-section'>
                        <div className='all-order-section-main'>
                          <div className='all-order-container'>
                            <div className='box-filter'>
                              <a class="btn btn-org" data-bs-toggle="collapse" href="#accountdetail" role="button" aria-expanded="false" aria-controls="accountdetail">
                                + Add Account </a>
                            </div>
                            <div class="collapse" id="accountdetail">
                              <div class="card card-body m-1">
                                <form className="row g-3">
                                  <h6 className="">Add Your Bank Account Details</h6>
                                  <div className="col-12"></div>
                                  <div className="col-md-6">
                                    <select className="form-select wawridecardpage-select report-input" aria-label="Default select example">
                                      <option selected>Select Your Bank</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                  </div>
                                  <div className="col-md-6">
                                    {/* <label for="inputState" className="form-label">Your Name As per bank Record</label> */}
                                    <input type="text" className="form-control wawridecardpage-select report-input" id="" placeholder='Your Name As per bank Record' />
                                  </div>
                                  <div className="col-md-6">
                                    {/* <label for="inputCity" className="form-label">Account Number</label> */}
                                    <input type="text" className="form-control wawridecardpage-select report-input" id="" placeholder='Account Number' />
                                  </div>
                                  <div className="col-md-6">
                                    {/* <label for="inputState" className="form-label">Reconfirm Account number</label> */}
                                    <input type="text" className="form-control wawridecardpage-select report-input" id="" placeholder='Reconfirm Account number' />
                                  </div>
                                  <div className="col-md-6">
                                    {/* <label for="inputCity" className="form-label"></label> */}
                                    <input type="text" className="form-control wawridecardpage-select report-input" id="" placeholder='IFSC Code' />
                                  </div>
                                  <div className="col-md-6">
                                    {/* <label for="inputCity" className="form-label"></label> */}
                                    <input type="text" className="form-control wawridecardpage-select report-input" id="" placeholder='Remarks' />
                                  </div>
                                  <div className="col-12">
                                  </div>
                                  <div className="col-md-6">
                                    <button type="submit" className="input-group-text btn-search report-input">SUBMIT</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className='mt-3'>
                              <div className='d-flex justify-content-between'>
                                <h5>Punjab National Bank</h5>
                              </div>
                              <div className='activit-section'>
                                <div className='d-flex justify-content-between'>
                                  <p className='mb-1'>Account Number</p>
                                  <h6 className='text-grn'>Primary Account</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                  <h6>XXXXXXXXXX8932</h6>
                                  <h6>Status: Active</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                  <p>IFSC: PUNB000008932</p>
                                </div>
                              </div>
                            </div>
                            <div className='mt-3'>
                              <div className='d-flex justify-content-between'>
                                <h5>Punjab National Bank</h5>
                              </div>
                              <div className='activit-section'>
                                <div className='d-flex justify-content-between'>
                                  <p className='mb-1'>Account Number</p>
                                  <h6 className='text-red'>Make Primary</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                  <h6>XXXXXXXXXX8932</h6>
                                  <h6>Status: Active</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                  <p>IFSC: PUNB000008932</p>
                                </div>
                              </div>
                            </div>
                            <div className='mt-3'>
                              <div className='d-flex justify-content-between'>
                                <h5>Punjab National Bank</h5>
                              </div>
                              <div className='activit-section'>
                                <div className='d-flex justify-content-between'>
                                  <p className='mb-1'>Account Number</p>
                                  <h6 className='text-red'>Make Primary</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                  <h6>XXXXXXXXXX8932</h6>
                                  <h6>Status: Active</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                  <p>IFSC: PUNB000008932</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-reports" role="tabpanel" aria-labelledby="pills-reports-tab">
                      {/*----------------------------------------- Reports  Sections ---------------------------------*/}
                      <div className='all-order-section'>
                        <div className='all-order-section-main'>
                          <div className='all-order-container'>
                            <div className='box-reports'>
                              <div className="row">
                                <div className="col-md-3">
                                  <div className="input-group mb-3">
                                    <select className="form-select wawridecardpage-select report-input" aria-label="Default select example">
                                      <option selected>Location</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="input-group mb-3">
                                    <div class="input-group date" id="datepicker">
                                      <input type="date" class="form-control wawridecardpage-select report-input" id="date" placeholder='Start Date' />
                                      <span class="input-group-append"></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="input-group mb-3">
                                    <div class="input-group date" id="datepicker">
                                      <input type="date" class="form-control wawridecardpage-select report-input" id="date" />
                                      <span class="input-group-append"></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="input-group mb-3 justify-content-center">
                                    <button type='submit' className="input-group-text btn-search report-input"><i class="fa-solid fa-grid"></i> SEARCH</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='mt-3'>
                              <div className='activit-section'>
                                <div className='d-flex justify-content-between'>
                                  <p className='mb-1'>14-05-2023 to 16-09-2023</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                  <h6>Report Name</h6>
                                  <h6 className='text-org'> <i class="fa-solid fa-download"></i> Download</h6>
                                </div>
                              </div>
                            </div>
                            <div className='mt-3'>
                              <div className='activit-section'>
                                <div className='d-flex justify-content-between'>
                                  <p className='mb-1'>14-05-2023 to 16-09-2023</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                  <h6>Report Name</h6>
                                  <h6 className='text-org'> <i class="fa-solid fa-download"></i> Download</h6>
                                </div>
                              </div>
                            </div>
                            <div className='mt-3'>
                              <div className='activit-section'>
                                <div className='d-flex justify-content-between'>
                                  <p className='mb-1'>14-05-2023 to 16-09-2023</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                  <h6>Report Name</h6>
                                  <h6 className='text-org'> <i class="fa-solid fa-download"></i> Download</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='profile-section-container'>
                  <div className='profile-section'>
                    <div className='section-head'>
                      <div className="">
                        <div className="">
                          <div className="upper">
                          </div>
                          <div className="user text-center">
                            <div className="profile">
                              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" className="rounded-circle" alt='' />
                            </div>
                          </div>
                          <div className="mt-5 text-center">
                            <h5 className="mb-0">Vasu Dev Kaushik</h5>
                            <span className="text-muted d-block mb-2">kaushik.vasudev@gmail.com</span>
                          </div>
                          <div className=" mt-5 text-center d-flex justify-content-center">
                            <div className='d-flex'>
                              <h6 className='box-profile-id mr-2'>0X123456785783</h6>
                              <button type="submit" className="btn-copy"><i class="fa-solid fa-copy"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='section-contain p-4'>
                      <div className="card profile-section-card">
                        <div className="card-body">
                          <p className="card-title"><i className="fa-solid fa-indian-rupee-sign"></i> Total Assets Value</p>
                          <h3 className="card-subtitle mb-2">1,80,45,413</h3>
                          <p className="card-link text-center text-grn"><i class="fa-solid fa-arrow-trend-up"></i>6.7%</p>
                        </div>
                      </div>

                      <div className='d-flex justify-content-between'>
                        <h5>Activities</h5>
                        <p>View all</p>
                      </div>
                      <div className='activit-section'>
                        <div className='d-flex justify-content-between'>
                          <h5>Porsche GT 200</h5>
                          <h6 className='text-grn'>+INR 1909290</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p>Date : 10/06/2023</p>
                          <p>+2 Tokens</p>
                        </div>
                      </div>
                      <div className='activit-section'>
                        <div className='d-flex justify-content-between'>
                          <h5>Porsche GT 200</h5>
                          <h6 className='text-red'>+INR 1909290</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p>Date : 10/06/2023</p>
                          <p>+2 Tokens</p>
                        </div>
                      </div>
                      <div className='activit-section'>
                        <div className='d-flex justify-content-between'>
                          <h5>Porsche GT 200</h5>
                          <h6 className='text-grn'>+INR 1909290</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p>Date : 10/06/2023</p>
                          <p>+2 Tokens</p>
                        </div>
                      </div>
                      <div className='activit-section'>
                        <div className='d-flex justify-content-between'>
                          <h5>Porsche GT 200</h5>
                          <h6 className='text-red'>+INR 1909290</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p>Date : 10/06/2023</p>
                          <p>+2 Tokens</p>
                        </div>
                      </div>
                      <div className='activit-section'>
                        <div className='d-flex justify-content-between'>
                          <h5>Porsche GT 200</h5>
                          <h6 className='text-grn'>+INR 1909290</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p>Date : 10/06/2023</p>
                          <p>+2 Tokens</p>
                        </div>
                      </div>
                      <div className='activit-section'>
                        <div className='d-flex justify-content-between'>
                          <h5>Porsche GT 200</h5>
                          <h6 className='text-red'>+INR 1909290</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p>Date : 10/06/2023</p>
                          <p>+2 Tokens</p>
                        </div>
                      </div>

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

export default WawrideDetail