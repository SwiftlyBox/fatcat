import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Image from "next/image";
import banner from "../assets/banner.jpg";
import canva from "../assets/canva.jpg";

import data from "../assets/data.jpg";

const TabsComponent = () => {
  return (
    <>
      <section>
        <h4 style={{ textAlign: "center", fontSize: 32, fontWeight: "900" }}>
          Delivering more
        </h4>
        <p style={{ textAlign: "center", fontSize: 16, fontWeight: "300" }}>
          When you think of SwiftlyBox, you think of delivery — but the
          SwiftlyBox Merchant is delivering more.
        </p>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div className="p-6">
              <Image
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={canva}
                alt="Home Kitchen"
                loading="lazy"
                layout="responsive"
              />

              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Start your restaurant
              </h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                Our Home Kitchen is a solution we had for entrepreneurs who
                wants to start a restaurant but {`don't`} have the capital to do
                so.Start your restaurant journey with us by your side.Start
                cooking in your own home kitchen and deliver your delicious food
                .
              </p>

              <div className="mt-4"></div>
            </div>
            <div className="p-6">
              <Image
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={banner}
                alt="Grow Online With SwiftlyBox"
                loading="lazy"
                layout="responsive"
              />

              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Grow Online With SwiftlyBox
              </h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                Introduce your store to new customers in your area interested in
                delivery, pickup, and more.
              </p>

              <div className="mt-4"></div>
            </div>
            <div className="p-6">
              <Image
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={data}
                alt="Attract New Customers"
                loading="lazy"
                layout="responsive"
              />

              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Attract new customers
              </h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                With SwiftlyBox you can expand your restaurant to nearby
                communities while you stay at your primary location.This will
                increase order volume for your business.With the help our data
                scrapper we will advise you on which location to expand to.
              </p>

              <div className="mt-4"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TabsComponent;
