export default function FAQ() {
  return (
    <div id="faq" className="flex justify-center">
      <div className="border-r-1 my-32 flex w-10/12 flex-col items-center gap-12 rounded-3xl border border-gray-200 bg-gray-100 py-20 md:max-w-4xl md:gap-24">
        <div className="flex flex-col items-center gap-4 px-6">
          <h4 className="text-green-600">GOT A QUESTION?</h4>
          <h1 className="text-center text-2xl font-semibold md:text-3xl lg:text-4xl">
            Things you might wonder.
          </h1>
        </div>
        <div className="flex flex-col gap-12 px-12">
          <div className="space-y-2">
            <h3 className="text-xl font-medium md:text-2xl">
              DocsKoala vs other solutions
            </h3>
            <p className="text-gray-500">
              DocsKoala differentiates itself from other solutions to the
              problem in a few ways.
              <br />
              <br />
              <b className="font-semibold">AI powered</b> DocsKoala takes a new
              approach, and let AI assist you in all the tasks you otherwise
              would have to do manually. AI will generate help articles based on
              content, assist you when writing, suggest improvements, fix all
              types, optimize for SEO keywords, and more.
              <br />
              <br />
              <b className="font-semibold">Anyone can use it</b> With
              DocsKoala&apos;s inbuilt components, you can easily insert a
              component such as an API endpoint, and fill out the blanks.
              DocsKoala makes it possible for both developers and customer
              support staff to edit the help center.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium md:text-2xl">
              When will DocsKoala be launched?
            </h3>
            <p className="text-gray-500">
              We aim to launch the initial version of DocsKoala by the 1st of
              May 2023. This version will make you able to build a help center
              as shown in video&apos;s on this page. Additional features will
              continuously be rolled out after launch.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium md:text-2xl">
              What is included in the DocsKoala launch offer?
            </h3>
            <p className="text-gray-500">
              The launch offers respectively map to the basic and premium plans
              that will be available when DocsKoala launches. Both plans are
              three month subscriptions, and offer discounts for the entire
              subscription.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium md:text-2xl">
              After the 3-month plan expires, what will happen?
            </h3>
            <p className="text-gray-500">
              After your 3-month offer plan expires, you will have the option to
              switch to a monthly or yearly plan.
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
        </div>
      </div>
    </div>
  );
}
