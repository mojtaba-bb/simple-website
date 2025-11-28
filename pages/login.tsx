/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import "@/app/globals.css";
import Link from "next/link";
import { RxExit } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { IoKey } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

function login() {
  const [Login, setLogin] = useState(true);
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    // تابع برای بروزرسانی ارتفاع
    const updateSize = () => setSize([window.innerWidth, window.innerHeight]);

    updateSize(); // مقدار اولیه
    window.addEventListener("resize", updateSize);

    // پاکسازی هنگام خروج
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div
        style={{
          transform: `${size[0]<1024? `translateY(${Login ? 0 : -((size[0] / 3))}px)`:`translateX(${Login ? 0 : -((size[1] / 3) * 2)}px)`}`,
        }}
        className={`lg:h-screen  transition duration-1000 relative lg:w-fit flex lg:flex-row flex-col bg-gray-100`}
      >
        <div
          className={` lg:h-full lg:w-auto loginBg  flex z-0  w-screen lg:aspect-2/3 aspect-3/1  ease-in-out duration-1000 justify-center items-center text-3xl font-bold text-white`}
        >
          <span
            className="cursor-pointer"
            onClick={() => {
              setLogin(false);
            }}
          >
            Signup
          </span>
        </div>
        <div
          style={{ height: `${size[0]<1024?`${size[1]-(size[0] / 3)}px`:``}`, width:`${size[0]>1024?`${size[0] - (size[1] / 3) * 2}px`:``}`}}
          className={`${size[0]<1024?'w-screen':"h-screen"}    shadowInner  relative z-10`}
        >
          {/* loging form */} 
          <form
            className={` border w-lg absolute left-1/2 top-1/2 -translate-1/2 transition duration-1000 delay-500 ${
              Login ? "opacity-100 " : "opacity-0 -z-10"
            } rounded border-gray-400 bg-white`}
            action=""
          >
            <Link
              href="/"
              className="w-fit flex justify-center item-center p-1 m-1 rounded-xl text-red-400 cursor-pointer transition hover:text-red-700"
            >
              <RxExit />
            </Link>
            <div className="w-4/5 mx-auto flex flex-col gap-10  p-3 justify-center   border-gray-400">
              <div className="flex flex-col    ">
                <label
                  htmlFor="username"
                  className="font-semibold text-gray-500"
                >
                  Username
                </label>
                <div className="flex items-center border-b text-gray-400 gap-1 ">
                  <FaUser />
                  <input
                    id="username"
                    type="text"
                    className="p-1  py-3 mx-auto w-full block  outline-0 "
                    placeholder="Type your username "
                  />
                </div>
              </div>
              <div className="flex flex-col    ">
                <label
                  htmlFor="password"
                  className="font-semibold text-gray-500"
                >
                  Password
                </label>
                <div className="flex items-center border-b text-gray-400 gap-1 ">
                  <IoKey />
                  <input
                    id="password"
                    type="text"
                    className="p-1  py-3 mx-auto w-full block  outline-0 "
                    placeholder="Type your username "
                  />
                </div>
                <a
                  href=""
                  className="text-xs mt-1 ml-auto text-gray-400 hover:text-gray-700 transition "
                >
                  Forgot your password ?
                </a>
              </div>
              <button className="w-full border p-3 shadow-lg rounded text-white bg-black font-semibold hover:bg-black/85  cursor-pointer transition">
                Login
              </button>
            </div>
          </form>
          {/* Signup form */}
          <form
            className={` border w-lg absolute left-1/2 top-1/2  -translate-1/2 transition delay-500 duration-1000 ${
              Login ? " opacity-0 -z-10" : "opacity-100 "
            } rounded border-gray-400 bg-white`}
            action=""
          >
            <Link
              href="/"
              className="w-fit flex justify-center item-center p-1 m-1 rounded-xl text-red-400 cursor-pointer transition hover:text-red-700"
            >
              <RxExit />
            </Link>
            <div className="w-4/5 mx-auto flex flex-col gap-10  p-3 justify-center   border-gray-400">
              <div className="flex flex-col    ">
                <label
                  htmlFor="username"
                  className="font-semibold text-gray-500"
                >
                  Username
                </label>
                <div className="flex items-center border-b text-gray-400 gap-1 ">
                  <FaUser />
                  <input
                    id="username"
                    type="text"
                    className="p-1  py-3 mx-auto w-full block  outline-0 "
                    placeholder="Type your username "
                  />
                </div>
              </div>
              <div className="flex flex-col    ">
                <label
                  htmlFor="email"
                  className="font-semibold text-gray-500"
                >
                  Password
                </label>
                <div className="flex items-center border-b text-gray-400 gap-1 ">
                  <MdAlternateEmail />
                  <input
                    id="email"
                    type="email"
                    className="p-1  py-3 mx-auto w-full block  outline-0 "
                    placeholder="Type your Email "
                  />
                </div>
              </div>
              <div className="flex flex-col    ">
                <label
                  htmlFor="password"
                  className="font-semibold text-gray-500"
                >
                  Password
                </label>
                <div className="flex items-center border-b text-gray-400 gap-1 ">
                  <IoKey />
                  <input
                    id="password"
                    type="password"
                    className="p-1  py-3 mx-auto w-full block  outline-0 "
                    placeholder="Type your Password "
                  />
                </div>
              </div>
              <button className="w-full border p-3 shadow-lg rounded text-white bg-black font-semibold hover:bg-black/85  cursor-pointer transition">
                Signup
              </button>
            </div>
          </form>
        </div>
        <div
          id="Bgsvg2"
          className={` lg:h-full lg:w-auto signUpBg  flex z-0  w-screen lg:aspect-2/3 aspect-3/1  ease-in-out duration-1000 justify-center items-center text-3xl font-bold text-white`}
        >
          <span
            className="cursor-pointer"
            onClick={() => {
              setLogin(true);
            }}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
}

export default login;
