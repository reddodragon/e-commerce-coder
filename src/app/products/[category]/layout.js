import CategoriesMenu from "../../../components/CategoriesMenu"

export default function CategoryLayout({ children }) {

    
    return (
        <main>
            <div className="flex flex-row ">
                <CategoriesMenu />
                {children}
            </div>
        </main>
    );
}
