import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { Login, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    Login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-gray-800 rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-500 uppercase">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={handleLogin}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-base font-semibold text-purple-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-base font-semibold text-purple-300"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link href="#" className="text-sm text-purple-300 hover:underline">
            Forget Password?
          </Link>
          <div className="mt-6">
            <p className="text-danger">{error}</p>
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 border  rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current text-violet-700"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          <button className="flex items-center justify-center w-full p-2 border  rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
            <svg
              xmlns="data:image/png;base64,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"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current text-indigo-700"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>

        <p className="mt-8 text-base font-light text-center text-purple-300">
          {" "}
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-purple-300 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
