import React from 'react'
import "./globalIndex.css"

const WawrideDetail = () => {
  return (
    <>
      <div className="wawride-detail-container">
        <div className="wawride-detail-main">
          <div className="wawride-detail mt-3">
            <div className='row m-0'>
              <div className='col-md-8'>
                <div className='wawride-detail-nav'>
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
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
                      <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Bank Details</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Reports</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                      <div className=''>
                        <div>
                          <h4>My Assets</h4>
                          <h4>6 Month Change</h4>
                        </div>
                        {/* Card Sections */}
                        <div className='d-flex'>
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                              <a href="*" className="card-link">Card link</a>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                              <a href="*" className="card-link">Card link</a>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                              <a href="*" className="card-link">Card link</a>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                              <a href="*" className="card-link">Card link</a>
                            </div>
                          </div>
                        </div>
                        <div className=''>
                          <h2>INR 25,00,000 TOTAL DIVIDEND PAID</h2>
                        </div>
                        {/* Table One */}
                        <div className='table-one'>
                          <p>My Payout</p>
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Asset Name</th>
                                <th scope="col">DIVIDEND PAID</th>
                                <th scope="col">PAYMENT MODE</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td >Larry the Bird</td>
                                <td >Bird</td>
                                <td>@twitter</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* Table Second */}
                        <div className='table-one'>
                          <p>My Trading</p>
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Asset Name</th>
                                <th scope="col">Invested Value</th>
                                <th scope="col">Current Value</th>
                                <th scope="col">% Change</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                      {/*----------------------------------------- Account Details Sections ---------------------------------*/}
                      <div className=''>
                        <ol className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Subheading</div>
                            </div>
                            <span className="fw-bold">Cras justo odio</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Subheading</div>
                            </div>
                            <span className="fw-bold">Cras justo odio</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Subheading</div>
                            </div>
                            <span className="fw-bold">Cras justo odio</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Subheading</div>
                            </div>
                            <span className="fw-bold">Cras justo odio</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Subheading</div>
                            </div>
                            <span className="fw-bold">Cras justo odio</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Subheading</div>
                            </div>
                            <span className="fw-bold">Cras justo odio</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Subheading</div>
                            </div>
                            <span className="fw-bold">Cras justo odio</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Subheading</div>
                            </div>
                            <span className="fw-bold">Cras justo odio</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Subheading</div>
                            </div>
                            <span className="fw-bold">Cras justo odio</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Subheading</div>
                            </div>
                            <span className="fw-bold">Cras justo odio</span>
                          </li>
                        </ol>
                      </div>
                      <div className=''>
                        <p>Nominee Details</p>
                        <ol className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Subheading</div>
                            </div>
                            <span className="fw-bold">Cras justo odio</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Subheading</div>
                            </div>
                            <span className="fw-bold">Cras justo odio</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Subheading</div>
                            </div>
                            <span className="fw-bold">Cras justo odio</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Subheading</div>
                            </div>
                            <span className="fw-bold">Cras justo odio</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="">
                              <div className="">KYC Details</div>
                            </div>
                            <span className="">KYC Verification Successfully Done</span>
                          </li>
                        </ol>
                        <form className="row g-3">
                          <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                          </div>
                          <div className="col-12"></div>
                          <div className="col-md-6">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                          </div>
                          <div className="col-md-6">
                            <label for="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                          </div>
                          <div className="col-md-6">
                            <label for="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label for="inputCity" className="form-label">Date</label>
                            <input type="text" className="form-control" id="inputCity" />
                          </div>
                          <div className="col-12">
                          </div>
                          <div className="col-6">
                            <button type="submit" className="btn btn-primary">CANCEL</button>
                            <button type="submit" className="btn btn-primary float-end">Submit</button>
                          </div>
                        </form>



                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                  </div>

                </div>
              </div>
              <div className='col-md-4'>
                <div className='profile-section-container'>
                  <div className='profile-section border'>
                    <div className='section-head'></div>
                    <div className='section-contain p-4'>
                      <div className="card profile-section-card">
                        <div className="card-body">
                          <p className="card-title">Total Assets Value</p>
                          <h6 className="card-subtitle mb-2 text-muted">1,80,45,413</h6>
                          <p className="card-link">6.7%</p>
                        </div>
                      </div>

                      <div className='d-flex justify-content-between'>
                        <h5>Activities</h5>
                        <p>View all</p>
                      </div>
                      <div className='activit-section'>
                        <div className='d-flex justify-content-between'>
                          <h5>Porsche GT 200</h5>
                          <h6>+INR 1909290</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p>Date : 10/06/2023</p>
                          <p>+2 Tokens</p>
                        </div>
                      </div>
                      <div className='activit-section'>
                        <div className='d-flex justify-content-between'>
                          <h5>Porsche GT 200</h5>
                          <h6>+INR 1909290</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p>Date : 10/06/2023</p>
                          <p>+2 Tokens</p>
                        </div>
                      </div>
                      <div className='activit-section'>
                        <div className='d-flex justify-content-between'>
                          <h5>Porsche GT 200</h5>
                          <h6>+INR 1909290</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p>Date : 10/06/2023</p>
                          <p>+2 Tokens</p>
                        </div>
                      </div>
                      <div className='activit-section'>
                        <div className='d-flex justify-content-between'>
                          <h5>Porsche GT 200</h5>
                          <h6>+INR 1909290</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p>Date : 10/06/2023</p>
                          <p>+2 Tokens</p>
                        </div>
                      </div>
                      <div className='activit-section'>
                        <div className='d-flex justify-content-between'>
                          <h5>Porsche GT 200</h5>
                          <h6>+INR 1909290</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p>Date : 10/06/2023</p>
                          <p>+2 Tokens</p>
                        </div>
                      </div>
                      <div className='activit-section'>
                        <div className='d-flex justify-content-between'>
                          <h5>Porsche GT 200</h5>
                          <h6>+INR 1909290</h6>
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