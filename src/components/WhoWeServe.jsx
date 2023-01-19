import React from "react";
import customer from "../assets/customer.jpg";
import Image from "next/image";

const WhoWeServe = () => {
  return (
    <>
      <section>
        <h1
          style={{
            fontWeight: "900",
            fontSize: 34,
            textAlign: "center",
            marginTop: 100,
          }}
        >
          {" "}
          Who We Serve
        </h1>

        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 rounded-full bg-violet-700 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div className="absolute rounded-full bg-fuchsia-500 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative">
                    <Image
                      className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                      alt="Customer"
                      src={customer}
                      width="500"
                      height="500"
                      loading="lazy"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                About Us
              </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                Customers
              </h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
                SwiftlyBox delivers the best of your neighborhood on-demand,
                with thousands of restaurants, convenience stores, pet stores,
                grocery stores, and more at your fingertips.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeServe;
