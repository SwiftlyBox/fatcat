import React from 'react' 
import HeroStore from '../src/components/HeroStore';
import StoreSignUp from '../src/components/StoreSignUp';
import Tabs from '../src/components/Tabs';


const onBoard = () => {
  return (
    <>
      <StoreSignUp/>
      <Tabs/>
      <HeroStore/>
    </>
  )
}

export default onBoard;
