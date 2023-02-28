import {
  CheckIcon,
  LockClosedIcon,
  ReceiptRefundIcon,
} from "@heroicons/react/24/outline";
import Countdown from "react-countdown";

export default function Pricing() {
  const daysRenderer = ({ days }: { days: number }) => {
    return <span>{days}</span>;
  };

  const hoursRenderer = ({ hours }: { hours: number }) => {
    return <span>{hours}</span>;
  };

  const minutesRenderer = ({ minutes }: { minutes: number }) => {
    return <span>{minutes}</span>;
  };

  const secondsRenderer = ({ seconds }: { seconds: number }) => {
    return <span>{seconds}</span>;
  };

  return (
    <section id="pricing" aria-labelledby="Pricing">
      <div className="relative mx-auto w-full max-w-7xl items-center px-8 pt-36 md:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold uppercase leading-7 text-indigo-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Limited-time special launch offer ends in...
          </p>
        </div>
        <div className="my-8 flex justify-center">
          <div className="grid max-w-fit grid-cols-2 justify-center gap-6 lg:grid-cols-4">
            <div className="flex flex-col items-center rounded-xl border border-gray-400 py-4 text-center">
              <h4 className="text-2xl font-semibold tracking-tight">Days</h4>
              <p className="text-xl font-medium">
                <Countdown
                  renderer={daysRenderer}
                  date={Date.now() + 999999999}
                />
              </p>
            </div>
            <div className="flex w-36 flex-col items-center rounded-xl border border-gray-400 py-4 text-center">
              <h4 className="text-2xl font-semibold tracking-tight">Hours</h4>
              <p className="text-xl font-medium">
                <Countdown
                  renderer={hoursRenderer}
                  date={Date.now() + 999999999}
                />
              </p>
            </div>
            <div className="flex w-36 flex-col items-center rounded-xl border border-gray-400 py-4 text-center">
              <h4 className="text-2xl font-semibold tracking-tight">Minutes</h4>
              <p className="text-xl font-medium">
                <Countdown
                  renderer={minutesRenderer}
                  date={Date.now() + 999999999}
                />
              </p>
            </div>
            <div className="flex w-36 flex-col items-center rounded-xl border border-gray-400 py-4 text-center">
              <h4 className="text-2xl font-semibold tracking-tight">Seconds</h4>
              <p className="text-xl font-medium">
                <Countdown
                  renderer={secondsRenderer}
                  date={Date.now() + 999999999}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="my-12 space-y-16 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:max-w-none xl:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100">
            <div className="grid w-full grid-cols-1 items-center justify-center bg-gray-100 p-6 lg:grid-cols-2 lg:p-8">
              <div>
                <h2 className="text-lg text-black">Basic plan</h2>
                <p className="mt-4 text-sm text-gray-500">
                  Suitable for those that are getting started.
                </p>
              </div>
              <div className="mt-3 flex-col lg:mt-0 lg:ml-auto lg:text-right">
                <p className="text-5xl font-light tracking-tight text-black">
                  $<span>699</span>
                </p>
                <p className="flex flex-col text-sm text-black">
                  <span>
                    <span className="line-through">$39</span> <span>$29</span> /
                    month
                  </span>
                  <span>2 year access</span>
                </p>
              </div>
            </div>
            <div className="border-t bg-gray-100 px-6 pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
                <ul
                  role="list"
                  className="order-last mt-10 flex flex-col gap-y-3 text-sm text-gray-500"
                >
                  <li className="flex items-center">
                    <CheckIcon
                      className="h-4 w-4"
                      aria-label="checkmark outline"
                    />
                    <span className="ml-4">Up to 3 workspaces</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon
                      className="h-4 w-4"
                      aria-label="checkmark outline"
                    />
                    <span className="ml-4">Custom Domain & SSL</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon
                      className="h-4 w-4"
                      aria-label="checkmark outline"
                    />
                    <span className="ml-4">Simple Drag-And-Drop Editor</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon
                      className="h-4 w-4"
                      aria-label="checkmark outline"
                    />
                    <span className="ml-4">Custom Branding</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon
                      className="h-4 w-4"
                      aria-label="checkmark outline"
                    />
                    <span className="ml-4">Library of Components</span>
                  </li>
                </ul>
                <ul
                  role="list"
                  className="order-last mt-3 flex flex-col gap-y-3 text-sm text-gray-500 lg:mt-10"
                >
                  <li className="flex items-center">
                    <CheckIcon
                      className="h-4 w-4"
                      aria-label="checkmark outline"
                    />
                    <span className="ml-4">Up to 100 articles</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon
                      className="h-4 w-4"
                      aria-label="checkmark outline"
                    />
                    <span className="ml-4">SEO Optimized</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon
                      className="h-4 w-4"
                      aria-label="checkmark outline"
                    />
                    <span className="ml-4">Basic Search Functionality</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon
                      className="h-4 w-4"
                      aria-label="checkmark outline"
                    />
                    <span className="ml-4">Team Collaboration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon
                      className="h-4 w-4"
                      aria-label="checkmark outline"
                    />
                    <span className="ml-4">
                      Professional-Looking Help Center
                    </span>
                  </li>
                </ul>
              </div>
              <a
                className="mt-8 inline-flex w-full transform items-center justify-center rounded-xl border-2 border-black px-6 py-3 text-center text-black transition duration-200 ease-in-out hover:border-black/50 hover:bg-transparent focus:outline-none"
                aria-label="Big fish tier"
                href="https://docskoala.lemonsqueezy.com"
              >
                Purchase Now
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-8 z-10 rotate-45 overflow-visible rounded-sm bg-red-400 py-1 px-2 font-semibold">
              Hands Off
            </div>
            <div className="overflow-hidden rounded-3xl border border-gray-600 bg-black">
              <div className="grid w-full grid-cols-1 items-center justify-center bg-black p-6 lg:grid-cols-2 lg:p-8">
                <div>
                  <h2 className="text-lg text-white">
                    Premium plan
                    <span className="ml-3 inline-flex items-center rounded-xl bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white">
                      Popular
                    </span>
                  </h2>
                  <p className="mt-4 text-sm text-gray-100">
                    If you already have a help center or any content,{" "}
                    <span className="underline underline-offset-4">
                      we will replicate it in DocsKoala for you.
                    </span>{" "}
                  </p>
                </div>
                <div className="mt-3 flex-col lg:mt-0 lg:ml-auto lg:text-right">
                  <p className="text-5xl font-light tracking-tight text-white">
                    $<span>999</span>
                  </p>
                  <p className="flex flex-col text-sm text-gray-100">
                    <span>
                      <span className="line-through">$79</span> <span>$41</span>{" "}
                      / month
                    </span>
                    <span>2 year access</span>
                  </p>
                </div>
              </div>
              <div className=" border-t border-white/10 bg-black px-6 pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
                  <ul
                    role="list"
                    className="order-last mt-10 flex flex-col gap-y-3 text-sm text-white"
                  >
                    <li className="flex items-center">
                      <CheckIcon
                        className="h-4 w-4"
                        aria-label="checkmark outline"
                      />
                      <span className="ml-4">All Features From Basic Plan</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon
                        className="h-4 w-4"
                        aria-label="checkmark outline"
                      />
                      <span className="ml-4 max-w-[85%]">
                        <span className="font-bold">Hands-Off Approach:</span>{" "}
                        If you wish, we will fully set up the docs for you up to
                        100 pages, provided you have existing docs or content
                        ready.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon
                        className="h-4 w-4"
                        aria-label="checkmark outline"
                      />
                      <span className="ml-4">Page Analytics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon
                        className="h-4 w-4"
                        aria-label="checkmark outline"
                      />
                      <span className="ml-4">SEO Control</span>
                    </li>
                  </ul>
                  <ul
                    role="list"
                    className="order-last mt-3 flex flex-col gap-y-3 text-sm text-white lg:mt-10"
                  >
                    <li className="flex items-center">
                      <CheckIcon
                        className="h-4 w-4"
                        aria-label="checkmark outline"
                      />
                      <span className="ml-4">Priority Support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon
                        className="h-4 w-4"
                        aria-label="checkmark outline"
                      />
                      <span className="ml-4">Up to 10 workspaces</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon
                        className="h-4 w-4"
                        aria-label="checkmark outline"
                      />
                      <span className="ml-4">Up to 1000 articles</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon
                        className="h-4 w-4"
                        aria-label="checkmark outline"
                      />
                      <span className="ml-4">Full Text Search</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon
                        className="h-4 w-4"
                        aria-label="checkmark outline"
                      />
                      <span className="ml-4">Article Feedback</span>
                    </li>
                  </ul>
                </div>
                <a
                  className="mt-8 inline-flex w-full transform items-center justify-center rounded-xl border-2 border-white bg-white px-6 py-3 text-center text-black transition duration-200 ease-in-out hover:border-white hover:bg-transparent hover:text-white focus:outline-none"
                  aria-label="Indie hacker tier"
                  href="https://docskoala.lemonsqueezy.com"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <LockClosedIcon className="h-4 w-4" />
          <h4 className="text-gray-600">
            100% secure payment, powered by Paddle
          </h4>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="flex w-fit max-w-xl gap-2 rounded-xl border border-gray-300 px-4 py-4">
            <div className="flex h-full items-center px-4 ">
              <ReceiptRefundIcon className="h-10 w-10" />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <h4 className="text-2xl font-semibold tracking-tight">
                30-Day Money Back Guarantee
              </h4>
              <p>
                We stand behind our product, DocsKoala, and are confident that
                it will meet your needs. However, if you&apos;re not completely
                satisfied with your purchase within 30 days of the release of
                DocsKoala, we will refund 100% of your money – no questions
                asked. Simply email us at support@docskoala.com, and we&apos;ll
                gladly process your refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
