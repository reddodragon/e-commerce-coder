import CategoriesMenu from "@/components/CategoriesMenu"
import ProductsList from "@/components/ProductList"

export async function generateMetadata({params, searchParams}, parent) {

    return {
        title: `Pure Audio - ${params.category}`,
    }
}

const Productos = ({params}) => {
    const { category } = params

    return (
        <main>
            <div className="flex flex-row ">
                <CategoriesMenu />
                <ProductsList category={category}/>
            </div>
        </main>
    )
}

export default Productos

