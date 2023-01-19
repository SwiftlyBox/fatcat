import React from "react";
import Script from "next/script";
import Image from "next/image";
import storeH from "../assets/storeH.jpg";

const StoreSignUp = () => {
  return (
    <>
      <section>
        <Script src="https://tally.so/widgets/embed.js"></Script>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative">
                    <Image
                      className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                      alt="hero"
                      src={storeH}
                      width="700"
                      height="700"
                      loading="lazy"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                More ways to grow your business
              </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                0% commissions for 30 days{" "}
              </h1>
              <br />
              <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
                <iframe
                  data-tally-src="https://tally.so/embed/mD4lkb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  width="100%"
                  height="100"
                  frameBorder="6"
                  marginHeight="0"
                  marginWidth="0"
                  title="Restaurant Sign Up"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoreSignUp;
