import React from "react";
import { Link } from "react-router-dom";
import logo from "/shil.jpg";

const LogIn = () => {
  return (
    <div className="flex justify-center items-center h-screen box-border shadow-2xl bg-gray-100 rounded-3xl">
      <div className="w-[29rem] bg-white p-8 rounded shadow-lg">
        <div className="text-center">
          <img src={logo} alt="" className="w-20 mx-auto" />

          <h1 className="text-3xl font-semibold mb-2 font-mono">
            Welcome back
          </h1>
          <p className="text-md text-gray-600">
            Please log in to your account to continue
          </p>
        </div>
        {/* form input */}
        <div className="space-y-3 block">
          <form className="mt-3">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-md mb-2 font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email..."
                className="w-full px-4 py-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-md mb-2 font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password..."
                className="w-full px-4 py-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
            {/* Buttton */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white mt-1 py-3 rounded-md bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-500 hover:to-cyan-300 shadow focus:bg-blue-800
                font-semibold text-lg
              "
            >
              Log In
            </button>

            <div className="mt-3 flex justify-between">
              <a
                href="#"
                className="underline text-blue-500 hover:text-blue-700 font-semibold"
              >
                Forget Password
              </a>
              <p className="text-gray-600">
                Don't have a account?{"  "}
                <Link
                  to="/signup"
                  className="underline font-semibold hover:text-blue-700 text-blue-500"
                >
                  Sign up...
                </Link>{" "}
              </p>
            </div>

            <div className="text-center pt-4">
              <span>OR</span>
              <p className="text-gray-600 pt-3">
                Need support?{"  "}
                <Link
                  to="/support"
                  className="underline font-semibold hover:text-blue-700 text-blue-500"
                >
                  Contact us
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
