const InputField = ({ type, placeholder }) => {
    return (
        <div className="mb-4 w-full">
            <input
                type={type}
                placeholder={placeholder}
                className="bg-[#ede0d0] caret-[#f1720c] p-2 w-full rounded"
            />
        </div>
    );
};

export default InputField;
