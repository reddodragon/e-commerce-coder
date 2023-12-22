'use client'
import { useAuthContext } from '../../context/authContext';
import AdminNav from '../../components/admin/AdminNav';

const AdminLayout = ({ children, login }) => {
    const { user } = useAuthContext();

    return (
        <div>
            {user.logged 
              ? (
                  <>
                    <AdminNav />
                    <div>{children}</div>
                  </>
                )
              : login
            }
        </div>
    );
}

export default AdminLayout;