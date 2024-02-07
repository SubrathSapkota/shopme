import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, serFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    serFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const login = async () => {
    const responseData = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
      console.log("register successful");
    } else {
      alert(responseData.error);
    }
  };

  const register = async () => {
    const responseData = await fetch("http://localhost:5000/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
      console.log("register successful");
    } else {
      alert(responseData.error);
    }
  };

  return (
    <>
      <div className="w-[100%] h-[80vh] flex justify-center items-center bg-gradient-to-b from-[#fde1ff]">
        <div className=" px-10 py-10 flex flex-col gap-5 bg-white rounded-lg">
          <h1 className="text-3xl font-bold">{state}</h1>
          <div className="flex flex-col gap-5">
            {state !== "Login" ? (
              <input
                type="text"
                placeholder="Your Name"
                className="h-12 rounded-lg px-4 border-2 "
                name="name"
                value={formData.name}
                onChange={changeHandler}
              />
            ) : (
              <></>
            )}

            <input
              type="email"
              placeholder="Email Address"
              className="h-12 rounded-lg px-4 border-2"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
            <input
              type="password"
              placeholder="Password"
              className="h-12 rounded-lg px-4 border-2"
              name="password"
              value={formData.password}
              onChange={changeHandler}
            />
          </div>
          <button
            className="bg-[#ff5353] h-12 rounded-lg text-white text-xl font-bold active:bg-red-900"
            onClick={() => {
              state === "Login" ? login() : register();
            }}
          >
            Continue
          </button>
          {state === "Login" ? (
            <p className="flex gap-2">
              dont have an acoount?
              <span
                className="text-red-500 underline underline-offset-3 cursor-pointer"
                onClick={() => {
                  setState("Sign Up");
                }}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="flex gap-2">
              Already have an acoount?
              <span
                className="text-red-500 underline underline-offset-3 cursor-pointer"
                onClick={() => {
                  setState("Login");
                }}
              >
                Login In
              </span>
            </p>
          )}

          <div className="flex gap-2">
            <input type="checkbox" />
            <p>By continuing, i agree the terms of use & prvacy policy.</p>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Login;
