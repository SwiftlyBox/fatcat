import '../styles/globals.css';
import "bulma/css/bulma.css";
import NavBar from '../src/components/NavBar'
import Footer from "../src/components/Footer";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
