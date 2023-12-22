import { useAuthContext } from '../../context/authContext'; // Asegúrate de importar correctamente
import Link from 'next/link';

const AdminNav = () => {
    const { logOut } = useAuthContext();

    const handleLogout = () => {
        logOut();
    };

    return (
        <nav className="bg-[#1e1305] p-3 text-white flex justify-around">
            <Link href="/admin/register">
                <button className="bg-[#f1720c] p-2 rounded">
                    Add Account
                </button>
            </Link>
            <button onClick={handleLogout} className="bg-red-500 p-2 rounded">
                Logout
            </button>
        </nav>
    );
};

export default AdminNav;