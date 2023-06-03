import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebsae";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { Color_data } from "./AppContext";

const Login = () => {
  const { colors } = useContext<any>(Color_data);
  const [vendor, setVendor] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  const handleClick = (e: any) => {
    e.preventDefault();
    if (!user) {
      signInWithEmailAndPassword(auth, vendor.email, vendor.password).then(
        (user) => {
          console.log(user);
          router.push("/");
        }
      );
    } else {
      router.push("/");
    }
  };

  return (
    <div
      className={`bg-gradient-to-bl py-4 from-[${colors.color1}] to-[${colors.color2}] w-[100vw] h-[100vh]`}
    >
      <div className="flex justify-around items-center py-40">
        <div className="flex flex-col items-center gap-2">
          <div className="font-semibold text-gray-900 text-3xl mt-2">
            Log in to your account
          </div>
          <div className="text-gray-500 mt-2">
            Welcome back! Please enter your details.
          </div>
          <form className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm">Email</label>
              <input
                className="px-4 py-2 w-96 rounded-md focus:outline-none border border-gray-300"
                placeholder="Enter your email"
                type="text"
                onChange={(event) =>
                  setVendor((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }))
                }
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm">Password</label>
              <input
                className="px-4 py-2 w-96 rounded-md focus:outline-none border border-gray-300"
                placeholder="********"
                type="password"
                onChange={(event) =>
                  setVendor((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }))
                }
              ></input>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm cursor-pointer flex items-center gap-2 px-1">
                <input
                  type="checkbox"
                  id="rem"
                  className="border border-gray-300"
                />
                <label htmlFor="rem">Remember for 30 days</label>
              </div>
              <div className="hover:underline text-sm font-medium text-primary-600">
                Forgot password
              </div>
            </div>
            <button
              className="w-96 px-4 py-2 bg-primary-600 rounded-md bg-white/50"
              onClick={handleClick}
            >
              Sign in
            </button>
            <div className="text-sm text-gray-500 text-center">
              {"Don’t have an account?"}
              <Link href="/signin">
                <span className="text-primary-500 hover:underline">
                  {" "}
                  Sign In
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
