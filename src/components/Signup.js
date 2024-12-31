import React from "react";
import { Link } from "react-router-dom";
import savvyZiLogo from "../assets/SavvyZi Logo.png";

function Signup() {
  return (
    <div className="flex h-screen">
      <div className="w-4/5"></div>
      <div className="w-1/3 bg-gray-100 rounded-lg flex items-center justify-center p-4">
        <div className="w-full max-w-xs">
          <img src={savvyZiLogo} alt="SavvyZi Logo" className="mx-auto mb-4" />
          <h2 className="text-center text-red-500 text-lg font-bold mb-3">
            Earn cashbacks and rewards with SavvyZi!
          </h2>
          <form>
            <label className="block text-gray-600 font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded-lg bg-gray-400 mb-3 text-white"
            />
            <label className="block text-gray-600 font-semibold mb-1">
              Email:
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-2 rounded-lg bg-gray-400 mb-3 text-white"
            />
            <label className="block text-gray-600 font-semibold mb-1">
              Phone Number:
            </label>
            <input
              type="text"
              placeholder="XXXXXXXXX"
              className="w-full p-2 rounded-lg bg-gray-400 mb-4 text-white"
            />
            <div className="flex items-center mb-4">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                I agree with SavvyZi's terms & conditions
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 text-white font-bold py-2 rounded-lg mb-3"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm text-red-700">
            <Link to="/" className="underline">
              I already have an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
