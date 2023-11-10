import mockData from '../../mock/mockData';
import Image from 'next/image';


const Admin = () => {
  return (
    <div className="bg-[#ede0d0] scroll text-[#171515] rounded-3xl flex flex-col mt-4 mx-3  h-4/5 overflow-x-auto">
      <button className="bg-blue-500 text-white px-4 py-2 mb-4">Crear</button>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Imagen</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Marca</th>
            <th className="px-4 py-2">Descripción</th>
            <th className="px-4 py-2">Precio</th>
            <th className="px-4 py-2">Acciones</th>
            <th className="px-4 py-2">Home</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, index) => (
            <tr key={index} className={`${index < 3 ? 'bg-yellow-200' : ''} border-b-2 border-[#171515]`}>
              <td className=" px-4 py-2 ">
                <div className=" w-32 h-32 flex items-center">
                  <Image
                    width={100}
                    height={100}
                    alt="Hola"
                    src={`/imgs/products/${item.img}.png`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </td>
              <td className=" px-4 py-2">{item.name}</td>
              <td className=" px-4 py-2">{item.brand}</td>
              <td className=" px-4 py-2 ">{item.description}</td>
              <td className=" px-4 py-2">${item.price}</td>
              <td className=" px-4 py-2 ">
                <div className='flex justify-center flex-col gap-3'>
                    <button className="bg-red-500 text-white px-2 py-1 rounded-3xl">Eliminar</button>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-3xl">Editar</button>
                </div>
              </td>
              <td className=" px-4 py-2">{index < 3 ? 'Home' : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
