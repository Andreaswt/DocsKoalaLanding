import { Work_Sans } from "@next/font/google";
import { usermavenClient, UsermavenClient } from "@usermaven/sdk-js";
import { type AppType } from "next/dist/shared/lib/utils";
import router from "next/router";
import { useEffect } from "react";

import "../styles/globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    // Init Usermaven
    const usermaven: UsermavenClient = usermavenClient({
      key: "YOUR_PROJECT_KEY",
      tracking_host: "https://events.usermaven.com",
    });

    // Track page views
    const handleRouteChange = () => usermaven.track("pageview");
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
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
