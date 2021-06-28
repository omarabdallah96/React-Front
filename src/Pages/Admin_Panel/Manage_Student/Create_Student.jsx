import React, { useState, useEffect } from 'react';
import Sections from '../../../Components/Sections_Class';


export default function Create_Student(props) {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [mname, setMname] = useState("");
    const [mothername, setMothername] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [pnumber, setPnumber] = useState("");
    const [image, setImage] = useState("");
    const [section_id, setSection_id] = useState("");
    
    const handleSave = async () => {

        let reqBody = {
            fname: fname,
            lname: lname,
            middlename: mname,
            mothername: mothername,
            birthdate: dateofbirth,
            email: email,
            gender: address,
            pnumber: pnumber,
            photo: image,
            section_id: section_id,

        };

        await fetch("http://127.0.0.1:8000/api/student", {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        await props.history.push(`/student/list`);
    }

    return (
        <div>
            <input
                type="text"
                name="fname"
                value={fname}
                onChange={e => setFname(e.target.value)}
                placeholder="First Name"
            /> <br/>
            <input
                type="text"
                name="lname"
                value={lname}
                onChange={e => setLname(e.target.value)}
                placeholder="Last Name"
            /><br/>
            <input
                type="text"
                name="mname"
                value={mname}
                onChange={e => setMname(e.target.value)}
                placeholder="Middle Name"
            /><br/>
            <input
                type="text"
                name="mothername"
                value={mothername}
                onChange={e => setMothername(e.target.value)}
                placeholder="Mother name"
            /><br/>
            <input
                type="date"
                name="dateofbirth"
                value={dateofbirth}
                onChange={e => setDateofbirth(e.target.value)}
                placeholder="Date Of Birth"
            /><br/>
            <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
            /><br/>
            <input
                type="text"
                name="address"
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="Address"
            /><br/>
            <input
                type="text"
                name="pnumber"
                value={pnumber}
                onChange={e => setPnumber(e.target.value)}
                placeholder="Personal Number"
            /><br/>
            <input
                type="text"
                name="image"
                value={image}
                onChange={e => setImage(e.target.value)}
                placeholder="Image"
            /><br/>
          <Sections
            onChange={e=>setSection_id(e.target.value)}
            />

            <button name="save" onClick={handleSave} >Add</button>
        </div>
    );
}