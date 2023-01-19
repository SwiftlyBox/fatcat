import Head from 'next/head'
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
      <Head>
        <title>
          {" "}
          SwiftlyBox Food Delivery & TakeOut From Restaurants Near You
        </title>
        <meta
          name="description"
          content="Delivery & takeout from the best local restaurants. Breakfast, lunch, dinner and more, delivered safely to your door. No-contact delivery."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomeHero />
      <Card />
      <AppHero />
      <Hero />
    </>
  );
}
