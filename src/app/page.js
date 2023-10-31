import Image from "next/image";

async function getData() {
    const res = await fetch(
        "https://654124def0b8287df1fde8cd.mockapi.io/productos"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Home() {
    const data = await getData();

    return (
        <div className="flex flex-row h-4/5">
            <aside className="bg-[#ede0d0] mt-5  flex flex-col w-[200px] gap-24 rounded-tr-3xl rounded-br-3xl">
                <div className="flex flex-col justify-between ml-6 m-4 items-start">
                    <div className="bg-[#1e1305] flex justify-center items-center p-1 self-stretch rounded-3xl">
                        <p className="text-[#ede0d0]">Search</p>
                    </div>
                    <p className="mt-4">Speakers</p>
                    <p className="mt-4">Headphones</p>
                    <p className="mt-4">Amplifiers</p>
                    <p className="mt-4">Microphones</p>
                </div>
            </aside>

            <main className="flex-1 p-4 mt-1">
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#ede0d0] rounded-3xl">
                        <div className="flex flex-col gap-1 justify-center pb-1 items-center">
                            <Image
                                width={100}
                                height={50}
                                alt="Hola"
                                src="/images/img1.png"

                            />
                            <div className=" font-bold text-[#f1720c]">
                                WILLEN
                            </div>
                            <div className=" text-sm font-light text-[#171515] ">
                                Marshall
                            </div>
                            <div
                                id="Element2"
                                className=" font-bold text-[#f1720c]"
                            >
                                $<span className="text-[#171515]">120</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
