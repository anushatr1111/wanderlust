import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import OrdersList from '../OrdersList/OrdersList';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    const [myOrders, setMyOrders] = useState([])
    useEffect(() =>
        fetch('https://travel-insider-sajidmahamud835.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data.orders))
        , [])

    useEffect(() => {
        const filtered = orders.filter(order => order.email = user.email)
        setMyOrders(filtered);
    }
        , [orders, user.email])
    return (
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <table class="table table-bordered text-break">
                            <thead>
                                <tr>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Customer Name</th>
                                    {/* <th scope="col">Location</th> */}
                                    <th scope="col">Service Id</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    myOrders.map((order => <OrdersList key={order._id} order={order}>

                                    </OrdersList>))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;