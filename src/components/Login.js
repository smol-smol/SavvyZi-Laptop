import React from "react";
import { Link } from "react-router-dom";
import savvyZiLogo from "../assets/SavvyZi Logo.png";

function Login() {
  return (
    <div className="flex h-screen">
      <div className="w-4/5"></div>
      <div className="w-1/3 bg-gray-100 rounded-lg flex items-center justify-center p-4">
        <div className="w-full max-w-xs">
          <img src={savvyZiLogo} alt="SavvyZi Logo" className="mx-auto mb-4" />
          <h2 className="text-center text-red-500 text-lg font-bold mb-3">
            Welcome to SavvyZi!
          </h2>
          <form>
            <label className="block text-gray-600 font-semibold mb-1">
              E-mail:
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-2 rounded-lg bg-gray-400 mb-3 text-white"
            />
            <label className="block text-gray-600 font-semibold mb-1">
              Password:
            </label>
            <input
              type="password"
              placeholder="XXXXXXXXX"
              className="w-full p-2 rounded-lg bg-gray-400 mb-4 text-white"
            />
            <button
              type="submit"
              className="w-full bg-red-700 text-white font-bold py-2 rounded-lg mb-3"
            >
              Log in
            </button>
          </form>
          <button className="w-full bg-white text-gray-800 font-bold py-2 rounded-lg border mb-4">
            Continue with Google
          </button>
          <p className="text-center text-sm text-red-700">
            No account?{" "}
            <Link to="/signup" className="underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
