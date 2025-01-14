import React, { useState } from "react";
import logo from "../../assets/logo.svg";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { email, password });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg px-8 py-16">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Logo" className="w-32 h-auto" />
        </div>

        {/* Sign-In Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 capitalize">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 capitalize">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-300 text-white py-2 text-xl rounded hover:bg-yellow-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
