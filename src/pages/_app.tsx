import { type AppType } from "next/dist/shared/lib/utils";
import { Work_Sans } from "@next/font/google";

import "../styles/globals.css";
import Head from "next/head";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${workSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
