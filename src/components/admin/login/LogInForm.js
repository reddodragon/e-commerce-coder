'use client'

import { useState } from "react";
import { useAuthContext } from "../../../context/authContext";

const SignInForm = () => {
    const {loginUser } = useAuthContext()
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">LogIn</h1>
            <span className="text-sm mb-6">Use your email and password</span>
            <div className="mb-4 w-full">
                <input
                    type='email'
                    value={values.email}
                    placeholder='Email'
                    name="email"
                    className="bg-[#ede0d0] caret-[#f1720c] p-2 w-full rounded"
                    required
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4 w-full">
                <input
                    type='password'
                    value={values.password}
                    placeholder='Password'
                    name="password"
                    className="bg-[#ede0d0] caret-[#f1720c] p-2 w-full rounded"
                    required
                    onChange={handleChange}
                />
            </div>
            <button

                className="p-2 rounded-full w-full bg-[#f1720c]"
                onClick={() => loginUser(values)}
            >
                LogIn
            </button>

        </form>
    );
};

export default SignInForm;
