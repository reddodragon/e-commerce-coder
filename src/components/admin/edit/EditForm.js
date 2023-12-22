'use client'
import { db, storage } from "../../../firebase/config"
import { doc, updateDoc, getDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { useEffect, useState } from "react"

const updateProduct = async (id, values, file) => {

    let fileURL = values.img

    if (file) {
        const storageRef = ref(storage, id)
        const fileSnapshot = await uploadBytes(storageRef, file)
        fileURL = await getDownloadURL(fileSnapshot.ref)
    }

    const docRef = doc(db, "Productos", id)
    return updateDoc(docRef, {
        name: values.name,
        brand: values.brand,
        category: values.category,
        description: values.description,
        home: values.home,
        price: Number(values.price),
        stock: Number(values.stock),
        img: fileURL
    })
        .then(() => console.log("Producto actualizado correctamente"))
}

const getProduct = async (id) => {
    console.log(id)
    const docRef = doc(db, 'Productos', id);
    const docSnapshot = await getDoc(docRef);

    return docSnapshot.data();
};

const EditForm = ({ productId }) => {
    console.log(productId)
    const [values, setValues] = useState({
        id: productId,
        brand: '',
        category: '',
        description: '',
        home: false,
        name: '',
        price: 0,
        stock: 0,
        img: ''
    });
    const [file, setFile] = useState(null);

    useEffect(() => {
        const fetchProductData = async () => {
            const item = await getProduct(productId);
            if (item) {
                setValues(item);
            }

        };

        fetchProductData();
    }, [productId]);

    
    const categorys = [
        { label: "Speakers" },
        { label: "Headphones" },
        { label: "Amplifiers" },
        { label: "Microphones" },
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues({
            ...values,
            [name]: type === 'checkbox' ? checked : value

        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProduct(productId, values, file);
    };

    return (
        <div className="container m-auto mt-6">
            <form onSubmit={handleSubmit} className="flex flex-col items-center ">
                <h1 className="text-3xl font-bold mb-4">Edit Product</h1>

                <div className="w-full flex justify-around">
                    <div>
                        <div className="mb-4 w-full">
                            <label className="block mb-2">Imagen:</label>
                            <input
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                className="bg-[#ede0d0] p-2 w-full rounded shadow-inner"
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

                <button type="submit" className="p-2 rounded-full w-full bg-[#f1720c] mt-4">Actualizar</button>
            </form>
        </div>
    );
};

export default EditForm;