import React from 'react';

const AddService = () => {
    const handleOnSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const serviceName = e.target.serviceName.value;
        const description = e.target.description.value;
        const phone = e.target.phone.value;

        fetch('http://localhost:5000/service', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name, email, serviceName, description, phone })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.message) {
                    alert(data.message);
                }
                if (data.error) {
                    alert(data.error);
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="name" id="" placeholder='name' />
                <input type="text" name="email" id="" placeholder='email' />
                <input type="text" name="serviceName" id="" placeholder='service name' />
                <input type="text" name="description" id="" placeholder='description' />
                <input type="text" name="phone" id="" placeholder='phone' />
                <input type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddService;