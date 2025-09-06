import React, { useEffect, useState } from 'react';
import ServiceContent from '../ServiceContent/ServiceContent';
const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() =>
        fetch('https://travel-insider-sajidmahamud835.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.services))
        , [])

    const fiteredData = [];
    services.map(service => fiteredData.push(service));
    let filteredService = fiteredData.filter(service => service._id !== "6195ffe27a4f53f3360c7354");
    filteredService = filteredService.filter(service => service._id !== "618a0fc7960e95fdab1cab65");

    return (
        <div className="container">
            <div className="row g-5">
                {
                    filteredService.map((service => <ServiceContent key={service._id} service={service}>

                    </ServiceContent>))
                }
            </div>
        </div>
    );
};

export default Services;