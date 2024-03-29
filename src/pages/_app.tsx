import { Work_Sans } from "@next/font/google";
import { usermavenClient, UsermavenClient } from "@usermaven/sdk-js";
import { type AppType } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

import "../styles/globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    // Init Usermaven
    const usermaven: UsermavenClient = usermavenClient({
      key: "YOUR_PROJECT_KEY",
      tracking_host: "https://events.usermaven.com",
    });

    // Track page views
    const handleRouteChange = () => usermaven.track("pageview");
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    router.events.on("routeChangeComplete", handleRouteChange);
    console.log("sadf");

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11119779200"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'AW-11119779200');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
