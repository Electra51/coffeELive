import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const credentials = {
    email: "safayet@gmail.com",
    password: "safayett123",
    name: "Safayet",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === credentials.email && password === credentials.password) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: credentials.name,
          email: credentials.email,
        })
      );
      setLoggedIn(true);
      setError("");
      alert(`Welcome, ${credentials.name}! You are logged in.`);
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="w-[400px] mt-32 mx-auto px-3">
      <div className="flex justify-center items-center mb-7">
        {" "}
        <img src={logo} alt="" width={160} />
      </div>

      {error && (
        <div
          style={{
            fontFamily: "value_sans_promedium",
          }}
          className="text-center text-red-500 mb-3">
          {error}
        </div>
      )}

      {loggedIn ? (
        <div
          style={{
            fontFamily: "value_sans_promedium",
          }}
          className="text-center text-black mb-3">
          <h3>Welcome, {credentials.name}!</h3>
          <p>Email: {credentials.email}!</p>
          <Link
            to="/"
            className="mx-auto border border-[#86371C] flex justify-center items-center gap-3 px-3 py-0.5 rounded-[5px] text-[#86371C] mt-3 w-[150px] text-[16px]">
            Go to Home
          </Link>
        </div>
      ) : (
        <form
          onSubmit={handleLogin}
          className="bg-white border border-gray-200 shadow-sm rounded px-8 pt-8 pb-8 mb-4">
          <p
            style={{ fontFamily: "bakilda_historiregular" }}
            className="text-xl text-center mb-6">
            Login
          </p>
          <div
            className="mb-4"
            style={{
              fontFamily: "value_sans_promedium",
            }}>
            <label
              className="block text-[#86371C] text-[15px] font-semibold mb-1"
              htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="appearance-none border border-[#86371C] rounded-md w-full py-2 px-2 text-[#86371C] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[14px]"
            />
          </div>
          <div
            className="mb-4"
            style={{
              fontFamily: "value_sans_promedium",
            }}>
            <label
              className="block text-[#86371C] text-[15px] font-semibold mb-1"
              htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="appearance-none border border-[#86371C] rounded-md w-full py-2 px-2 text-[#86371C] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[14px]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#86371C] hover:bg-[#86371C] text-white font-medium py-1.5 px-4 rounded-md focus:outline-none focus:shadow-outline w-full text-[15px] mt-3"
            style={{
              fontFamily: "value_sans_promedium",
            }}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
