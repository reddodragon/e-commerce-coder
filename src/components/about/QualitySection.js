import Image from "next/image";

const QualitySection = () => {
    return (
        <section className="flex text-[#ede0d0] flex-col items-center mb-6 bg-[#1e1305]">
            <h2 className="text-2xl font-semibold mb-2">
                Compromiso con la Calidad
            </h2>
            <div className="flex items-center gap-20">
                <Image
                    width={200}
                    height={200}
                    alt="Hola"
                    className="home-image"
                    src={`/imgs/products/Mg10 Gold.png`}
                />
                <p className="w-48 text-md text-right">
                    En Pure Audio, la calidad es nuestra obsesión. Cada
                    componente de nuestros productos es seleccionado
                    cuidadosamente...
                </p>
            </div>
        </section>
    );
};

export default QualitySection;
