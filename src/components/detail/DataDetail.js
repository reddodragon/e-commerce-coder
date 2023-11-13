import QuantityDetail from "../detail/quantityDetail";
import Rating from "../Rating";

const DataDetail = ({ item }) => {
    const { description, stars, reviews, category } = item;
    return (
        <div className="flex flex-col justify-around items-center mt-5">
            <p className="text-lg font-light text-[#171515] mb-4">
                {description}
            </p>
            <QuantityDetail item={item} />

            <button className="bg-[#f1720c] px-4 py-2 rounded-3xl">
                Add to Cart
            </button>

            <div>
                <Rating stars={stars} reviews={reviews} />
                <p className="text-sm  font-light text-[#171515] mb-4">
                    Category: {category}
                </p>
            </div>
        </div>
    );
};

export default DataDetail;
