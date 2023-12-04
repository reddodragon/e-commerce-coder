import Spinner from "../components/spinner/spinner"


const Loading = () => {
    return (

        <div className="mb-auto flex flex-col items-center justify-center">
            <h1 className="title mb-5 leading-none text-[#ede0d0] text-[9rem]">
                Pure <span className="text-[#f1720c]">Audio</span>
            </h1>
            <div className="bg-[#ede0d0] h-4/5 w-5/6 flex justify-center items-center rounded-3xl">
                <Spinner className="py-20" />
            </div>
        </div>
    )
}

export default Loading