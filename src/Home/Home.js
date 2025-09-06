import React, { useEffect, useState } from 'react';
import './Home.css';
import ServiceContent from '../ServiceContent/ServiceContent';


const Home = () => {

	const [services, setServices] = useState([])
	const [pageCount, setPageCOunt] = useState(0);

	useEffect(() =>
		fetch('https://travel-insider-sajidmahamud835.herokuapp.com/services')
			.then(res => res.json())
			.then(data => {
				setServices(data.services);
				const count = data.count;
				const pageNumber = Math.ceil(count / 10);
				setPageCOunt(pageNumber);
			})
		, [])
	const fiteredData = [];
	services.map(service => fiteredData.push(service));
	let filteredService = fiteredData.filter(service => service._id !== "6195ffe27a4f53f3360c7354");
	filteredService = filteredService.filter(service => service._id !== "618a0fc7960e95fdab1cab65");

	return (
		<div>
			<section className="container">
				<div className="row pt-5 px-3">
					<div className="col-md-6 hero-content mt-3">
						<small className="text-white bg-info d-inline p-1 rounded-pill mb-2">Want some time to breath?</small>
						<h1>It's Time To Get <span className="text-primary">A Break</span></h1>
						<p>We already started our booking process for this year trip with sinlge or familly. Choose your place and get your ticket.</p>
						<button type="button" className="btn btn-primary">Get Started</button>
					</div>
					<div className="col-md-6 w-45">
						<img src="https://image.freepik.com/free-vector/traveling-concept-illustration_114360-2447.jpg" className="img-fluid" alt="" />
					</div>
				</div>
			</section>

			<section className="course-section pb-5">
				<div className="container">
					<div className="row">
						<div className="col-md-12 pt-3 pb-5 heading">
							<h1>Choose Your Place</h1>
						</div>

						{
							filteredService.map((service => <ServiceContent key={service._id} service={service}>

							</ServiceContent>))
						}


					</div>
				</div>
			</section>

			<section className="testimonial pb-5">
				<div className="container">
					<div className="row">
						<div className="col-md-12 pt-3 pb-5 heading">
							<h1>Testimonial</h1>
						</div>
					</div>

					<div className="row">
						<div className="col-md-2">
						</div>

						<div className="col-md-8">
							<div className="row">
								<div className="col-md-4">
									<div className="client">
										<img src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1628935727840.jpg" alt="" />
									</div>
								</div>
								<div className="col-md-8">
									<p>Best service and best care. They take care of every client as if they are a family member. Overall it was a great tour. </p>
									<small>- Sajid Mahamud</small>
								</div>
							</div>
						</div>

						<div className="col-md-2">
						</div>

					</div>

				</div>
			</section>
			<section>
				<div className="container">
					<div className="container mb-5">
						<h2>Contact Us</h2>
						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Your Email</label>
							<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="sajid@sajidit.com" />
						</div>
						<div class="mb-3">
							<label for="exampleFormControlTextarea1" class="form-label">Message</label>
							<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
						</div>
						<button type="button" className="btn btn-primary">Submit</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;