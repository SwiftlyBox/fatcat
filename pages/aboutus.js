import React from "react";
import Impact from "../src/components/Impact";
import Media from "../src/components/Media";
import Merchants from "../src/components/Merchants";
import SwiftlyDrive from "../src/components/SwiftlyDrive";
import Team from "../src/components/Team";
import WhoWeAre from "../src/components/WhoWeAre";
import WhoWeServe from "../src/components/WhoWeServe";

const AboutUs = () => {
  return (
    <>
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
