import mockData  from "../mock/mockData";
import ProductCard from "./ProductCard";

const ProductsList = ({ category }) => {
    const items =
        category === "all"
            ? mockData
            : mockData.filter((item) => item.category === category);

    return (
        <section className=" scroll flex-1 p-4 pb-24 h-screen mt-1 overflow-y-auto">
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default ProductsList;
