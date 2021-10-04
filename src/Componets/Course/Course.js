import React from 'react';
import './Course.css';

const Course = (props) => {
    const {img,tittle,duration,price} = props.course;
    return (
        <div className="course-container">
            <div className="course">
            <img className="fluid" src={img} alt="" />
            <h4>{tittle}</h4>
            <h5>Duration: {duration}</h5>
            <h5>Price: {price}</h5>
            </div>
        </div>
    );
};

export default Course;