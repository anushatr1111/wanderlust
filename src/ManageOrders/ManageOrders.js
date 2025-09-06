import React, { useEffect, useState } from 'react';
import OrdersList from '../OrdersList/OrdersList';
import './ManageOrders.css';

const ManageOrders = () => {

  const [Orders, setOrders] = useState([])

  useEffect(() =>
    fetch('https://travel-insider-sajidmahamud835.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setOrders(data.orders))
    , [])
  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Customer Name</th>
                {/* <th scope="col">Location</th> */}
                <th className=".d-md-none .d-lg-block" scope="col">Service Id</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>

              {
                Orders.map((order => <OrdersList key={order._id} order={order}>

                </OrdersList>))
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;