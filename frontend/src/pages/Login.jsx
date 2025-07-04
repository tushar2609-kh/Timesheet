import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="flex flex-col items-center h-screen justify-center bg-gradient-to-b 
    from-teal-600 from-50% to-gray-100 to-50% space-y-6"
    >
      <h2 className="font-pacific text-3xl text-white">
        TimeSheet Management System
      </h2>
      <form>
        <div className="border shadow p-6 w-80 bg-white">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border"
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Password" className="block text-gray-700">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border"
              type="Password"
              placeholder="*********"
              name="Password"
              required
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-teal-600">
              Forgot Password?
            </a>
          </div>
          <div className="mb-4">
        <Link to='/admin-dashboard'
          type="submit"
          className="inline-block text-center w-full bg-teal-600 text-white py-2 rounded"
        >
          Login
        </Link>
      </div>
        </div>
      </form>
      
    </div>
  );
};

export default Login;
