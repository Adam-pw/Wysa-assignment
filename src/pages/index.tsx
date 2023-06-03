import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { Color_data } from "./AppContext";
import { auth } from "@/firebsae";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const { colors } = useContext<any>(Color_data);
  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [router, user]);
  return (
    <>
      <div
        className={`bg-gradient-to-bl py-4 from-[${colors.color1}] to-[${colors.color2}] w-[100vw] h-[100vh]`}
      >
        <div className="max-w-screen-sm mx-auto flex flex-col justify-between">
          <div className="h-[92vh]">
            <div className="mx-2 my-4 flex gap-2 justify-between">
              <Link href="/profile">
                <button className="bg-white/50 px-4 py-2 rounded-2xl flex gap-2 items-center">
                  <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>profile_image_round [#1326]</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-380.000000, -2199.000000)"
                        fill="#000000"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M342,2055.615 C342,2055.722 341.97,2055.821 341.939,2055.918 C341.723,2052.974 339.918,2050.482 337.375,2049.283 C338.368,2048.369 339,2047.071 339,2045.615 C339,2043.534 337.728,2041.753 335.92,2041 L341,2041 C341.552,2041 342,2041.063 342,2041.615 L342,2055.615 Z M339.963,2057 L327.975,2057 C327.974,2057 327.969,2056.741 327.969,2056.701 C327.969,2053.605 330.326,2050.96 333.339,2050.645 C334,2050.733 334.255,2050.622 334.623,2050.576 C337.625,2050.902 339.969,2053.623 339.969,2056.71 C339.969,2056.75 339.964,2057 339.963,2057 L339.963,2057 Z M326,2055.615 L326,2041.615 C326,2041.063 326.448,2041 327,2041 L332.08,2041 C330.272,2041.753 329,2043.534 329,2045.615 C329,2047.06 329.622,2048.351 330.602,2049.264 C328.107,2050.422 326.307,2052.82 326.012,2055.675 C326.011,2055.654 326,2055.636 326,2055.615 L326,2055.615 Z M337,2045.615 C337,2047.055 335.979,2048.26 334.623,2048.548 C334.033,2048.5 333.868,2048.508 333.368,2048.545 C332.017,2048.254 331,2047.052 331,2045.615 C331,2043.961 332.346,2042.615 334,2042.615 C335.654,2042.615 337,2043.961 337,2045.615 L337,2045.615 Z M342,2039 L326,2039 C324.895,2039 324,2039.895 324,2041 L324,2057 C324,2058.104 324.895,2059 326,2059 L342,2059 C343.105,2059 344,2058.104 344,2057 L344,2041 C344,2039.895 343.105,2039 342,2039 L342,2039 Z"
                            id="profile_image_round-[#1326]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>{" "}
                  Profile
                </button>
              </Link>
              <Link href="/theme">
                <button className="bg-white/50 px-4 py-2 rounded-2xl">
                  Change theme
                </button>
              </Link>
            </div>
            <hr></hr>
            <div className="w-[19rem] text-neutral-900">
              <div className="bg-white px-4 py-3 mx-2 my-4 w-max rounded-xl">
                Hi there! 👋
              </div>
              <div className="bg-white px-4 py-3 mx-2 rounded-xl">
                I am Wysa-an AI chatbot built by therapists
              </div>
              <div className="bg-white px-4 py-3 mx-2 my-4 rounded-xl">
                I am here to understand your concerns and connect you with the
                best resources aviable to support you.
              </div>
              <div className="bg-white px-4 py-3 mx-2 my-4 w-max rounded-xl">
                Can I help?
              </div>
              <div className="bg-white px-4 py-3 mx-2 my-4 w-max rounded-tr-xl rounded-bl-xl rounded-br-xl">
                <img
                  src="https://play-lh.googleusercontent.com/E0mEs_0J_zNasJrJS4isPgajPObwo9MDQMRjiuOU4K4SlwXLWpJc_69KhBlktP7JnA"
                  className="h-32 w-32"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mx-2 flex gap-2">
            <input
              className="px-4 py-2 rounded-xl flex-1 bg-white/50 focus:outline-none placeholder:text-neutral-700"
              placeholder="Enter your message"
            ></input>
            <button className="p-2 w-9 rounded-full bg-white/50">
              <svg
                fill="#000000"
                height="20px"
                width="20px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M467.076,68.86c-59.902-59.902-156.846-59.896-216.741,0L34.919,284.276c-46.558,46.557-46.558,122.312,0,168.87
			c46.57,46.571,122.326,46.544,168.87,0L419.205,237.73c33.36-33.36,33.36-87.64,0-121c-33.359-33.361-87.64-33.361-121,0
			L114.478,300.457c-6.975,6.975-6.975,18.285,0,25.259c6.975,6.975,18.285,6.975,25.259,0l183.727-183.727
			c19.432-19.432,51.05-19.432,70.481,0c19.431,19.432,19.431,51.05,0,70.481L178.53,427.887c-32.71,32.71-85.646,32.706-118.352,0
			c-15.806-15.806-24.511-36.821-24.511-59.175s8.706-43.369,24.511-59.176L275.594,94.119c45.94-45.94,120.287-45.934,166.222,0
			c45.827,45.828,45.827,120.395,0,166.222l-95.741,95.741c-6.975,6.975-6.975,18.284,0,25.259s18.285,6.975,25.259,0l95.741-95.741
			C526.978,225.7,526.971,128.754,467.076,68.86z"
                    />
                  </g>
                </g>
              </svg>
            </button>
            <button className="p-2 w-9 rounded-full bg-white/50">
              <svg
                width="20px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z"
                  fill="#000000"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
