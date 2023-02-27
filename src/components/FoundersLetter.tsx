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
            delivering value to other businesses.
            <br />
            <br />
            Having read countless documentation pages in my line of work, I know
            that some help centers are better than others. I used to assume that
            businesses created their documentation using simple editors.
            However, when I began developing my own product, I struggled to
            document its functionality and found no reliable way to quickly
            create the necessary documentation.
            <br />
            <br />
            This experience inspired me to start DocsKoala, with the aim of
            helping other businesses save time during the documentation process.
            After all, most products require some form of documentation.
            <br />
            <br />
            As a bootstrapped company, we listen closely to our users to shape
            our feature set. We believe that our users are what make DocsKoala
            what it is, and we&apos;re always ready to adapt to their needs.
            <br />
            <br />
            As a bootstrapped company, our feature set is shaped by our users.
            We believe that our users are what make DocsKoala what it is, and
            therefore they should have a significant say in choosing what
            features we implement next. We are always ready to adapt to our
            users&apos; needs.
            <br />
            <br />I invite you to join me on this exciting journey with
            DocsKoala!
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
