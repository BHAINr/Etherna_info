import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

function GetUserDetails() {
    const dispatch = useDispatch();
    const GetProfile = () => {
        fetch('/api/v1/detail', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); // handle success response
                
            })
            .catch(error => console.error(error));
            
    }
    
    return (
        <Fragment>
            hi
        </Fragment>
    );
}

export default GetUserDetails;
