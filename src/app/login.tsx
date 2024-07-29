"use client";

import { useState } from "react";
type logType = {
    authenticate: (auth: boolean) => void
    User: (auth: userDataType) => void

}
export default function Login({ authenticate, User }: logType) {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const user: userDataType[] = [
        {
            email: "arslan@gmail.com",
            password: "123",
            name: "Arslan",
            fathername: "Muhammad Iqbal",
            hobbie: "coding",
        },
        {
            email: "Muhammad@gmail.com",
            password: "456",
            name: "Muhammad",
            fathername: "ali",
            hobbie: "coding",
        },
    ];

    const buttonHandler = () => {
        const [UserFound] = user.filter(
            (user) => email === user.email && password === user.password

        );
        if (UserFound) {
            authenticate(true);
            User(UserFound)
        }
    };

    return (
        <div style={{ height: '400px', display: 'flex', flexDirection: 'column',backgroundColor:'#bacce6' }}>
            <p style={{    border: '1px solid black',width:'20%'}}>try Email: <br />
                arslan@gmail.com<br />
                password:<br />
                123
            </p>

            <label htmlFor="">
                Email:
                <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                /></label>
            <br />
            <label htmlFor="">
                password:

                <input
                    type="number"
                    value={password}
                    onChange={(e) => {
                        setpassword(e.target.value)
                    }}
                />   </label>
            <br />
            <button style={{ width: '5%' }} onClick={buttonHandler}>Login</button>
        </div>
    )

}