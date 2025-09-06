import React from 'react';
import './OrdersList.css';

const OrdersList = (props) => {
    const { name, _id, service_id, status } = props.order || {}
    const handleDelete = id => {
        // eslint-disable-next-line no-restricted-globals
        const confirmed = confirm("Deleting cannot be revarted. Are you sure?");
        if (confirmed === true) {
            const url = `https://travel-insider-sajidmahamud835.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    alert("Successfully deleted the order!")
                    console.log(data);
                    window.location.reload(false);
                })
        }
    }

    const handleCancel = id => {
        // eslint-disable-next-line no-restricted-globals
        const confirmed = confirm("Cancelling cannot be revarted. Are you sure?");
        if (confirmed === true) {
            const url = `https://travel-insider-sajidmahamud835.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    status: "Cancelled"
                }
                )
            })
                .then(res => res.json())
                .then(data => {
                    alert("Successfully cancelled the order!")
                    console.log(data);
                    window.location.reload(false);
                })
        }

    }
    return (

        <tr>
            <th className="text-break" scope="row">{_id}</th>
            <td>{name}</td>
            {/* <td>{service_name}</td> */}
            <td className="text-break">{service_id}</td>
            <td>{status}</td>
            <td>
                <button onClick={() => handleCancel(props.order._id)} type="button" class="btn btn-warning text-white"><i class="fas fa-ban"></i></button>
                <button onClick={() => handleDelete(props.order._id)} type="button" class="btn btn-danger mx-1"><i class="far fa-trash-alt"></i></button>
            </td>
        </tr>

    );
};

export default OrdersList;