

"use client"

import { useState } from "react"
import { doc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "../../../firebase/config"

const createProduct = async (values, file) => {
    const storageRef = ref(storage, values.id.toString())
    const fileSnapshot = await uploadBytes(storageRef, file)

    const fileURL = await getDownloadURL( fileSnapshot.ref )

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
        stock:0,
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
        <div className="m-auto h-4/5 max-w-lg">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                <div className="form-group col-span-2">
                    <label>Imagen: </label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="p-2 rounded w-full border border-blue-100 block my-4"
                    />
                </div>

                <div className="form-group">
                    <label>Nombre: </label>
                    <input
                        type="text"
                        value={values.name}
                        required
                        className="p-2 rounded w-full border border-blue-100 block my-4"
                        name="name"
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Precio: </label>
                    <input
                        type="number"
                        value={values.price}
                        required
                        className="p-2 rounded w-full border border-blue-100 block my-4"
                        name="price"
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Categoría: </label>
                    <select
                        value={values.category}
                        required
                        className="p-2 rounded w-full border border-blue-100 block my-4"
                        name="category"
                        onChange={handleChange}
                    >
                        {categorys.map(category => (
                            <option key={category.label} value={category.label}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Marca: </label>
                    <input
                        type="text"
                        value={values.brand}
                        required
                        className="p-2 rounded w-full border border-blue-100 block my-4"
                        name="brand"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Stock: </label>
                    <input
                        type="number"
                        value={values.stock}
                        required
                        className="p-2 rounded w-full border border-blue-100 block my-4"
                        name="stock"
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Descripción: </label>
                    <textarea
                        value={values.description}
                        className="resize-none w-full p-2 rounded border block border-blue-100 my-4"
                        name="description"
                        onChange={handleChange}
                    />
                </div>


                <button type="submit" className="col-span-2">Enviar</button>
            </form>
        </div>
    );
};

export default CreateForm