import "../styles/globals.css";
import "bulma/css/bulma.css";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import "bootstrap/dist/css/bootstrap.css";

import SEO from "@bradgarropy/next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <SEO
        title="SwiftlyBox Food Delivery & TakeOut From Restaurants Near You"
        description="Delivery & takeout from the best local restaurants. Breakfast, lunch, dinner and more, delivered safely to your door. No-contact delivery."
        keywords={[
          "restaurants near me	",
          "restaurants",
          "portfolio",
          "mrd food	",
          "food delivery near me",
          "takeout	",
        ]}
        icon="/favicon.ico"
        themeColor="#ffff"
        colorScheme="light"
        facebook={{
          image: "/banner.jpg",
          url: "https://swiftlybox.com",
          type: "website",
        }}
        twitter={{
          image: "/delivery.jpg",
          site: "@SwiftlyBox",
          card: "summary",
        }}
      />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
