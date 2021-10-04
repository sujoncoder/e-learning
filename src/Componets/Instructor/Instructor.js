import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Theacher from '../Teacher/Theacher';

const Instructor = () => {
    const [teachers,setTeachers] = useState ([]);

    useEffect(()=>{
        fetch('./teacher.json')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])

    return (
        <div>
            {
                teachers.map(teacher => <Theacher 
                    teacher={teacher}
                    ></Theacher>)
            }
        </div>
    );
};

export default Instructor;