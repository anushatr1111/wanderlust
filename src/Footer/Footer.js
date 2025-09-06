import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div>
			<footer className="pt-4 bg-primary">
				<div className="px-5">
					<div className="row">
						<div className="col-md-3">
							<div><h2>Travel Insider</h2></div>
							<p class="text-footer">A trusted health-care agency where we are providing the medical and health services properly.</p>
						</div>
						<div className="col-md-3">
							<ul>
								<li><b>Services</b></li>
								<li>Appointment</li>
								<li>Available place</li>
								<li>Tickets</li>
								<li>Consulting</li>
								<li>Tour Advice</li>
							</ul>
						</div>
						<div className="col-md-3">
							<ul>
								<li><b>Available Now</b></li>
								<li>Car</li>
								<li>Bus</li>
								<li>Train</li>
								<li>Air</li>
								<li>Ship</li>
							</ul>
						</div>
						<div className="col-md-3">
							<ul>
								<li><b>Availavle Place</b></li>
								<li>Bali</li>
								<li>Sajek</li>
								<li>Ontono</li>
								<li>River Close</li>
								<li>Dsk Lake</li>
							</ul>
						</div>
						<div className="text-center pt-5"><p>Copyright Travel Insider</p></div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;