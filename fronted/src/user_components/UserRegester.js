import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import "./UserRegester.css";

function UserRegester() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''

    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = () => {
        fetch('/api/v1/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); 
            })
            .catch(error => console.error(error));
           
    }

    return (
        <Fragment>
            <div className='container'>
                <div className="fome1 row">
                    <div className=" fome col-md">
                        <div className="box">
                            <h1>Regester</h1>
                            <form className="loginfome">
                                <div className="loginName">
                                    <input type="text" name="name" value={formData.name} placeholder="Name" onChange={handleInputChange} />
                                </div>

                                <div className="loginEmail">
                                    <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleInputChange} />
                                </div>

                                <div className="loginPassword">
                                    <input type="password" name="password" value={formData.password} placeholder="Password" onChange={handleInputChange} />

                                </div>

                                <Link to="/Login"><button type="button" onClick={handleFormSubmit}>Submit</button></Link>
                                
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default UserRegester;
