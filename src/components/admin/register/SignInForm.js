'use client'
import { useState } from "react";
import { useAuthContext } from "../../../context/authContext";
import { useRouter } from 'next/navigation'
import { toast, ToastContainer } from 'react-toastify'; // Importa toast y ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Asegúrate de que los estilos estén importados


const RegisterForm = () => {
    const { createUser } = useAuthContext();
    const [values, setValues] = useState({ email: '', password: '' });
    const router = useRouter()

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUser(values);
            toast.success("Usuario creado correctamente", {
                autoClose: 3000, 
                onClose: () => {
                    setTimeout(() => {
                        router.push('/admin');
                    }, 4000);
                }
            });
        } catch (error) {
            toast.error("Error al crear el usuario"); 
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Register</h1>
            <span className="text-sm mb-6">Create your account</span>
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
            <button className="p-2 rounded-full w-full bg-[#f1720c]">Register</button>
            <ToastContainer />
        </form>
    );
};

export default RegisterForm;