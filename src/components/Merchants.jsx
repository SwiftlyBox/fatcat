import React from "react";
import merchants from "../assets/merchants.jpg";
import Image from "next/image";

const Merchants = () => {
  return (
    <>
      <section className="mb-40">
        <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 gap-12  items-center">
              <div className="mt-12 lg:mt-0">
                <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                  About Us
                </span>
                <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                  Merchants
                </h1>
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
                  SwiftlyBox helps you reach new customers, market your store,
                  and grow your business by providing delivery, pickup, and
                  direct online ordering.
                </p>
              </div>
              <div className="mb-12 lg:mb-0">
                <Image
                  src={merchants}
                  className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                  alt="Merchants"
                  width="500"
                  height="500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Merchants;
