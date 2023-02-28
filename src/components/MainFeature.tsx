export default function MainFeature() {
  return (
    <article className="mt-32 flex flex-col items-center px-6 lg:px-0">
      <div className="flex max-w-xl flex-col items-start gap-4 text-left tracking-tighter sm:items-center md:text-center lg:text-center">
        <h4 className="text-lg font-medium uppercase text-gray-400 md:text-base">
          EFFORTLESSLY CREATE A HELP CENTER
        </h4>
        <h2 className="text-4xl font-semibold lg:text-5xl">
          Craft the help center your users will{" "}
          <span className="text-red-500">love</span>
        </h2>
        <p className="text-md text-lg leading-5 text-gray-500">
          Rapidly construct your help center with versatile components that{" "}
          <b className="font-bold">guide</b> you every step of the way.
        </p>
      </div>
      <div className="mt-6 flex w-full justify-center md:w-fit md:pt-6">
        {/* <video
          autoPlay
          className="relative mt-4 w-[98%] max-w-[1000px] rounded-2xl md:rounded-[30px] lg:w-[60%]"
          src="https://firebasestorage.googleapis.com/v0/b/sidebird-8e11a.appspot.com/o/demo-full.mp4?alt=media&amp;token=cfcb9f26-26c6-434c-ab40-876df5f0c4fb"
        ></video> */}
        <video
          onPlay={(e) => (e.currentTarget.playbackRate = 1.5)}
          autoPlay={true}
          src="https://ik.imagekit.io/docskoala/endpoints.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1677574129952"
          className="relative mt-4 w-[98%] max-w-[1000px] rounded-2xl md:rounded-[30px] lg:w-[60%]"
        />
      </div>
    </article>
  );
}
