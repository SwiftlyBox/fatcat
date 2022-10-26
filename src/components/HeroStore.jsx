import React from "react";

const HeroStore = () => {
  return (
    <>
      <section>
        <div
          class="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl"
          style={{ marginTop: 80 }}
        >
          <h1 style={{ textAlign: "center", fontWeight: "900", fontSize: 34 }}>
            Pricing
          </h1>
          <div>
            <div class="relative p-10 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 rounded-xl">
              <div class="relative flex flex-col p-8 bg-white">
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-neutral-600">
                    Startup
                  </h3>
                  <p class="flex items-baseline mt-4 text-neutral-600">
                    <span class="text-5xl font-extrabold tracking-tight">
                      18%
                    </span>
                    <span class="ml-1 text-xl font-semibold">/per order</span>
                  </p>
                  <p class="mt-6 text-gray-500">
                    The essentials for a start on our platform.
                  </p>

                  <ul role="list" class="pt-6 mt-6 space-y-6 border-t">
                    <span class="text-lg font-semibold text-neutral-600">
                      {`What's`} included?
                    </span>
                    <li class="flex">
                      <div class="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg
                          class="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="ml-3 text-neutral-600">Unlimited Meals</span>
                    </li>
                    <li class="flex">
                      <div class="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg
                          class="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="ml-3 text-neutral-600">
                        Up to 100 Discount Codes {" "}
                      </span>
                      
                    </li>
                    <li class="flex">
                      <div class="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg
                          class="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="ml-3 text-neutral-600">
                        24/7 Support Line
                      </span>
                    </li>
                    <li class="flex">
                      <div class="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg
                          class="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="ml-3 text-neutral-600">Weekly Payouts</span>
                    </li>
                  </ul>
                </div>
                <div class="mt-6 rounded-lg">
                  <a
                    type="highlight"
                    class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
                  >
                    {" "}
                    Get Started{" "}
                  </a>
                </div>
              </div>
              <div class="relative flex flex-col p-8 bg-blue-600 rounded-2xl">
                <div class="relative flex-1">
                  <h3 class="text-xl font-semibold text-white">Enterprise</h3>
                  <p class="flex items-baseline mt-4 text-white">
                    <span class="text-5xl font-extrabold tracking-tight">
                      27%
                    </span>
                    <span class="ml-1 text-xl font-semibold">/per order</span>
                  </p>
                  <p class="mt-6 text-white text-solitud">
                    A plan that scales with your rapidly growing business.
                  </p>
                  <ul role="list" class="pt-6 mt-6 space-y-6 border-t">
                    <span class="text-lg font-semibold text-white">
                      {`What's `}included?
                    </span>
                    <li class="flex">
                      <div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                        <svg
                          class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="ml-3 text-white">Unlimited Meals</span>
                    </li>
                    <li class="flex">
                      <div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                        <svg
                          class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="ml-3 text-white">
                        Unlimited Discount Codes
                      </span>
                    </li>
                    <li class="flex">
                      <div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                        <svg
                          class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="ml-3 text-white">27/7 Support Line </span>
                    </li>
                    <li class="flex">
                      <div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                        <svg
                          class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="ml-3 text-white">Daily Payouts</span>
                    </li>
                    <li class="flex">
                      <div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                        <svg
                          class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="ml-3 text-white">
                        Unlimited Restaurant Location
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="z-50 mt-6 rounded-lg">
                  <a
                    type="highlight"
                    class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
                  >
                    {" "}
                    Get started{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroStore;
