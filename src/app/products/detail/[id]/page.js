import mockData from "../../../../mock/mockData";
import ErrorPage from "../../../not-found";
import ImageDetail from "../../../../components/detail/ImageDetail";
import DataDetail from "../../../../components/detail/DataDetail";

const ProductDetail = ({ params }) => {
    const { id } = params;

    const item = mockData.find((item) => item.id === parseInt(id));

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
