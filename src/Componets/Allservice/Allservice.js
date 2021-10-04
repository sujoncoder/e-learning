import React from 'react';
import './Allservice.css';

const Allservice = (props) => {
    const {img,name,duration,rating,price} = props.service;
    return (
    <div className="service-container">
        <div className="service">
            <img src={img} alt="" />
            <h6>{name}</h6>
            <p>Duration: {duration}</p>
            <p>Rating: {rating}</p>
            <p>Price: {price}</p>
            <button>Purches</button>
        </div>
    </div>
        
            
       
    );
};

export default Allservice;