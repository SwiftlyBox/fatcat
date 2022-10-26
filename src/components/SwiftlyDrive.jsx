import React from "react";
import Image from "next/image";
import dontsing from "../assets/dontsing.jpg";

const SwiftlyDrive = () => {
  return (
    <>
      <section>
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div class="flex flex-wrap items-center mx-auto max-w-7xl">
            <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div class="relative w-full max-w-lg">
                  <div class="absolute top-0 rounded-full bg-violet-700 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div class="absolute rounded-full bg-fuchsia-500 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div class="relative">
                    <Image
                      class="object-cover object-center mx-auto rounded-lg shadow-2xl"
                      alt="Customer"
                      src={dontsing}
                      width="500"
                      height="500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                About Us
              </span>
              <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                Swiftly Drivers
              </h1>
              <p class="mb-8 text-base leading-relaxed text-left text-gray-500">
                Delivering with SwiftlyBox allows you to earn money when and how
                you want.Drive quickly for a long term goal,and do it all on
                your terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SwiftlyDrive;
