import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateService = () => {
    const [service, setService] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/servicebyinstance/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setService(data.service)
            })
    }, [id]);

    const handleUpdate = () => {
        fetch(`http://localhost:5000/updateservicebystatic/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: parseInt(service.phone) - 1 })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setService(data.service);
            })
    }

    return (
        <div>
            <h2>{service?.name}</h2>
            <h3>{service?.phone}</h3>
            <button onClick={handleUpdate}>update</button>
        </div>
    );
};

export default UpdateService;