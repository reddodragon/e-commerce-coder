import ProductsList from "../../../components/products/ProductList";

export async function generateMetadata({ params }) {
    return {
        title: `Pure Audio - ${params.category}`,
    };
}

const Productos = ({ params }) => {
    const { category } = params;

    return <ProductsList category={category} />;
};

export default Productos;
