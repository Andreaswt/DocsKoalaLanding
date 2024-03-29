import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useRef, useState } from "react";
import FAQ from "../components/FAQ";
import Feature from "../components/Feature";
import FoundersLetter from "../components/FoundersLetter";
import MainFeature from "../components/MainFeature";
import Newsletter from "../components/Newsletter";
import Pricing from "../components/Pricing";

const Home: NextPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <Head>
        <title>DocsKoala</title>
        <meta name="description" content="DocsKoala" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>

      <nav className="flex h-28 w-full items-center justify-between bg-cream px-10 lg:px-36 2xl:px-96  ">
        <Image
          className="text-gray-300"
          src="/logo-black.svg"
          height={50}
          width={140}
          alt={"Logo"}
        />
        <div className="flex items-center justify-evenly gap-6 bg-cream">
          <a
            href="https://docskoala.com#pricing"
            className="text-sm font-light"
          >
            Pricing
          </a>
          <a
            href="https://docskoala.com#founders-letter"
            className="hidden text-sm font-light sm:block"
          >
            Founders Letter
          </a>
          <a href="https://docskoala.com#faq" className="text-sm font-light">
            FAQ
          </a>
        </div>
      </nav>
      <main className="bg-cream">
        <article className="flex flex-col items-center">
          <div className="flex flex-col gap-8 xl:gap-0">
            <h1 className="mt-24 px-6 text-5xl font-medium sm:text-5xl lg:text-7xl">
              <strong>
                <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 bg-clip-text leading-tight text-transparent">
                  AI assisted
                </span>{" "}
                <br />
                help center builder
                {/* <br /> your users{" "} */}
              </strong>
            </h1>
            <p className="mt-6 mb-10 max-w-xl px-6  text-xl text-gray-500">
              <span>
                Let AI assist you with writing, SEO optimization, article
                generation, user search optimization, so you can create a
                professional help center faster.
              </span>
            </p>
            <section className="flex w-full flex-col items-center gap-4 self-center md:w-fit md:items-end md:self-end">
              <div className="relative">
                <p className="text-sm text-gray-500">
                  Limited launch offer available
                </p>
                <span className="absolute top-0 right-0 -mr-2.5 flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                </span>
              </div>
              <div className="flex flex-col gap-6 md:flex-row-reverse">
                <a
                  href="https://docskoala.com#pricing"
                  className="flex cursor-pointer gap-2 whitespace-nowrap rounded-2xl bg-[#3f3fe9] px-4 py-4 align-middle text-sm font-medium tracking-tight text-white hover:scale-[0.98]"
                >
                  <Image
                    src="/koala-white.svg"
                    height={20}
                    width={20}
                    alt={"Koala"}
                  />
                  <span>See launch offer</span>
                </a>
                <a
                  href="https://docskoala.com#newsletter"
                  className="flex-none rounded-2xl border border-gray-200 bg-white py-4 px-4 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get in touch
                </a>
              </div>
            </section>
          </div>
          <p className="mt-28 text-sm font-medium tracking-tight text-gray-400">
            Editor ↓
          </p>
          <div className="relative mt-4 flex w-[85%] max-w-[1350px] justify-center lg:w-[70%]">
            {/* <video
              onClick={(e) => {
                if (isPlaying) {
                  e.currentTarget.pause();
                }
              }}
              onPlay={handlePlay}
              onPause={handlePause}
              className="w-full rounded-lg object-cover md:rounded-2xl lg:min-h-[500px]"
              src="https://ik.imagekit.io/docskoala/front.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1677577954460"
            ></video> */}
            <img
              alt={"Front Image"}
              src="https://ik.imagekit.io/docskoala/frontimg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678390900285"
              // className="max-w-full rounded-lg md:rounded-2xl lg:max-w-md"
              className="hidden w-full rounded-lg shadow-lg sm:block sm:rounded-xl"
            />
            <img
              alt={"Front Image"}
              src="https://ik.imagekit.io/docskoala/frontimgphone.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678391519752"
              className="mx-4 h-1/2 w-full overflow-hidden rounded-lg shadow-lg sm:hidden md:rounded-xl"
            />
            {/* {!isPlaying && (
              <button
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={async (e) => {
                  const video = e.currentTarget
                    .previousElementSibling as HTMLVideoElement;
                  video.playbackRate = 1.5;
                  await video.play();
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#3f3fe9] px-3 py-3.5 text-white"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="ml-1.5 mt-0.5 fill-white"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                </svg>
              </button>
            )} */}
          </div>
        </article>
        <MainFeature />
        <div id="features" className="mt-48 flex flex-col gap-48">
          <Feature
            featureColor="text-blue-400"
            feature="One-Click Pages"
            headline="Keep your pages coming"
            description={
              <span>
                Organize your help center&apos;s pages and sections in a few
                clicks. Say goodbye to folders filled with markup files – with
                DocsKoala, you can{" "}
                <b className="font-semibold">easily browse and manage</b> your
                content.
              </span>
            }
            videoSrc="https://ik.imagekit.io/docskoala/nav.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1677574129691"
            reverse={true}
          />
          <Feature
            featureColor="text-red-500"
            feature="Device-Friendly"
            headline="Fits on all devices"
            description={
              <span>
                Your help center is most likely being viewed on various devices.
                Ensure a <b className="font-semibold"> professional</b>{" "}
                appearance <b className="font-semibold"> everywhere</b>.
              </span>
            }
            videoSrc="https://ik.imagekit.io/docskoala/mobile.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1677575215967"
            reverse={false}
          />
          <Feature
            featureColor="text-green-400"
            feature="Custom Domain"
            headline="Connect your own custom URL"
            description={
              <span>
                Map the help center you created on DocsKoala (
                <b className="font-semibold">printsoft.docskoala.com</b>) to
                your own website (
                <b className="font-semibold">help.printsoft.com</b>).
              </span>
            }
            imageSrc="https://ik.imagekit.io/docskoala/printsoft.app.docskoala.com.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677575899733"
            reverse={true}
          />
        </div>
        <Pricing />

        <FoundersLetter />

        <FAQ />

        <Newsletter />
        <div className="relative mt-44">
          <div className="flex flex-col items-center gap-6 bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-16 md:absolute md:left-[50%] md:-translate-y-[50%] md:-translate-x-[50%] md:rounded-3xl md:py-10 md:px-36">
            <h1 className="text-center text-2xl font-bold text-white xl:text-4xl">
              Build the documentation <br /> your users need
            </h1>
            <a
              href="https://docskoala.com#pricing"
              className="flex w-max cursor-pointer gap-2 whitespace-nowrap rounded-2xl bg-[#3f3fe9] px-4 py-4 align-middle text-sm font-medium tracking-tight text-white hover:scale-[0.98]"
            >
              <Image
                src="/koala-white.svg"
                height={20}
                width={20}
                alt={"Koala"}
              />
              <span>Get Started</span>
            </a>
          </div>
          <footer className="w-full bg-neutral-900 py-28 px-12">
            <div className="flex flex-col justify-evenly gap-12 md:mt-28 md:flex-row">
              <div className="flex flex-col gap-2">
                <h4 className="font-medium text-gray-200">DocsKoala</h4>
                <p className="text-sm text-gray-300">© 2023</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-medium uppercase text-gray-200">Product</h4>
                <a
                  href="https://docskoala.com#features"
                  className="text-sm text-gray-300"
                >
                  Features
                </a>
                <a
                  href="https://docskoala.com#faq"
                  className="text-sm text-gray-300"
                >
                  Frequenly Asked Questions
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-medium uppercase text-gray-200">
                  Resources
                </h4>
                <a
                  href="https://docskoala.com#pricing"
                  className="text-sm text-gray-300"
                >
                  Pricing
                </a>
                <a
                  href="mailto:andreas@docskoala.com"
                  className="text-sm text-gray-300"
                >
                  Contact
                </a>
              </div>
              <Image
                className="text-gray-300"
                src="/logo-white.svg"
                height={50}
                width={170}
                alt={"Logo"}
              />
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Home;
