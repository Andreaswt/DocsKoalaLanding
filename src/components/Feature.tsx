import Image from "next/image";
import React from "react";

export default function Feature(props: {
  feature: string;
  featureColor: string;
  headline: string;
  description: React.ReactNode;
  videoSrc?: string;
  imageSrc?: string;
  reverse: boolean;
}) {
  return (
    <article className="flex items-center justify-center overflow-hidden">
      <div
        className={`flex flex-col items-center justify-center gap-12 px-8 lg:gap-36 ${
          props.reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="flex max-w-lg flex-col items-start gap-4 text-left tracking-tighter">
          <h4
            className={`text-md font-medium uppercase text-gray-400 md:text-base ${props.featureColor}`}
          >
            {props.feature}
          </h4>
          <h2 className="text-3xl font-medium lg:text-4xl lg:font-semibold">
            {props.headline}
          </h2>
          <p className="leading-5 text-gray-500 lg:text-lg">
            {props.description}
          </p>
        </div>
        {props.videoSrc ? (
          <video
            loop
            onPlay={(e) => (e.currentTarget.playbackRate = 1.5)}
            autoPlay
            muted
            src={props.videoSrc}
            className="max-w-full rounded-lg md:rounded-2xl lg:max-w-md"
          />
        ) : (
          <></>
        )}
        {props.imageSrc ? (
          <img
            alt={"Feature"}
            src={props.imageSrc}
            className="max-w-full rounded-lg md:rounded-2xl lg:max-w-md"
          />
        ) : (
          <></>
        )}
      </div>
    </article>
  );
}
