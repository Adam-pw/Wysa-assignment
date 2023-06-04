import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebsae";
import { useRouter } from "next/router";
import { Color_data } from "./AppContext";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";

const Signin = () => {
  const { colors } = useContext<any>(Color_data);
  const [user, loading, error] = useAuthState(auth);
  const [updateProfile, updating, errorupdate] = useUpdateProfile(auth);

  const router = useRouter();
  const [UserSign, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleClick = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, UserSign.email, UserSign.password)
      .then(() => {
        updateProfile({
          displayName: UserSign.name,
          photoURL: "",
        });
      })
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={`py-4 w-[100vw] h-[100vh]`}
    >
      <div className="flex justify-around items-center py-28">
        <div className="flex flex-col items-center gap-2">
          <div className="font-semibold text-gray-900 text-3xl mt-2">
            Create an account
          </div>
          <div className="text-gray-500 mt-2">Become a User with Wysa</div>
          <form className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm">Name</label>
              <input
                className="px-4 py-2 w-96 rounded-md focus:outline-none border border-gray-300"
                placeholder="Enter your name"
                type="text"
                onChange={(event) =>
                  setUser((prev) => ({
                    ...prev,
                    name: event.target.value,
                  }))
                }
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm">Email</label>
              <input
                className="px-4 py-2 w-96 rounded-md focus:outline-none border border-gray-300"
                placeholder="Enter your email"
                type="text"
                onChange={(event) =>
                  setUser((prev) => ({
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
                placeholder="Create a password"
                type="password"
                onChange={(event) =>
                  setUser((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }))
                }
              ></input>
            </div>
            <div className="text-sm text-gray-500">
              Must be at least 8 characters.
            </div>

            <button
              className="w-96 px-4 py-2 bg-primary-600 bg-white/50 rounded-md"
              onClick={handleClick}
            >
              Get started
            </button>
            <div className="text-sm text-gray-500 text-center">
              {"Already have an account?"}
              <Link href="/login">
                <span className="hover:underline text-primary-500"> Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
