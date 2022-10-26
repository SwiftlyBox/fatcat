import React from 'react'
import Image from "next/image";
import founder from "../assets/founder.jpg"
import nono from "../assets/nono.jpg"
import mom from "../assets/mom.jpg"


const Team = () => {
  return (
    <>
      <section>
        <h1
          style={{
            fontSize: 34,
            textAlign: "center",
            fontWeight: "900",
            marginTop: 150,
          }}
        >
          Team
        </h1>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div class="p-6">
              <Image
                class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={founder}
                alt="blog"
              />

              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Christopher Makombe
              </h1>
              <h7> Founder</h7>
              <p class="mx-auto text-base leading-relaxed text-gray-500">
                Hey ,My name is Christopher and I am the founder of SwiftlyBox.
                I started SwiftlyBox to help my favorite restaurant and me doing
                that everyday brings joy to my eyes.
              </p>

              <div class="mt-4"></div>
            </div>
            <div class="p-6">
              <Image
                class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={nono}
                alt="blog"
              />

              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Nothando Mapisa
              </h1>
              <h7> Accountant</h7>
              <p class="mx-auto text-base leading-relaxed text-gray-500">
                I work for my brothers tech startup because I see the passion in
                his eyes when trying to solve his problem his solving .
              </p>

              <div class="mt-4"></div>
            </div>
            <div class="p-6">
              <Image
                class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={mom}
                alt="blog"
              />

              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Loveness Mahwire
              </h1>
              <h7>Consultant</h7>
              <p class="mx-auto text-base leading-relaxed text-gray-500">
                I am proud of my son for reaching his goal ,he wanted to reach
                .He will always be a inspiration to me .I always say that he
                will kill himself until he helps a lot of people succeed.
              </p>

              <div class="mt-4"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
