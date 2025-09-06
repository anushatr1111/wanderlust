import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './PrivateOne.css';

const PrivateOne = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('https://travel-insider-sajidmahamud835.herokuapp.com/services', data)
      .then(res => {
        console.log(res);
      })
  }
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-md-3 form">
          <div className="form-bg">
            <div className="headline">
              <h3>Add a Location</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="mb-3">
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Place Name" type="text" className="form-control form-custom" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

              <div className="mb-3">
                <textarea {...register("description")} placeholder="Description" type="text" className="form-control form-custom" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

              <div className="mb-3">
                <input type="number" {...register("price")} placeholder="Price" type="number" className="form-control form-custom" id="exampleInputPassword1" />
              </div>

              <div className="mb-3">
                <input type="number" {...register("image")} placeholder="Image URL" type="url" className="form-control form-custom" id="exampleInputPassword1" />
              </div>

              <button type="submit" className="btn btn-success custom-btn">Submit</button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrivateOne;