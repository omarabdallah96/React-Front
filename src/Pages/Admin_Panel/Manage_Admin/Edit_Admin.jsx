import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../../api';
import IN from '../../../Components/Input';

export default function Edit_Admin(props) {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const getAdmin = async id => {
        await API.get(`admin/${id}`)
            .then(res => {
                const result = res.data;
                setFname(result.fname);
                setLname(result.lname);
                setUsername(result.username);
                setPassword(result.password);
            });
    }

    const handleSave = async () => {
        const id = props.match.params.id;

        let reqBody = {
            fname: fname,
            lname: lname,
            username: username,
            password: password,
            phone: phone,
            email:email
        };

        await API.put(`admin/${id}`, (reqBody));
        await props.history.push(`/admin/`);
    }

    useEffect(() => {
        getAdmin(props.match.params.id);
    }, []);

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
            <Link
                name="save"
                onClick={handleSave}
            > Save </Link>

            <Link
                name="cancel"
                onClick={() => props.history.push(`/admin/`)}
            >Cancel</Link>
        </div>
    );
}