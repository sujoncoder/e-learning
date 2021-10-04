import React from 'react';
import './Teacher.css';

const Theacher = (props) => {
   const {name,designation,Profesion,religion,age,country,education,distrct} = props.teacher;
    return (
        <div className="teacher-container">
            <div className="photo">
            <img src={props.teacher.img} alt="" />
            </div>
            <div className="detail">
            <h3>Name: {name}</h3>
            <h5>Designation: {designation}</h5>
            <h5>Profesion: {Profesion}</h5>
            <h6>Religion: {religion}</h6>
            <h6>Age: {age}</h6>
            <h6>Country: {country}</h6>
            <h6>Education: {education}</h6>
            <h6>District: {distrct}</h6>
            <div>
            </div>

            </div>
        </div>
    );
};

export default Theacher;