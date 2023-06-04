import Link from "next/link";
import { useContext, useState } from "react";
import { Color_data } from "./AppContext";

export default function Theme() {
  const [click, setClick] = useState<any>();
  const { color, setColors } = useContext<any>(Color_data);
  const { colors } = useContext<any>(Color_data);
  const [input, setInput] = useState<any>({
    color1: "",
    color2: "",
  });
  const handleClick = (e: any) => {
    // e.preventDefault();
    // console.log(input);
    setColors(input);
    // console.log(colors);
  };
  return (
    <>
      <div
        className={`py-4 w-[100vw] h-[100vh]`}
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
          <div className="text-center text-xl mt-4">Make your own theme</div>
          <div className="bg-white/50 rounded-xl mx-2 my-4 py-4 px-2 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <label>Color 1 :</label>
              <input
                type="color"
                className="w-20"
                onChange={(event) =>
                  setInput((prev: any) => ({
                    ...prev,
                    color1: event.target.value,
                  }))
                }
              ></input>
              <label>Color 2 :</label>
              <input
                type="color"
                className="w-20"
                onChange={(event) =>
                  setInput((prev: any) => ({
                    ...prev,
                    color2: event.target.value,
                  }))
                }
              ></input>
            </div>
            <div className="flex justify-center">
              <button
                className="px-4 py-2 bg-blue-500/50 text-white rounded-xl mt-4"
                onClick={handleClick}
              >
                Save
              </button>
            </div>
          </div>
          <div className="text-center text-xl">Choose Your Theme from here</div>
          <div className="bg-white/50 rounded-xl mx-2 my-4 py-4 px-2 flex flex-col gap-4">
            <div
              className={
                click === "Default"
                  ? "flex bg-blue-400/50 items-center px-4 py-4 rounded-xl justify-between"
                  : "flex items-center px-4 py-4 rounded-xl justify-between"
              }
              onClick={() => {
                setClick("Default");
                setColors({
                  color1: "#DDEEED",
                  color2: "#FDF1E0",
                });
              }}
            >
              Default
              <div className="bg-gradient-to-bl py-4 px-4 w-44 rounded-xl from-[#DDEEED] to-[#FDF1E0]"></div>
            </div>
            <div
              className={
                click === "Icy Sunshine"
                  ? "flex bg-blue-400/50 items-center px-4 py-4 rounded-xl justify-between"
                  : "flex items-center px-4 py-4 rounded-xl justify-between"
              }
              onClick={() => {
                setClick("Icy Sunshine");
                setColors({
                  color1: "#ec757f",
                  color2: "#f9e4e0",
                });
              }}
            >
              Icy Sunshine
              <div className="bg-gradient-to-bl py-4 px-4 w-44 rounded-xl from-[#ec757f] to-[#f9e4e0]"></div>
            </div>
            <div
              className={
                click === "Minty Sherbet"
                  ? "flex bg-blue-400/50 items-center px-4 py-4 rounded-xl justify-between"
                  : "flex items-center px-4 py-4 rounded-xl justify-between"
              }
              onClick={() => {
                setClick("Minty Sherbet");
                setColors({
                  color1: "#d167c8",
                  color2: "#fce6ce",
                });
              }}
            >
              Minty Sherbet
              <div className="bg-gradient-to-bl py-4 px-4 w-44 rounded-xl from-[#d167c8] to-[#fce6ce]"></div>
            </div>
            <div
              className={
                click === "Oceaninc Coral"
                  ? "flex bg-blue-400/50 items-center px-4 py-4 rounded-xl justify-between"
                  : "flex items-center px-4 py-4 rounded-xl justify-between"
              }
              onClick={() => {
                setClick("Oceaninc Coral");
                setColors({
                  color1: "#b9d676",
                  color2: "#f6d6cc",
                });
              }}
            >
              Oceanic Coral
              <div className="bg-gradient-to-bl py-4 px-4 w-44 rounded-xl from-[#b9d676] to-[#f6d6cc]"></div>
            </div>
            <div
              className={
                click === "Minty Melon"
                  ? "flex bg-blue-400/50 items-center px-4 py-4 rounded-xl justify-between"
                  : "flex items-center px-4 py-4 rounded-xl justify-between"
              }
              onClick={() => {
                setClick("Minty Melon");
                setColors({
                  color1: "#17cb53",
                  color2: "#cf6a8d",
                });
              }}
            >
              Minty Melon
              <div className="bg-gradient-to-bl py-4 px-4 w-44 rounded-xl from-[#17cb53] to-[#cf6a8d]"></div>
            </div>
            <div
              className={
                click === "Enchanted Ivy"
                  ? "flex bg-blue-400/50 items-center px-4 py-4 rounded-xl justify-between"
                  : "flex items-center px-4 py-4 rounded-xl justify-between"
              }
              onClick={() => {
                setClick("Enchanted Ivy");
                setColors({
                  color1: "#00a9bf",
                  color2: "#e175a1",
                });
              }}
            >
              Enchanted Ivy
              <div className="bg-gradient-to-bl py-4 px-4 w-44 rounded-xl from-[#00a9bf] to-[#e175a1]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
