const AuthContainer = () => {
    return (
<div className="flex items-center justify-center h-screen ">
      <div className="bg-1e1305 border rounded-3xl p-8 max-w-md w-full bg-[#ede0d0] text-[#1e1305]">
        <form className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">Sign In</h1>
          <span className="text-sm mb-6">Use your email and password</span>
          <div className="mb-4 w-full">
            <input
              type="email"
              placeholder="Email"
              className="bg-[#ede0d0] caret-[#f1720c] p-2 w-full rounded"
              
            />
          </div>
          <div className="mb-4 w-full">
            <input
              type="password"
              placeholder="Password"
              className="bg-[#ede0d0] caret-[#f1720c] p-2 w-full rounded"
            />
          </div>
          <button
            type="submit"
            className="p-2 rounded-full w-full bg-[#f1720c]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
    );
  };
  
  export default AuthContainer;