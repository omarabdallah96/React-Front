import React, { useState } from 'react';
import API from '../../../api';

import IN from '../../../Components/Input';
import BT from '../../../Components/Button';

export default function Create_Admin(props) {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSave = async () => {

        let reqBody = {
            fname: fname,
            lname: lname,
            username: username,
            password: password,
            phone: phone,
            email:email
        };

        await API.post(`admin`, (reqBody));
        await props.history.push(`/admin`);
    }

    return (
        <div>
            <IN
                type="text"
                name="fname"
                value={fname}
                onChange={e => setFname(e.target.value)}
                placeholder="First Name"
            />
            <IN
                type="text"
                name="lname"
                value={lname}
                onChange={e => setLname(e.target.value)}
                placeholder="Last Name"
            />
            <IN
                type="text"
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
            />
            <IN
                type="text"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
            />
            <IN
                type="integer"
                name="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="Phone"
            />
            <IN
                type="text"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
            />
            <BT
                description="Add"
                onClick={handleSave}
            />

        </div>
    );
}