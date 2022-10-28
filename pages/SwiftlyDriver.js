import React from 'react'
import SwiftlyDriverHero from '../src/components/SwiftlyDriverHero';
import SwiftlyGrid from '../src/components/SwiftlyGrid';
import Requirements from "../src/components/Requirements"
import Head from "next/head";


const SwiftlyDriver = () => {
  return (
    <>
      <Head>
        <title>  Become A Swiftly Driver| Drive & Deliver with SwiftlyBox </title>
        <meta
          name="description"
          content="SwiftlyBox connects local restaurants to customers, cutting out the middleman and giving customers the convenience of having their favorite restaurants delivered right to their door."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SwiftlyDriverHero />
      <SwiftlyGrid />
      <Requirements />
    </>
  );
}

export default SwiftlyDriver;
