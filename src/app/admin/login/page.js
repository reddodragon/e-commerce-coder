import SignInForm from "../../../components/admin/login/SignInForm";
const AuthContainer = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-1e1305 border rounded-3xl p-8 max-w-md w-full bg-[#ede0d0] text-[#1e1305]">
                <SignInForm />
            </div>
        </div>
    );
};

export default AuthContainer;
