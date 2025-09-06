import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const ServiceContent = (props) => {
	const { _id, image, name, price, description } = props.service || {}


	const history = useHistory()

	const handleDetails = (key) => {
		const uri = `/details/${_id}`
		history.push(uri)
	}

	return (
		<div className="col-md-4 mb-5">
			<div className="course">
				<img className="img-fluid" src={image} alt="" />
				<h2>{name}</h2>
				<h5>{description.slice(0, 100)}...</h5>
				<button onClick={() => handleDetails(_id)} type="submit" className="btn btn-primary custom-btn">Book Now</button>
				<ul>
					<li><i class="fas fa-money-check-alt"></i>{price}</li>
				</ul>
			</div>
		</div>
	);
};

export default ServiceContent;