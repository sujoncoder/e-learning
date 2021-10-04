import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';


import './Home.css';

const Home = () => {
   const [courses, setCourses] = useState([])

   useEffect(()=>{
       fetch('./course.json')
       .then(res => res.json())
       .then(data => setCourses(data))
   },[])

//    {
//     courses.map(course => console.log(courses))
//    }

    return (
        <div>
            <div className="title">
            <p>Best Online Course.</p>
            <h1>Let,s Brows Catagory.</h1>

            {
                courses.map(course => <Course
                            course={course}
                            ></Course>)
            }

            </div>
        </div>
    );
};

export default Home;