import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetServices = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // fetch('http://localhost:5000/getservice')
        // fetch('http://localhost:5000/getservices')
        fetch('http://localhost:5000/getservicesbyquery')
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, []);

    const handleNavigate = id => {
        navigate(`/service/${id}`);
    };

    const handleDelete = id => {
        fetch(`http://localhost:5000/delete?id=${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert(data.message);
                const restServices = services.filter(service => service._id !== data.service._id);
                setServices(restServices);

            })
    };

    return (
        <div>
            <h2>services: {services.length}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
                {
                    services.map(service => <div
                        style={{ border: '2px solid red', background: 'lightgreen', padding: '20px', margin: '20px', borderRadius: '20px' }}
                        key={service._id}
                    >
                        <h2>{service.name}</h2>
                        <h3>{service.email}</h3>
                        <h5>{service.phone}</h5>
                        <button onClick={() => handleNavigate(service._id)}>Manage</button>
                        <button onClick={() => handleDelete(service._id)}>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default GetServices;