import LogInForm from "../../../components/admin/login/LogInForm";
const AuthContainer = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className=" border rounded-3xl p-8 max-w-md w-full bg-[#ede0d0] text-[#1e1305]">
                <LogInForm />
            </div>
        </div>
    );
};

export default AuthContainer;
