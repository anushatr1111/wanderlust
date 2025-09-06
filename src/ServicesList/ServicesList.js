import React from 'react';
import './ServicesList.css';

const ServicesList = (props) => {
    const { name, price, _id } = props.service || {}
    const handleDelete = id => {
        const url = `https://travel-insider-sajidmahamud835.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (

        <tr>
            <th scope="row">{_id}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <button onClick={() => handleDelete(props.service._id)} type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
            </td>
        </tr>

    );
};

export default ServicesList;