import Image from "next/image";
import React from "react";
import dont from "../assets/dont.png";
import grow from "../assets/grow.png";
import app from "../assets/app.png";
import mockingbird from "../assets/mockingbird.png";
import dontsing from "../assets/dontsing.jpg";
import bird from "../assets/bird.png";
import Link from "next/link";


const Card = () => {
  return (
    <>
      <section>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div class="p-6">
              <Image
                class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={dont}
                alt="blog"
              />

              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Become A SwiftlyDriver
              </h1>
              <p class="mx-auto text-base leading-relaxed text-gray-500">
                As a delivery driver, {`you'll`} make reliable money—working
                anytime, anywhere.
              </p>

              <div class="mt-4">
                <Link href="/SwiftlyDriver">
                  <a class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600">
                    {" "}
                    Start Earning{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div class="p-6">
              <Image
                class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={grow}
                alt="blog"
              />

              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Become a Partner
              </h1>
              <p class="mx-auto text-base leading-relaxed text-gray-500">
                Grow your business and reach new customers by partnering with
                us.
              </p>

              <div class="mt-4">
                <Link href="/onBoard">
                  <a class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600">
                    {" "}
                    Sign up your store{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div class="p-6">
              <Image
                class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={app}
                alt="blog"
              />

              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Try the App
              </h1>
              <p class="mx-auto text-base leading-relaxed text-gray-500">
                Experience the best your neighborhood has to offer, all in one
                app.
              </p>

              <div class="mt-4">
                <Link href="/onBoard">
                  <a class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600">
                    {" "}
                    Get the app{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Card;
