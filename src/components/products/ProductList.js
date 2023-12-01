import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import ProductCard from './ProductCard';
import { db } from '../../firebase/config';

const getProducts = async (category) => {
  const productsRef = collection(db, 'Productos');
  const q = category === 'all'
    ? query(productsRef)
    : query(productsRef, where('category', '==', category));

  const querySnapshot = await getDocs(q);
  const items = querySnapshot.docs.map(docSnapshot => docSnapshot.data());

  // Ordenar localmente por el campo 'id'
  return items.sort((a, b) => a.id - b.id);
};

const ProductsList = async ({ category }) => {
  const items = await getProducts(category);

  return (
    <section className="scroll flex-1 p-4 pb-24 h-screen mt-1 overflow-y-auto">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;