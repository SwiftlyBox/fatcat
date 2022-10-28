import React from "react";

const Impact = () => {
  return (
    <>
      <div
        className="overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true fixed inset-0 z-10"
      >
        <div className="flex items-end justify-center min- px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="transition-opacity bg-gray-500 bg-opacity-75"
            aria-hidden="true"
          ></div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:"
            aria-hidden="true"
          ></span>
          <div className="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
            <div>
              <div className="mt-3 text-left sm:mt-5">
                <h2
                  className="mb-8 text-xs font-semibold tracking-widest text-blue-500 uppercase"
                  style={{ textAlign: "center" }}
                >
                  Our Impact
                </h2>
                <h1 className="mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
                  SwiftlyBox Impact To The World
                </h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">
                  We are shifting the misconceptions that you need millions to
                  start your dream restaurant.Our Goal is to provide a platform
                  for exiting restaurants and entrepreneurs to start their
                  restaurant journey with us.Swiftly Drivers earn a sustainable
                  income which by they can support their families and friends.
                  <br />
                  It takes a mountain to change peoples lives and we are that
                  mountain for you.
                </p>
              </div>
            </div>
            <div className="mt-6 sm:flex">
              <a
                href="mailto:christopher@swiftlybox.com"
                style={{ color: "black" }}
              >
                <button type="button" className="is-primary">
                  Funding Email
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Impact;
