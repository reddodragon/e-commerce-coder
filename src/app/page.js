import { Suspense } from "react";
import HomeSelect from "../components/home/HomeSelect";
import Loading from './Loading';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

export async function getServerSideProps() {
  const productsRef = collection(db, 'Productos');
  const q = query(productsRef, where('id', 'in', [1, 2, 3]));
  const querySnapshot = await getDocs(q);

  const limitedDataFromDb = querySnapshot.docs.map(doc => doc.data());
  return {
    props: {
      limitedData: limitedDataFromDb,
    },
  };
}

export default function Home({ limitedData }) {
  return (
    <div className="mb-auto flex flex-col items-center justify-center">
      <h1 className="title mb-5 leading-none text-[#ede0d0] text-[9rem]">
        Pure <span className="text-[#f1720c]">Audio</span>
      </h1>
      <Suspense fallback={<Loading />}>
        <HomeSelect limitedData={limitedData} />
      </Suspense>
    </div>
  );
}