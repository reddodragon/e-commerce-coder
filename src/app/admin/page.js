
import { collection, getDocs, query } from "firebase/firestore";
import ProductTable from "../../components/admin/ProductTable";
import { db } from "../../firebase/config";
import Link from 'next/link'

const getProducts = async () => {
    const productsRef = collection(db, 'Productos');
    const q = query(productsRef);
  
    const querySnapshot = await getDocs(q);
    const items = querySnapshot.docs.map(docSnapshot => docSnapshot.data());
  
    // Ordenar localmente por el campo 'id'
    return items.sort((a, b) => a.id - b.id);
  };

const  Admin = async () => {
    const data = await getProducts();
    return (
        <div className="bg-[#ede0d0] scroll text-[#171515] rounded-3xl flex flex-col mt-4 mx-3 h-4/5 overflow-x-auto">
            <Link href={'/admin/create'} className="bg-blue-500 text-white text-center py-2 mb-4">
                Crear
            </Link>
            <ProductTable data={data} />
        </div>
    );
};

export default Admin;
