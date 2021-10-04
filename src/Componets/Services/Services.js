import React, { useEffect, useState } from 'react';
import Allservice from '../Allservice/Allservice';
import './Services.css';

const Services = () => {
    const [services,setService] = useState ([])

    useEffect(()=>{
        fetch('./Allcourse.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    

    return (
        <div>
            <h1 className="total">Let,s Began An Online Course.</h1>
          {
            services.map(service => <Allservice 
                key={service.id}
                service={service}
                ></Allservice>)  
          }

        </div>
    );
};

export default Services;