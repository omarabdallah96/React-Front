import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../../api';

export default function Info_Student(props) {

    const id = props.match.params.id;

    const [state, updateState] = useState({
        fname: "",
        lname: "",
        fathername: "",
        mothername: "",
        // gender: "",
        dateofbirth: "",
        email: "",
        pnumber: "",
        address: "",
        // image: "",
        // HealthProblems: "",
        // bloodType: "",
        section_name: "",
        // classroom_name: ""
    });

    const setState = (nextState) => {
        updateState(prevState => ({
            ...prevState,
            ...nextState
        }));
    }

    const fetchdata = async id => {

        await API.get(`stu-sec-class/${id}`)
            .then(res => {
                const result = res.data.data;
                setState(result);
            });
    }

    const deleteStudent = async id => {
        await API.delete(`student/${id}`);
        await props.history.push(`/student/list`);
    }

    useEffect(() => {
        fetchdata(props.match.params.id);
    }, []);

    return (
        <div>
            <p>{id}</p>
            {/* <img src={`http://localhost/codi/LMS/lms_laravel/storage/app/public/images/${state.image}`} alt="" /> */}
            <p>First Name : {state.fname}</p>
            <p>Father Name : {state.fathername}</p>
            <p>Last Name : {state.lname}</p>
            <p>Mother Name : {state.mothername}</p>
            {/* <p>Gender : {state.gender}</p> */}
            <p>Date of Birth : {state.dateofbirth}</p>
            <p>Email : {state.email}</p>
            <p>Phone Number : {state.pnumber}</p>
            <p>Address : {state.address}</p>
            {/* <p>Health : {state.HealthProblems}</p>
            <p>Blood Type : {state.bloodType}</p>
            <p>Grade : {state.classroom_name}</p> */}
            <p>Section : {state.section_name}</p>
            <p><Link onClick={() => props.history.push(`/student/edit/${id}`)}> Edit </Link></p>
            <p><Link onClick={() => deleteStudent(id)}>Delete</Link></p>
        </div>
    );
}