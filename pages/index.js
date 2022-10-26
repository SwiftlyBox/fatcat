import Head from 'next/head'
import Image from 'next/image'
import AppHero from '../src/components/AppHero'
import Card from '../src/components/Card'
import Hero from '../src/components/Hero,'
import HomeHero from '../src/components/HomeHero'
import NavBar from '../src/components/NavBar'
import Footer from '../src/components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    
      <HomeHero />
      <Card/>
      <AppHero/>
      <Hero/>
    </>
  );
}
