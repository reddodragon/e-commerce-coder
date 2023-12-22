
import RegisterForm from "../../../components/admin/register/SignInForm";
const AuthContainer = () => {
    return (
        <div className="flex items-start justify-center h-screen mt-10">
            <div className=" border rounded-3xl p-8 max-w-md w-full bg-[#ede0d0] text-[#1e1305]">
                <RegisterForm />
            </div>
        </div>
    );
};

export default AuthContainer;


