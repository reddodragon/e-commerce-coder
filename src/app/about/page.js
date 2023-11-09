import Image from "next/image";

const page = () => {
    return (
      <div className="text-[#1e1305] flex-col scroll p-4 px-0 mt-1 h-4/5 mx-auto overflow-auto bg-[#ede0d0] w-5/6 rounded-3xl">
      <header className="flex flex-col items-center mb-7">
        <h1 className="text-4xl font-bold text-[#1e1305] title">Pure <span className="text-[#f1720c]">Audio</span> </h1>
        <p className="text-sm">Sumérgete en el Sonido de Alta Calidad</p>
      </header>
      <section className="flex justify-center items-center gap-5 mb-7">
        <h2 className="text-xl font-semibold">Nuestra Historia</h2>
        <p className="w-48 text-center">
          La historia de Pure Audio es un viaje impulsado por la pasión por el
          sonido auténtico
        </p>
      </section>
      <section className="flex text-[#ede0d0] flex-col items-center mb-6 bg-[#1e1305]">
        <h2 className="text-2xl font-semibold mb-2">Compromiso con la Calidad</h2>
        <div className="flex items-center gap-20">
          <Image
            width={200}
            height={200}
            alt="Hola"
            className="home-image"
            src={`/imgs/products/Mg10 Gold.png`}
          />
          <p className="w-48 text-md text-right">
            En Pure Audio, la calidad es nuestra obsesión. Cada componente de
            nuestros productos es seleccionado cuidadosamente...
          </p>
        </div>
      </section>

      <section className="flex items-center flex-col gap-2">
        <h2 className="text-2xl font-semibold">Únete a la Experiencia Pure Audio</h2>
        <p className="w-80">
          En Pure Audio, no simplemente vendemos productos, ofrecemos una
          invitación a sumergirte en la esencia misma de la música...
        </p>
      </section>
    </div>
    );
};

export default page;
