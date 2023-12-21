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
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                <label>Nombre: </label>
                <input
                    type="text"
                    value={values.name}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="name"
                    onChange={handleChange}
                />

                <label>Marca: </label>
                <input
                    type="text"
                    value={values.brand}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="brand"
                    onChange={handleChange}
                />

                <label>Categoría: </label>
                <input
                    type="text"
                    value={values.category}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="category"
                    onChange={handleChange}
                />

                <label>Precio: </label>
                <input
                    type="number"
                    value={values.price}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="price"
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    value={values.stock}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="stock"
                    onChange={handleChange}
                />

                <label>Home: </label>
                <input
                    type="checkbox"
                    checked={values.home}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="home"
                    onChange={handleChange}
                />

                <label>Descripción: </label>
                <textarea
                    value={values.description}
                    className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
                    name="description"
                    onChange={handleChange}
                />

                <label>Imagen: </label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />

                <button type="submit">Actualizar</button>
            </form>
        </div>
    );
};

export default EditForm;