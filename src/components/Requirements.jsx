import React from "react";

const Requirements = () => {
  return (
    <>
      <section>
        <h1 style={{ textAlign: "center", fontWeight: "900", fontSize: 34 }}>
          Requirements
        </h1>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl lg:mx-auto rounded-xl">
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                Swiftly Drivers should be 15 years or older
              </p>
              <h2 className="mt-4 text-lg font-bold tracking-widest text-blue-500 uppercase">
                Age
              </h2>
            </div>
            <div className="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl lg:mx-auto rounded-xl">
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                <ul
                  style={{
                    fontSize: 19,
                    textAlign: "center",
                    fontWeight: "400",
                  }}
                >
                  <li> Any car</li>
                  <li> Bicycle</li>
                  <li>Scooter</li>
                </ul>
              </p>
              <h2 className="mt-4 text-lg font-bold tracking-widest text-blue-500 uppercase">
                Vehicle
              </h2>
            </div>
            <div className="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl lg:mx-auto rounded-xl">
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                <ul
                  style={{
                    fontSize: 19,
                    textAlign: "center",
                    fontWeight: "400",
                  }}
                >
                  <li> Driver license</li>
                  <li> Identity Book Or Passport</li>
                  <li> Police Clearance</li>
                  <li>Bank Confirmation Letter</li>
                  <li> Proof of Address</li>
                </ul>
              </p>
              <h2 className="mt-4 text-lg font-bold tracking-widest text-blue-500 uppercase">
                Documentation
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Requirements;
