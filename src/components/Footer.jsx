import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-white" aria-labelledby="footer-heading">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="text-white xl:col-span-1">
              <div className="text-lg font-bold tracking-tighter text-black transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8">
                {" "}
                SwiftlyBox{" "}
              </div>
              <p className="w-1/2 mt-2 text-sm text-gray-500">
                The delivery platform for you
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-bold tracking-wider text-black uppercase">
                    Get to know us
                  </h3>
                  <ul role="list" className="mt-4 space-y-2 " style={{color: 'black'}}>
                    <li>
                      <Link href="/aboutus">About Us</Link>
                    </li>

                    <li>
                      <Link href="/SwiftlyDriver">Become A Swiftly Driver</Link>
                    </li>
                    <li>
                      <Link href="/SwiftlyDriver">Become A Partner</Link>
                    </li>
                    <Link href="https://tally.so/r/3q4x49">
                      <a className="navbar-item">Contact</a>
                    </Link>
                    <hr className="navbar-divider" />
                    <Link href="https://tally.so/r/wbZZ1E">
                      <a className="navbar-item">Report an issue</a>
                    </Link>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-bold tracking-wider text-black uppercase">
                    Make Money With Us
                  </h3>
                  <ul role="list" className="mt-4 space-y-2">
                    <li>
                      <Link href="/onBoard">Become A Partner</Link>
                    </li>
                    <li>
                      <Link href="/SwiftlyDriver">Become a Swiftly Driver</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-bold tracking-wider text-black uppercase">
                    Legal
                  </h3>
                  <ul role="list" className="mt-4 space-y-2">
                    <li>
                      <Link href="/Privacy"> Privacy Policy </Link>
                    </li>
                    <li>
                      <Link href="/Terms"> Terms </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-bold tracking-wider text-black uppercase">
                    Socials
                  </h3>
                  <ul role="list" className="mt-4 space-y-2">
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
        <div className="px-4 py-12 mx-auto bg-gray-50 max-w-7xl sm:px-6 lg:px-16">
          <div className="flex flex-wrap items-baseline">
            <span className="mt-2 text-sm font-bold text-black">
              2022 SwiftlyBox Technologies Inc. - All rights reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

// 
export default Footer;
