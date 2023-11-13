import HomeSelect from "../components/home/HomeSelect";

export default function Home() {
    return (
        <div className="mb-auto flex flex-col items-center justify-center">
            <h1 className="title mb-5 leading-none text-[#ede0d0] text-[9rem]">
                Pure <span className="text-[#f1720c]">Audio</span>
            </h1>

            <HomeSelect />
        </div>
    );
}
