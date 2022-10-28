import React from "react";
import Image from "next/image";
import mockingbird from "../assets/mockingbird.png";
import dontsing from "../assets/dontsing.jpg";
import bird from "../assets/bird.png";

const SwiftlyGrid = () => {
  return (
    <>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div className="p-6">
              <Image
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={mockingbird}
                alt="blog"
              />

              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Base Pay
              </h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                You’ll always earn Base Pay for any delivery. Base Pay is
                calculated based on the estimated time, distance, and
                desirability of the order.
              </p>

              <div className="mt-4">
                <a
                  href="#"
                  className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                  title="read more"
                >
                  {" "}
                  Read More »{" "}
                </a>
              </div>
            </div>
            <div className="p-6">
              <Image
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={dontsing}
                alt="blog"
              />

              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Plus Tips
              </h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                When a order is made customers pay you a tip of R5 per order
                fulfilled with SwiftlyBox. You’ll always receive 100% of tips
                that customers leave you.
              </p>

              <div className="mt-4">
                <a
                  href="#"
                  className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                  title="read more"
                >
                  {" "}
                  Read More »{" "}
                </a>
              </div>
            </div>
            <div className="p-6">
              <Image
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={bird}
                alt="blog"
              />

              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Challenges
              </h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                We do love giving our SwiftlyDrivers a challenge to complete
                that will reward them a sum of money in their account. You’ll
                keep 100% of the challenges.
              </p>

              <div className="mt-4">
                <a
                  href="#"
                  className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                  title="read more"
                >
                  {" "}
                  Read More »{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SwiftlyGrid;
