import React from "react";
import logo from "/shil.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1.5/3  bg-white">
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" className="w-16 mx-auto mb-4" />
        </div>
        <p className="text-center text-gray-900 font-semibold mb-6">
          Enter your details below to create your account and get started...
        </p>
        <div className="flex flex-col gap-1 md:flex-row md:justify-between">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="Enter your full name"
            />
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="fullName"
            >
              Date of Birth
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="date"
            />
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="fullName"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="email"
              placeholder="Enter your email Adreess name"
            />
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="fullName"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="password"
              placeholder="Create a password"
            />
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="fullName"
            >
              Confirm password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="password"
              placeholder="Confirm password"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="fullName"
            >
              Father Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Father Name"
            />
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="fullName"
            >
              Mother name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Mother Name"
            />
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="fullName"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="number"
              placeholder="Type your phone number"
            />
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="fullName"
            >
              Enrollment Year
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="year"
              name="year"
            >
              <option disabled value="2021">
                2021
              </option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option selected value="2024">
                2024
              </option>
            </select>

            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="fullName"
            >
              ID Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="id"
              type="text"
              placeholder="Enter your id number"
            />
          </div>
        </div>
        <div className="mb-4 text-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white mt-1 py-3 rounded-md bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-500 hover:to-cyan-300 shadow focus:bg-blue-800
                font-semibold text-lg
              "
          >
            Submit
          </button>
        </div>
        <p className="text-gray-800 text-md text-center md:flex md:justify-start">
          Already create an account?{" "}
          <Link
            to="/"
            className="text-blue-500 font-semibold hover:text-blue-800"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
