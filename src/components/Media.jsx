import React from "react";

const Media = () => {
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
          <div className="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-emerald-700	 rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
            <div>
              <div className="mt-3 text-left sm:mt-5">
                <h2
                  className="mb-8 text-xs font-semibold tracking-widest text-black	 uppercase"
                  style={{ textAlign: "center" }}
                >
                  For Media Inquires
                </h2>
                <h1 className="mb-8 text-2xl font-semibold leading-none tracking-tighter text-black	">
                  You can reach us on
                </h1>
                <p className="mx-auto text-base leading-relaxed text-black">
                  <a
                    href="mailto:support@swiftlybox.com"
                    style={{ color: "black" }}
                  >
                    support@swiftlybox.com
                  </a>
                  <br />
                </p>
              </div>
            </div>
            <div className="mt-6 sm:flex"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
