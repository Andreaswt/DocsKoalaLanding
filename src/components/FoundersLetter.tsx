import Image from "next/image";

export default function FoundersLetter() {
  return (
    <div id="founders-letter" className="flex justify-center px-8 pb-10 pt-36">
      <div className="flex max-w-4xl flex-col gap-10">
        <div className="text-center">
          <h2 className="text-3xl font-medium lg:text-4xl lg:font-semibold">
            Founders Letter
          </h2>
          <p className="mt-8 text-left text-lg">
            Hello, I&apos;m Andreas, the founder of DocsKoala. With several
            years of experience as a software developer and a passion for
            creating SaaS products, I started DocsKoala with the goal of
            delivering help centers that anyone in a company can help create and
            edit.
            <br />
            <br />
            Having read countless documentation pages in my line of work, I used
            to assume that businesses created their documentation using
            webflow-like editors. However, when I began developing a software
            product of my own, I struggled to document its functionality and
            found no reliable way to quickly create the necessary documentation.
            With all the new AI becoming available, I set out to create a tool
            for building a help center <strong>faster</strong>,{" "}
            <strong>easier</strong>, with the end result being{" "}
            <strong>more professional</strong> than what you could have done on
            your own.
            <br />
            <br />
            As a bootstrapped company, we listen closely to our users to shape
            our feature set. I invite you to join me on this exciting journey
            with DocsKoala!
          </p>
        </div>
        <div className="flex items-center space-x-4 text-start lg:space-x-6">
          <Image
            className="rounded-full"
            src="/A.jpg"
            height={60}
            width={60}
            alt={"Andreas"}
          />
          <div className="space-y-1">
            <h3 className="text-lg font-medium leading-6 text-black">
              Andreas Trolle
            </h3>
            <p className="text-base text-gray-500">Founder of DocsKoala</p>
          </div>
        </div>
      </div>
    </div>
  );
}
