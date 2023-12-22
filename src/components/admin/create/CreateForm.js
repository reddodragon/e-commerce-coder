

"use client"

import { useState } from "react"
import { doc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "../../../firebase/config"

const createProduct = async (values, file) => {
    const storageRef = ref(storage, values.id.toString())
    const fileSnapshot = await uploadBytes(storageRef, file)

    const fileURL = await getDownloadURL(fileSnapshot.ref)

    const docRef = doc(db, "Productos", values.id.toString())
    return setDoc(docRef, {
        ...values,
        img: fileURL
    }).then(() => console.log("Producto creado exitosamente"))
}

const CreateForm = () => {
    const [values, setValues] = useState({
        id: Date.now(),
        brand: '',
        category: '',
        description: '',
        home: false,
        name: '',
        price: 0,
        reviews: 50,
        stars: 5,
        stock: 0,
    });
    const [file, setFile] = useState(null);

    const categorys = [
        { label: "Speakers" },
        { label: "Headphones" },
        { label: "Amplifiers" },
        { label: "Microphones" },
    ];


    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValue = (name === 'price' || name === 'stock') ? Number(value) : value;

        setValues({
            ...values,
            [name]: newValue
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct(values, file)
    }

    return (

        <form onSubmit={handleSubmit} className="flex flex-col items-center ">
            <h1 className="text-3xl font-bold mb-4">Create Product</h1>

            <div className=" w-full flex justify-around">
                <div>
                    <div className="mb-4 w-full">
                        <label className="block mb-2">Imagen:</label>
                        <input
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            className="bg-[#ede0d0] p-2 w-full rounded"
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block mb-2">Descripción:</label>
                        <textarea
                            value={values.description}
                            name="description"
                            onChange={handleChange}
                            className="resize-none shadow-inner bg-[#ede0d0] caret-[#f1720c] p-2 w-full rounded h-24"
                            required
                        />
                    </div>
                </div>
                <div>
                    <div className="flex gap-2">
                        <div className="mb-4 w-full">
                        <label className="block mb-2">Nombre:</label>
                            <input
                                placeholder="Nombre"
                                type="text"
                                value={values.name}
                                name="name"
                                onChange={handleChange}
                                className="bg-[#ede0d0] shadow-inner caret-[#f1720c] p-2 w-full rounded"
                                required
                            />
                        </div>

                        <div className="mb-4 w-full">
                        <label className="block mb-2">Precio:</label>
                            <input
                                placeholder="Precio"
                                type="number"
                                value={values.price}
                                name="price"
                                onChange={handleChange}
                                className="bg-[#ede0d0] shadow-inner caret-[#f1720c] p-2 w-full rounded"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex gap-2">

                        <div className="mb-4 w-full">
                            <label className="block mb-2">Stock:</label>
                            <input
                                type="number"
                                value={values.stock}
                                name="stock"
                                onChange={handleChange}
                                className="bg-[#ede0d0] shadow-inner caret-[#f1720c] p-2 w-full rounded"
                                required
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block mb-2">Marca:</label>
                            <input
                                type="text"
                                value={values.brand}
                                name="brand"
                                onChange={handleChange}
                                className="bg-[#ede0d0] shadow-inner caret-[#f1720c] p-2 w-full rounded"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4 w-full">
                        <label className="block mb-2">Categoría:</label>
                        <select
                            value={values.category}
                            name="category"
                            onChange={handleChange}
                            className="bg-[#ede0d0] shadow-inner caret-[#f1720c] p-2 w-full rounded"
                        >
                            {categorys.map(category => (
                                <option key={category.label} value={category.label}>{category.label}</option>
                            ))}
                        </select>
                    </div>



                </div>

            </div>







            <button type="submit" className="p-2 rounded-full w-full bg-[#f1720c]">Enviar</button>
        </form>

    );
};

export default CreateForm;