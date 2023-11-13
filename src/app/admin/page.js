import mockData from "../../mock/mockData";
import ProductTable from "../../components/admin/ProductTable";

const Admin = () => {
    return (
        <div className="bg-[#ede0d0] scroll text-[#171515] rounded-3xl flex flex-col mt-4 mx-3 h-4/5 overflow-x-auto">
            <button className="bg-blue-500 text-white px-4 py-2 mb-4">
                Crear
            </button>
            <ProductTable data={mockData} />
        </div>
    );
};

export default Admin;
