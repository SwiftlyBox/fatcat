import React from 'react'
import merchants from "../assets/merchants.jpg";
import Image from "next/image";

const DriverTraining = () => {
  return (
    <>
      <section className="mb-40">
        <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 gap-12  items-center">
              <div className="mt-12 lg:mt-0">
                <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                  SwiftlyDriver
                </span>
                <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                  SwiftlyDriver Training
                </h1>
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
                  As a SwiftlyBox driver, you will be part of a team dedicated
                  to providing our customers with an exceptional delivery
                  experience. The training we provide will not only help you
                  perform your job more efficiently, but it will also provide
                  you with the skills and confidence you need to interact
                  professionally with customers. We recognize that our drivers
                  are the face of our company, and we want to make certain that
                  you are well-prepared to represent us positively. We are
                  delighted to welcome you to the SwiftlyBox team and look
                  forward to working with you to provide the best delivery
                  service possible to our customers.
                </p>
              </div>
              <div className="mb-12 lg:mb-0">
                <Image
                  src={merchants}
                  className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                  alt="Merchants"
                  width="500"
                  height="500"
                  loading="lazy"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DriverTraining;
