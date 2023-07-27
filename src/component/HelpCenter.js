import React from 'react';
import "./globalIndex.css";

const HelpCenter = () => {
	return (
		<>
			<div className="help-centre-container mt-2">
				<div className="help-centre-subcontainer">
					<div className="help-centre-maincontainer">
						<div className="help-centre-card p-5">
							<h2 className="text-center text-org">Help Centre</h2>
							<p className="text-center">How can we help you today ?</p>
							<div className="d-flex justify-content-center gap-5">
								<div className="row help-centre-cards-row p-2">
									<div className="col-md-4">
										<div className="card help-centre-cards">
											<img src="./Image/call.png" className="help-centre-cards-img"
												alt="section1-card" />
											<div className="">
												<p className="text-center">Call us</p>
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="card help-centre-cards">
											<img src="./Image/mail.png" className="help-centre-cards-img"
												alt="section1-card" />
											<div className="">
												<p className="text-center">Get Support</p>
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="card help-centre-cards">
											<img src="./Image/blog.png" className="help-centre-cards-img"
												alt="section1-card" />
											<div className="">
												<p className="text-center">Reed the blogs</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<h2>Frequently asked questions</h2>
							<p>Quick answers to the questions you may have. Can't find what you are looking for ? <a href="*" className='text-org'><b>Contact
								us</b></a></p>
							<div className="row p-2">
								<div className="col-md-4">
									<div className="d-flex flex-column bd-highlight mb-3">
										<div className="p-2 bd-highlight text-center border m-2">
											<h6> Understanding WAWRides</h6>
										</div>
										<div className="p-2 bd-highlight text-center border m-2">
											<h6> Pricing</h6>
										</div>
										<div className="p-2 bd-highlight text-center border m-2">
											<h6> Asset Delivery</h6>
										</div>
										<div className="p-2 bd-highlight text-center border m-2">
											<h6> Refer & Earn</h6>
										</div>
										<div className="p-2 bd-highlight text-center border m-2">
											<h6> Asset Usage Policy</h6>
										</div>
										<div className="p-2 bd-highlight text-center border m-2">
											<h6> Selling/Exiting the Contract</h6>
										</div>
										<div className="p-2 bd-highlight text-center border m-2">
											<h6> Community</h6>
										</div>
										<div className="p-2 bd-highlight text-center border m-2">
											<h6> Challan/Accident/Theft</h6>
										</div>
									</div>
								</div>
								<div className="col-md-8">
									<div className="accordion mt-2" id="accordionPanelsStayOpenExample">
										<div className="accordion-item">
											<h2 className="accordion-header" id="panelsStayOpen-headingOne">
												<button className="accordion-button" type="button" data-bs-toggle="collapse"
													data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
													aria-controls="panelsStayOpen-collapseOne">
													Question 1: Sample text For questions
												</button>
											</h2>
											<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
												aria-labelledby="panelsStayOpen-headingOne">
												<div className="accordion-body">
													Sample answer for your questions. Sample answer for your questions. Sample answer for your
													questions. Sample answer for your questions. Sample answer for your questions. Sample answer for
													your questions. Sample answer for your questions. Sample answer for your questions. Sample answer
													for your questions. Sample answer for your questions. Sample answer for your questions. Sample
													answer for your questions. Sample answer for your questions. Sample answer for your questions.
												</div>
											</div>
										</div>
										<div className="accordion-item">
											<h2 className="accordion-header" id="panelsStayOpen-headingTwo">
												<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
													data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
													aria-controls="panelsStayOpen-collapseTwo">
													Question 2: Sample text For questions
												</button>
											</h2>
											<div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
												aria-labelledby="panelsStayOpen-headingTwo">
												<div className="accordion-body">
													<strong>This is the second item's accordion body.</strong> It is hidden by default, until the
													collapse plugin adds the appropriate classes that we use to style each element. These classes
													control the overall appearance, as well as the showing and hiding via CSS transitions. You can
													modify any of this with custom CSS or overriding our default variables. It's also worth noting
													that just about any HTML can go within the <code>.accordion-body</code>, though the transition
													does limit overflow.
												</div>
											</div>
										</div>
										<div className="accordion-item">
											<h2 className="accordion-header" id="panelsStayOpen-headingThree">
												<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
													data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
													aria-controls="panelsStayOpen-collapseThree">
													Question 3: Sample text For questions
												</button>
											</h2>
											<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
												aria-labelledby="panelsStayOpen-headingThree">
												<div className="accordion-body">
													<strong>This is the third item's accordion body.</strong> It is hidden by default, until the
													collapse plugin adds the appropriate classes that we use to style each element. These classes
													control the overall appearance, as well as the showing and hiding via CSS transitions. You can
													modify any of this with custom CSS or overriding our default variables. It's also worth noting
													that just about any HTML can go within the <code>.accordion-body</code>, though the transition
													does limit overflow.
												</div>
											</div>
										</div>
										<div className="accordion-item">
											<h2 className="accordion-header" id="panelsStayOpen-heading4">
												<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
													data-bs-target="#panelsStayOpen-collapse4" aria-expanded="false"
													aria-controls="panelsStayOpen-collapse4">
													Question 4: Sample text For questions
												</button>
											</h2>
											<div id="panelsStayOpen-collapse4" className="accordion-collapse collapse"
												aria-labelledby="panelsStayOpen-heading4">
												<div className="accordion-body">
													<strong>This is the third item's accordion body.</strong> It is hidden by default, until the
													collapse plugin adds the appropriate classes that we use to style each element. These classes
													control the overall appearance, as well as the showing and hiding via CSS transitions. You can
													modify any of this with custom CSS or overriding our default variables. It's also worth noting
													that just about any HTML can go within the <code>.accordion-body</code>, though the transition
													does limit overflow.
												</div>
											</div>
										</div>
										<div className="accordion-item">
											<h2 className="accordion-header" id="panelsStayOpen-heading5">
												<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
													data-bs-target="#panelsStayOpen-collapse5" aria-expanded="false"
													aria-controls="panelsStayOpen-collapse5">
													Question 5: Sample text For questions
												</button>
											</h2>
											<div id="panelsStayOpen-collapse5" className="accordion-collapse collapse"
												aria-labelledby="panelsStayOpen-heading5">
												<div className="accordion-body">
													<strong>This is the third item's accordion body.</strong> It is hidden by default, until the
													collapse plugin adds the appropriate classes that we use to style each element. These classes
													control the overall appearance, as well as the showing and hiding via CSS transitions. You can
													modify any of this with custom CSS or overriding our default variables. It's also worth noting
													that just about any HTML can go within the <code>.accordion-body</code>, though the transition
													does limit overflow.
												</div>
											</div>
										</div>
										<div className="accordion-item">
											<h2 className="accordion-header" id="panelsStayOpen-heading6">
												<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
													data-bs-target="#panelsStayOpen-collapse6" aria-expanded="false"
													aria-controls="panelsStayOpen-collapse6">
													Question 6: Sample text For questions
												</button>
											</h2>
											<div id="panelsStayOpen-collapse6" className="accordion-collapse collapse"
												aria-labelledby="panelsStayOpen-heading6">
												<div className="accordion-body">
													<strong>This is the third item's accordion body.</strong> It is hidden by default, until the
													collapse plugin adds the appropriate classes that we use to style each element. These classes
													control the overall appearance, as well as the showing and hiding via CSS transitions. You can
													modify any of this with custom CSS or overriding our default variables. It's also worth noting
													that just about any HTML can go within the <code>.accordion-body</code>, though the transition
													does limit overflow.
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<h6>
									Can't find what you are looking for ? Fill in the following form, our customer care representative will
									get in touch with
									you within next 2 working days.
								</h6>
								<h5><a href="*" className='text-blk'><b>Contact us</b></a></h5>
								<h6>
									We are happy to answer any question you have or provide you with an estimate. Just send a message in the
									form below
									with any questions you have.
								</h6>
							</div>
							<div className="row">
								<div className="col-md-6">
									<form className='mt-5'>
										<div className="mb-3">
											<input type="email" className="form-control input-color" placeholder='Your Full Name ( required )' />
										</div>
										<div className="mb-3">
											<input type="password" className="form-control input-color" placeholder='Your Email Address ( required )' />
										</div>
										<div className="mb-3">
											<input type="email" className="form-control input-color" placeholder="Subject" />
										</div>
										<div className="mb-3">
											<textarea className="form-control input-color" rows="4" placeholder='Your Message'></textarea>
										</div>
										<button type="submit" className="btn btn-primary btn-org">Submit</button>
									</form>
								</div>
								<div className="col-md-6 text-center mt-5">
									<div className=" border-b-org">
										<h5><b>Email</b></h5>
										<p>info@wawrides.com</p>
										<hr className='hr-line-org' />
									</div>
									<div className=" border-b-org">
										<h5><b>Phone</b></h5>
										<p>+91-9999999999</p>
										<hr className='hr-line-org' />
									</div>
									<div className=" border-b-org">
										<h5><b>On the web</b></h5>
										<p>
											<i className="fa-brands fa-linkedin-in icocs"></i>
											<i className="fa-brands fa-facebook icocs"></i>
											<i className="fa-brands fa-twitter icocs"></i>
											<i className="fa-brands fa-instagram icocs"></i>
										</p>
										<hr className='hr-line-org' />
									</div>
								</div>
							</div>
							<div className="container-section7">
								<div className="row m-0">
									<div className="col-md-4">
										<div className="p-5">
											<h2>UPGRADE YOUR LIFESTYLE!</h2>
											<p>By only paying 8.33% to buy
												your DREAM CAR, YACHT,
												PRIVATE PLANE now.
											</p>
										</div>
									</div>
									<div className="col-md-8">
										<img src="https://cdn.pixabay.com/photo/2017/09/04/00/08/youtube-2712573_640.png" alt="card-img-top" className="section7-card" />
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

export default HelpCenter