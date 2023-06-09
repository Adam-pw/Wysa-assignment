import React, { useContext, useState } from "react";
import { Color_data } from "./AppContext";
import Link from "next/link";
import { auth } from "@/firebsae";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import Image from "next/image";
const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [photo, setPhoto] = useState<any>();
  const [updateProfile, updating, errorupdate] = useUpdateProfile(auth);

  const { colors } = useContext<any>(Color_data);
  const router = useRouter();

  

  return (
    <>
      <div
        className={`py-4 w-[100vw] h-[100vh]`}
        style={{
          background: `linear-gradient(to bottom left, ${colors.color1}, ${colors.color2})`,
        }}
      >
        <div className="max-w-screen-sm mx-auto">
          <div className="mx-2 mb-4 flex">
            <Link href="/">
              <button className="bg-white/50 px-2 py-2 rounded-2xl">
                <svg
                  fill="#000000"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 219.151 219.151"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M109.576,219.151c60.419,0,109.573-49.156,109.573-109.576C219.149,49.156,169.995,0,109.576,0S0.002,49.156,0.002,109.575
		C0.002,169.995,49.157,219.151,109.576,219.151z M109.576,15c52.148,0,94.573,42.426,94.574,94.575
		c0,52.149-42.425,94.575-94.574,94.576c-52.148-0.001-94.573-42.427-94.573-94.577C15.003,57.427,57.428,15,109.576,15z"
                    />
                    <path
                      d="M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008
		c4.142-0.001,7.499-3.358,7.499-7.502c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825
		c2.929-2.929,2.929-7.679,0-10.607c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628
		c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z"
                    />
                  </g>
                </svg>
              </button>
            </Link>
          </div>
          <hr></hr>
          <div className="flex flex-col items-center my-4 gap-4">
            <div className="w-44 h-44 bg-white/50 rounded-full my-2 border border-white/50">
              <img
                src={user?.photoURL ? user.photoURL : ""}
                alt=""
                className="w-44 h-44 rounded-full"
              />
            </div>
            <div className="">{user?.displayName}</div>
            <div className="">{user?.email}</div>
          </div>
          <div className="flex justify-center items-center">
            <label>Photo URL : </label>
            <input
              placeholder="Enter link for your profile photo"
              className="mx-2 py-4 px-2 rounded-xl"
              onChange={(e) => {
                setPhoto(e.target.value);
              }}
            ></input>
          </div>
          <div className="flex justify-center py-4">
            <button
              className="bg-white/50 px-4 py-2 rounded-xl w-full mx-4"
              onClick={() => {
                updateProfile({
                  photoURL: photo,
                });
              }}
            >
              Save
            </button>
          </div>
          <div className="flex justify-center py-4">
            <button
              className="bg-white/50 px-4 py-2 rounded-xl w-full mx-4"
              onClick={() => {
                alert("Succesfully logout Hop to see you again");
                signOut(auth).then(() => {
                  router.push("/signin");
                });
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
