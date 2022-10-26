import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer class="bg-white" aria-labelledby="footer-heading">
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="text-white xl:col-span-1">
              <div class="text-lg font-bold tracking-tighter text-black transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8">
                {" "}
                SwiftlyBox{" "}
              </div>
              <p class="w-1/2 mt-2 text-sm text-gray-500">
                The delivery platform for you
              </p>
            </div>
            <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-sm font-bold tracking-wider text-blue-500 uppercase">
                    Get to know us
                  </h3>
                  <ul role="list" class="mt-4 space-y-2">
                    <li>
                      <Link href="/aboutus">About Us</Link>
                    </li>

                    <li>
                      <Link href="/SwiftlyDriver">Become A Swiftly Driver</Link>
                    </li>
                    <li>
                      <Link href="/SwiftlyDriver">Become A Partner</Link>
                    </li>
                  </ul>
                </div>
                <div class="mt-12 md:mt-0">
                  <h3 class="text-sm font-bold tracking-wider text-blue-500 uppercase">
                    Make Money With Us
                  </h3>
                  <ul role="list" class="mt-4 space-y-2">
                    <li>
                      <Link href="/onBoard">Become A Partner</Link>
                    </li>
                    <li>
                      <Link href="/SwiftlyDriver">Become a Swiftly Driver</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-sm font-bold tracking-wider text-blue-500 uppercase">
                    Legal
                  </h3>
                  <ul role="list" class="mt-4 space-y-2">
                    <li>
                      <Link href="/Privacy"> Privacy Policy </Link>
                    </li>
                    <li>
                      <Link href="/Terms"> Terms </Link>
                    </li>
                  </ul>
                </div>
                <div class="mt-12 md:mt-0">
                  <h3 class="text-sm font-bold tracking-wider text-blue-500 uppercase">
                    Socials
                  </h3>
                  <ul role="list" class="mt-4 space-y-2">
                    <li>
                      <a href="https://www.crunchbase.com/organization/swiftlybox">
                        CrunchBase
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/swiftlybox/?viewAsMember=true">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://www.tiktok.com/@swiftlybox">TikTok </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/swiftlybox"> Twitter </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/swiftlybox/">
                        {" "}
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100083350375456">
                        FaceBook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-12 mx-auto bg-gray-50 max-w-7xl sm:px-6 lg:px-16">
          <div class="flex flex-wrap items-baseline">
            <span class="mt-2 text-sm font-bold text-black">
              2022 SwiftlyBox Technologies Inc. - All rights reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
