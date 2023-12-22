'use client'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useRouter  } from 'next/navigation';
import useCommerce from '../../hooks/useCommerce';

const Checkout = () => {
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [cardDetails, setCardDetails] = useState({ cardNumber: '', expiry: '', cvv: '' });
    const router = useRouter()
    const {emptyCart} = useCommerce()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, address, name, cardDetails });

        toast.success("Pago realizado con éxito!", {
            autoClose: 3000, 
            onClose: () => {
                emptyCart();
                setTimeout(() => {
                    router.push('/');
                }, 4000);
            }
        });
    };

    return (
        <div className="container bg-[#ede0d0] rounded-2xl mt-10 mx-auto p-4 w-4/5">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Checkout</h2>
                <form onSubmit={handleSubmit} className="w-full my-5 max-w-lg">
                <div className="mb-4">
                    <label htmlFor="email" className="block rounded mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 w-full rounded-xl"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="address" className="block mb-2">Dirección:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="border p-2 w-full  rounded-xl"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 w-full rounded-xl"
                        required
                    />
                </div>

                    <div className="flex justify-between">
                        <div className="mb-4 w-1/2 mr-2">
                            <label htmlFor="expiry" className="block mb-2">Fecha de Expiración (MM/AA):</label>
                            <input
                                type="month"
                                id="expiry"
                                value={cardDetails.expiry}
                                onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                                className="border p-2 w-full rounded-xl"
                                required
                            />
                        </div>

                        <div className="mb-4 w-1/2 ml-2">
                            <label htmlFor="cvv" className="block mb-2">CVV:</label>
                            <input
                                type="text"
                                id="cvv"
                                value={cardDetails.cvv}
                                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                                className="border p-2 w-full rounded-xl"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="bg-blue-500 w-full text-white p-3 rounded-xl">Pagar</button>
                </form>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Checkout;