import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Context from "./AppContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Context>
        <Component {...pageProps} />
      </Context>
    </>
  );
}
