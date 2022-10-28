import React from "react";
import Impact from "../src/components/Impact";
import Media from "../src/components/Media";
import Merchants from "../src/components/Merchants";
import SwiftlyDrive from "../src/components/SwiftlyDrive";
import Team from "../src/components/Team";
import WhoWeAre from "../src/components/WhoWeAre";
import WhoWeServe from "../src/components/WhoWeServe";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | SwiftlyBox</title>
        <meta
          name="description"
          content="SwiftlyBox connects local restaurants to customers, cutting out the middleman and giving customers the convenience of having their favorite restaurants delivered right to their door."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <WhoWeAre />
      <WhoWeServe />
      <Merchants />
      <SwiftlyDrive />
      <Team />
      <Impact />
      <Media />
    </>
  );
};
export default AboutUs;
