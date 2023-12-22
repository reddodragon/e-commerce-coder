'use client'
import { useRouter } from "next/navigation";

const ErrorPage = ({ errorMessage = "Page not found" }) => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-5/6 w-5/6 rounded-3xl mx-auto mt-1 bg-[#ede0d0]">
            <h1 className="title mb-5 leading-none text-[#1e1305] text-[9rem]">
                Error 404
            </h1>
            <p className="text-[#f1720c] text-2xl">{errorMessage}</p>
            <button onClick={() => router.back()} className="relative top-3 uppercase font-semibold p-3 px-5 bg-[#f1720c] rounded-3xl">
                Go Back
            </button>
        </div>
    );
};

export default ErrorPage;