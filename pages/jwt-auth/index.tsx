import React, { useEffect, useState } from 'react'
// lib
import jwt from "jsonwebtoken";

const index = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("Welcome!");
    const [secret, setSecret] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("before")
        const sendReq = await fetch("/api/jwt-auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: userName,
                password
            })

        });
        const res = await sendReq.json();
        let { token } = res;
        if (token) {
            const json = jwt.decode(token) as { [key: string]: string };
            const res = await fetch("/api/secret", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token
                })
            }).then(res => res.json())
            if (res.secretAdminCode) {
                setSecret(res.secretAdminCode);
            } else {
                setSecret("");
            }
            if (json.admin) {
                setMessage(`Welcome ${json.username}. You are admin!`);
            } else {
                setMessage(`Welcome ${json.username}. You aren't admin!`)
            }
        } else {
            setMessage(`Something went wrong`);
        }
    }

    const fetchCors = async () => {
        let sendReq = await fetch("/api/cors");
        let json = await sendReq.json();
        console.log(json.message);
    }

    useEffect(() => {
        fetchCors();
    }, [])

    return (
        <div>
            <h1>{message}</h1>
            <h3>Secret: {secret}</h3>
            <form onSubmit={onSubmit}>
                <input type="text" name="username" value={userName} onChange={e => setUserName(e.target.value)} />
                <br />
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default index