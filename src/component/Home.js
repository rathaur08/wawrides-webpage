import React from 'react'
import "./globalIndex.css"

const Home = () => {
	return (
		<div>
			<div className="main-container">
				<div className="sub-container">
					{/* <!-- Section-1 --> */}
					<div className="container-section1">
					</div>
					{/* <!-- Section-2 --> */}
					<div className="container-section2">
						<div className="section2-card d-flex justify-content-center gap-5">
							<div className="row">
								<div className="col-md-4 section2-card-img">
									<div className="card section2-cards">
										<img src="https://static8.depositphotos.com/1269954/450/v/450/depositphotos_8891686-stock-illustration-photo-realistic-sedan-illustration.jpg" className="section2-img"
											alt="section1-card" />
										<div className="">
											<p className="text-center">CAR</p>
										</div>
									</div>
								</div>
								<div className="col-md-4 section2-card-img">
									<div className="card section2-cards">
										<img src="https://st.depositphotos.com/1000165/4372/i/450/depositphotos_43723071-stock-photo-model-of-a-motor-boat.jpg" className="section2-img"
											alt="section1-card" />
										<div className="">
											<p className="text-center">YACHT</p>
										</div>
									</div>
								</div>
								<div className="col-md-4 section2-card-img">
									<div className="card section2-cards">
										<img src="https://static5.depositphotos.com/1007330/510/i/450/depositphotos_5100502-stock-photo-plane-with-path.jpg" className="section2-img"
											alt="section1-card" />
										<div className="">
											<p className="text-center">PLANE</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Section-3 --> */}
					<div className="container-section3 text-center mt-5">
						<h3>Invest in Luxury</h3>
						<p>Where <strong>Water</strong>, <strong>Air</strong>, & <strong>Wheels</strong> meet to create your <strong>Ultimate Adventure</strong>.</p>
						<div className="section3-card d-flex justify-content-center gap-5">
							<div className="row">
								<div className="col-md-4 col-sm-6 section2-card-img">
									<div className="card section3-card-main">
										<img src="https://static8.depositphotos.com/1269954/450/v/450/depositphotos_8891686-stock-illustration-photo-realistic-sedan-illustration.jpg" className="section3-imgs"
											alt="section1-card" />
										<div className="card-body">
											<p className="card-text"><b>CAR</b></p>
											<p className="card-text">Designed for car lovers,
												Digital ID unlocks the full
												potential of your car
												ownership experience.
											</p>
											<a href="/" className="text-org float-end">Explore &gt;&gt;</a>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-sm-6 section2-card-img">
									<div className="card section3-card-main">
										<img src="https://st.depositphotos.com/1000165/4372/i/450/depositphotos_43723071-stock-photo-model-of-a-motor-boat.jpg" className="section3-imgs"
											alt="section1-card" />
										<div className="card-body">
											<p className="card-text"><b>YACHT</b></p>
											<p className="card-text">Designed for car lovers,
												Digital ID unlocks the full
												potential of your car
												ownership experience.
											</p>
											<a href="/" className="text-org float-end">Explore &gt;&gt;</a>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-sm-6 section2-card-img">
									<div className="card section3-card-main">
										<img src="https://static5.depositphotos.com/1007330/510/i/450/depositphotos_5100502-stock-photo-plane-with-path.jpg" className="section3-imgs"
											alt="section1-card" />
										<div className="card-body">
											<p className="card-text"><b>PRIVATE PLANE</b></p>
											<p className="card-text">Designed for car lovers,
												Digital ID unlocks the full
												potential of your car
												ownership experience.
											</p>
											<a href="/" className="text-org float-end">Explore &gt;&gt;</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Section-4 --> */}
					<div className="container-section4 mt-4">
						<div className="p-3">
							<h3 className='mt-4'>Invest in Luxury</h3>
							<p className="m-0">with</p>
							<h2>WOTM ( WAWRide Tokenized Ownership Model )</h2>
							<button className="btn btn-more">Know more &gt;&gt;</button>
						</div>
					</div>
					{/* <!-- Section-5 --> */}
					<div className="container-section5 mt-5">
						<h3 className="text-center">GENERAL BENEFITS OF TOKENIZATION</h3>
						<div className="section5-card d-flex justify-content-center p-5 mt-4">
							<div className="row">
								<div className="col-md-4 col-sm-6">
									<div className="card section5-cards m-3">
										<img src="./Image/benefits/factorization.png" className="section3-img"
											alt="section1-card" />
										<div className="card-body">
											<h6 className="card-titles">Fractionalization</h6>
											<p className="card-text font-blck-12"> Tokenization lowers the barriers to entry for
												investment by enabling interests in the asset
												to be more readily divided across a wider pool
												of investors, democratizing access to the
												asset. Fractional ownership is securely
												managed by a digital register of members
												(ROM) on blockchain</p>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-sm-6">
									<div className="card section5-cards m-3">
										<img src="./Image/benefits/operationalefficiency.png" className="section3-img"
											alt="section1-card" />
										<div className="card-body">
											<h6 className="card-titles">Operational Efficiency </h6>
											<p className="card-text font-blck-12"> Tokenization lowers the barriers to entry for
												investment by enabling interests in the asset
												to be more readily divided across a wider pool
												of investors, democratizing access to the
												asset. Fractional ownership is securely
												managed by a digital register of members
												(ROM) on blockchain</p>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-sm-6">
									<div className="card section5-cards m-3">
										<img src="./Image/benefits/settlementtime.png" className="section3-img"
											alt="section1-card" />
										<div className="card-body">
											<h6 className="card-titles">Reduced Settlement Time</h6>
											<p className="card-text font-blck-12"> Tokenization lowers the barriers to entry for
												investment by enabling interests in the asset
												to be more readily divided across a wider pool
												of investors, democratizing access to the
												asset. Fractional ownership is securely
												managed by a digital register of members
												(ROM) on blockchain</p>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-sm-6">
									<div className="card section5-cards m-3">
										<img src="./Image/benefits/datatransparency.png" className="section3-img"
											alt="section1-card" />
										<div className="card-body">
											<h6 className="card-titles">Data Transparency </h6>
											<p className="card-text font-blck-12"> Tokenization lowers the barriers to entry for
												investment by enabling interests in the asset
												to be more readily divided across a wider pool
												of investors, democratizing access to the
												asset. Fractional ownership is securely
												managed by a digital register of members
												(ROM) on blockchain</p>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-sm-6">
									<div className="card section5-cards m-3">
										<img src="./Image/benefits/flexibility.png" className="section3-img"
											alt="section1-card" />
										<div className="card-body">
											<h6 className="card-titles">Flexibility</h6>
											<p className="card-text font-blck-12"> Tokenization lowers the barriers to entry for
												investment by enabling interests in the asset
												to be more readily divided across a wider pool
												of investors, democratizing access to the
												asset. Fractional ownership is securely
												managed by a digital register of members
												(ROM) on blockchain</p>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-sm-6">
									<div className="card section5-cards m-3">
										<img src="./Image/benefits/liquidity.png" className="section3-img"
											alt="section1-card" />
										<div className="card-body">
											<h6 className="card-titles">Liquidity</h6>
											<p className="card-text font-blck-12"> Tokenization lowers the barriers to entry for
												investment by enabling interests in the asset
												to be more readily divided across a wider pool
												of investors, democratizing access to the
												asset. Fractional ownership is securely
												managed by a digital register of members
												(ROM) on blockchain</p>
										</div>
									</div>
								</div>
							</div>

						</div>

					</div>
					{/* <!-- Section-6 --> */}
					<div className="container-section6">
						<h2 className="text-center pt-4">Numbers speaks for itself</h2>
						<div className="section6-card mt-5">
							<div className="row m-0">
								<div className="col-md-4 text-center">
									<div className="card card-section6">
										<h1>100+</h1>
										<div className="">
											<h4 className="">Assests listed</h4>
										</div>
									</div>
								</div>
								<div className="col-md-4 text-center">
									<div className="card card-section6">
										<h1>1000+</h1>
										<div className="">
											<h4 className="">Tokens</h4>
										</div>
									</div>
								</div>
								<div className="col-md-4 text-center">
									<div className="card card-section6">
										<h1>$15 bn</h1>
										<div className="">
											<h5 className="">Asset Tokenization
												Industry size
											</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Section-7 --> */}
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
					{/* <!-- Section-8 --> */}
					<div className="container-section8 mt-5">
						<h4 className="text-center">WAWRides got featured in</h4>
						<div className="row p-4 m-0">
							<div className="col-md-3 text-center mt-4">
								<img src="./Image/formula_yacht.png" className="section8-img" alt="section1-card" />
							</div>
							<div className="col-md-3 text-center mt-4">
								<img src="./Image/Dassault_Aviation_logo.png" className="section8-img" alt="section1-card"
								/>
							</div>
							<div className="col-md-3 text-center  mt-4">
								<img src="./Image/formula_yacht.png" className="section8-img" alt="section1-card"
								/>
							</div>
							<div className="col-md-3  text-center mt-4">
								<img src="./Image/Dassault_Aviation_logo.png" className="section8-img" alt="section1-card"
								/>
							</div>
							<div className="col-md-3 text-center mt-4">
								<img src="./Image/formula_yacht.png" className="section8-img" alt="section1-card"
								/>
							</div>
							<div className="col-md-3 text-center mt-4">
								<img src="./Image/Dassault_Aviation_logo.png" className="section8-img" alt="section1-card"
								/>
							</div>
							<div className="col-md-3 text-center mt-4">
								<img src="./Image/formula_yacht.png" className="section8-img" alt="section1-card"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>


		</div>
	)
}

export default Home