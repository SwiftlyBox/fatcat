import React from 'react' 
import HeroStore from '../src/components/HeroStore';
import StoreSignUp from '../src/components/StoreSignUp';
import Tabs from '../src/components/Tabs';
import Head from "next/head";



const onBoard = () => {
  return (
    <>
    <Head>
        <title> SwiftlyBox for  Merchants | Get Started</title>
        <meta
          name="description"
          content="Grow your sales and increase business margins with SwiftlyBox. List on the SwiftlyBox app . Business types: Restaurants, Grocery, Alcohol, Flower Shops, and more."/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StoreSignUp/>
      <Tabs/>
      <HeroStore/>
    </>
  )
}

export default onBoard;
