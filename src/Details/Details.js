import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Details.css';
const Details = () => {

  const { id } = useParams()
  const [details, setDetails] = useState([])
  const [specificDetail, setSpecificDetail] = useState({})

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('https://travel-insider-sajidmahamud835.herokuapp.com/orders', data)
      .then(res => {
        alert('Successfully submited!');
      })
  }


  useEffect(() =>
    fetch("https://travel-insider-sajidmahamud835.herokuapp.com/services")
      .then(res => res.json())
      .then(data => setDetails(data.services))
    , [])


  useEffect(() => {
    if (details.length > 0) {
      const matchedData = details.find(detail => detail._id === id)
      setSpecificDetail(matchedData);
    }

  }

    , [details, id])

  // function confirmInput() {
  //   alert("Thank you for your order!");
  // }

  const { user } = useAuth()
  const location = specificDetail?.name
  return (

    <div >
      <section>
        <div>
          <div className="row">
            <div className="col-sm-12">
              <h2 className="text-center text-primary mt-5">Book Now</h2>
              <div className="row">
                <div className="col-8 col-sm-offset-2">
                  <p><strong>Service ID:</strong> {id}</p>
                  <p><strong>Name:</strong> {location}</p>
                  <p><strong>Price:</strong> ${specificDetail?.price}</p>
                  <p><strong>Details:</strong> {specificDetail?.description}</p>
                  <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-3">
                      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Full Name" value={user?.displayName || ''} type="text" className="form-control form-custom" id="name" />
                    </div>

                    <div className="mb-3">
                      <textarea {...register("requirements")} placeholder="Requirements" type="text" className="form-control form-custom" id="requirements" />
                    </div>

                    <div className="mb-3">
                      <input type="date" {...register("date")} placeholder="Date" className="form-control form-custom" id="" />
                    </div>

                    <div className="mb-3">
                      <input {...register("phone")} placeholder="Contact Number" type="text" className="form-control form-custom" id="exampleInputPassword1" />
                    </div>
                    {
                      // <div className="mb-3">
                      //   <input {...register("service_name")} placeholder="Location" value={location} type="text" className="form-control form-custom" id="location" />
                      // </div>
                    }
                    <div className="mb-3 d-none">
                      <input {...register("service_id")} value={id} type="text" className="form-control form-custom" id="service_id" />
                    </div>

                    <div className="mb-3">
                      <input {...register("email")} value={user?.email || ''} type="text" className="form-control form-custom" id="email" />
                    </div>

                    <div className="mb-3 d-none">
                      <input {...register("status")} value="Pending" type="text" className="form-control form-custom" id="status" />
                    </div>

                    <button type="submit" className="btn btn-success custom-btn">Submit</button>

                  </form>
                </div>
                <div className="col-sm-4 col-sm-offset-2">
                  <img src={specificDetail?.image} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>




  );
};

export default Details;