'use client'
import { useRouter } from "next/navigation";
import InputField from "./InputField";
import SignInButton from "./SignInButton";

const SignInForm = () => {
  
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hola')
    router.replace('/admin')
}
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Sign In</h1>
            <span className="text-sm mb-6">Use your email and password</span>
            <InputField type="email" placeholder="Email" />
            <InputField type="password" placeholder="Password" />
            <SignInButton />
        </form>
    );
};

export default SignInForm;
