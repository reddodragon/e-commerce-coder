const ProductDesc = ({ description }) => {
    return (
        <div className="w-1/3 flex flex-col items-center">
            <p className="px-5">{description}</p>
        </div>
    );
};

export default ProductDesc;
