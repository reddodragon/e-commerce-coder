import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import ErrorPage from '../../../not-found';
import ImageDetail from '../../../../components/detail/ImageDetail';
import DataDetail from '../../../../components/detail/DataDetail';

const getProductById = async (id) => {
  const productsRef = collection(db, 'Productos');
  const q = query(productsRef, where('id', '==', parseInt(id)));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    return querySnapshot.docs[0].data();
  }

  return null;
};

const ProductDetail = async({ params }) => {
  const { id } = params;
  const item = await getProductById(id);

  if (!item) {
    return <ErrorPage errorMessage="Este ítem no existe" />;
  }

  return (
    <div className="flex bg-[#ede0d0] rounded-3xl mx-20 my-8 p-8">
      <ImageDetail item={item} />
      <DataDetail item={item} />
    </div>
  );
};

export default ProductDetail;