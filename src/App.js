"use client";

import { useState } from "react";
import { TextInput } from "./components/Input/TextInput";
import { Button } from "./components/Buttons/Button";
import { onChangeHandler } from "./handlers/handlers";
import axios from "axios";

export default function App() {
  const [auth, setAuth] = useState({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .get("https://staging.api.chale.io/sanctum/csrf-cookie", {
        withCredentials: true,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
          // "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_API_BASE_URL,
        },
      })
      .then(async (res) => {
        console.log("sanctum", res.cookie);
        await axios
          .post(`https://staging.api.chale.io/v1/login`, auth, {
            withCredentials: true,
          })
          .then(async (res) => {
            console.log("login", res);
            await axios
              .get(`https://staging.api.chale.io/v1/user`, {
                withCredentials: true,
              })
              .then((res) => console.log("user", res));
          });
      })
      .catch(async (err) => {
        console.log(err);
      });
  };

  return (
    <main className="w-screen h-screen bg-amber-300 ">
      <div className="h-screen md:flex">
        <div className="fixed z-50 w-screen px-4 py-2 h-1/6 ">
          <div className="flex items-center space-x-2">
            <image
              src="./asset/chale_icon.png"
              width={20}
              height={20}
              alt="logo"
            />
            <p className="md:text-white">Home</p>
          </div>
        </div>
        <div className="items-center justify-center hidden w-1/2 overflow-hidden md:flex pattern-bg">
          <div className="relative flex items-center justify-center w-full h-screen ">
            <image
              src="./asset/altlogo.png"
              width={350}
              height={350}
              alt="altlogo"
              className="-ml-20 -mr-16"
            />
            <div>
              <h1 className="text-5xl font-bold lg:text-8xl text-amber-300">
                Chale
              </h1>
              <p className="mt-1 font-thin text-white lg:text-xl">
                connecting people in simple, easy, and meaningful ways.
              </p>
              {/* <button
            type="submit"
            className="block py-2 mt-4 mb-2 font-bold text-indigo-800 bg-white w-28 rounded-2xl"
          >
            Read More
          </button> */}
            </div>
            <div className="absolute border-4 border-t-8 rounded-full -bottom-32 -left-40 w-60 h-60 lg:w-80 lg:h-80 border-amber-300"></div>
            <div className="absolute border-4 border-t-8 rounded-full -bottom-40 -left-20 w-60 h-60 lg:w-80 lg:h-80 border-amber-300"></div>
            <div className="absolute border-4 border-t-8 rounded-full -top-40 -right-0 w-60 h-60 lg:w-80 lg:h-80 border-amber-300"></div>
            <div className="absolute border-4 border-t-8 rounded-full -top-20 -right-20 w-60 h-60 lg:w-80 lg:h-80 border-amber-300"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full min-h-screen px-10 py-10 overflow-y-scroll bg-white xl:px-0 md:w-1/2">
          <div className="flex items-center mb-4 space-x-4 md:hidden">
            <image
              src="./asset/chale_icon.png"
              width={50}
              height={50}
              alt="altlogo"
              className=""
            />
            <h1 className="text-5xl font-bold text-amber-300">Chale</h1>
          </div>
          <form className=" xl:w-3/6 2xl:1/3" onSubmit={handleSubmit}>
            <h1 className="py-6 mb-1 text-2xl font-bold text-center text-gray-800">
              Welcome Back!
            </h1>
            <TextInput
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              }
              onChange={(e) => onChangeHandler(setAuth, auth, e)}
            />
            <TextInput
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              onChange={(e) => onChangeHandler(setAuth, auth, e)}
            />

            <span className="text-sm cursor-pointer hover:text-blue-400">
              Forgot Password ?
            </span>
            <Button
              type="submit"
              text="Login"
              styleProps="mt-4 mb-6 font-semibold"
            />

            <hr />
            <p className="py-4 text-sm">or sign in with one of these :</p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <Button
                text="Google"
                color="bg-white"
                iconProd="other"
                // icon={
                //   <img
                //     src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                //     className="absolute left-0 w-5"
                //     alt="google logo"
                //   />
                // }
                hover="hover:border-blue-400"
                active="active:bg-blue-100"
                focused="focus:bg-blue-50"
                styleProps="border-2 border-gray-300"
              />
              <Button
                text="Facebook"
                color="bg-white"
                iconProd="other"
                // icon={
                //   <img
                //     src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                //     className="absolute left-0 w-5"
                //     alt="Facebook logo"
                //   />
                // }
                hover="hover:border-blue-400"
                active="active:bg-blue-100"
                focused="focus:bg-blue-50"
                styleProps="border-2 border-gray-300"
              />
            </div>

            <div className="mt-10 space-y-4 text-center text-gray-600 sm:-mb-8">
              <p className="text-xs">
                By proceeding, you agree to our{" "}
                <a href="#" className="underline">
                  Terms of Use
                </a>{" "}
                and confirm you have read our{" "}
                <a href="#" className="underline">
                  Privacy and Cookie Statement
                </a>
                .
              </p>
              {/* <p className="text-xs">
              This site is protected by reCAPTCHA and the{" "}
              <a href="#" className="underline">
                Google Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              apply.
            </p> */}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
