export default function FAQ() {
  return (
    <div id="faq" className="flex justify-center">
      <div className="border-r-1 my-32 flex w-10/12 flex-col items-center gap-12 rounded-3xl border border-gray-200 bg-gray-100 py-20 md:max-w-4xl md:gap-24">
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-green-600">GOT A QUESTION?</h4>
          <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Things you might wonder.
          </h1>
        </div>
        <div className="flex flex-col gap-12 px-12">
          <div className="space-y-2">
            <h3 className="text-xl font-medium md:text-2xl">
              When will DocsKoala be launched?
            </h3>
            <p className="text-gray-500">
              We aim to launch the initial version of DocsKoala by the 1st of
              May 2023. This version will make you able to build a help center
              as shown in GIF&apos;s on this page. Additional features will
              continuously be rolled out after launch.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium md:text-2xl">
              What is included in the DocsKoala launch offer?
            </h3>
            <p className="text-gray-500">
              The launch offers respectively map to the basic and premium plans
              that will be available when DocsKoala launches. Both plans are two
              year subscriptions, and offer discounts for the entire
              subscription.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium md:text-2xl">
              I need a feature, can you build it?
            </h3>
            <p className="text-gray-500">
              Absolutely, reach out to me on email, and I will get back as soon
              as possible with a plan for when the feature will be ready.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium md:text-2xl">
              After the 2-year plan expires, what will happen?
            </h3>
            <p className="text-gray-500">
              After your 2-year founders plan expires, you will have the option
              to switch to a monthly or yearly plan. Since you originally got
              the founders plan, you will be offered an additional discount
              compared to new subscribers.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium md:text-2xl">
              Can I upgrade my plan after purchasing the basic or premium plan?
            </h3>
            <p className="text-gray-500">
              You can upgrade your launch offer plan until the offer expires.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium md:text-2xl">
              Will I get access to all features and future updates?
            </h3>
            <p className="text-gray-500">
              Certainly! You will get access to all features and future updates
              according to the plan you selected.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium md:text-2xl">
              Do I still need DocsKoala if I use webflow or alike?
            </h3>
            <p className="text-gray-500">
              DocsKoala differentiates itself from other solutions to the
              problem in a few ways.
              <br />
              <br />
              <b className="font-semibold">Simplicity and ease of use</b>{" "}
              DocsKoala is extremely easy to use. We provide a service that
              specifically makes building help centers a breeze without e.g.
              markup files. We make it possible to build just by browsing.
              <br />
              <br />
              <b className="font-semibold">
                A guided way to build help centers
              </b>{" "}
              With DocsKoala&apos;s inbuilt general components, you don&apos;t
              need to worry about inserting a headline, text, code snippet, etc.
              for each endpoint. Instead, you can just fill out the blanks in
              the general component
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
