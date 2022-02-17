import "../assets/styles/globals.css";
import Menu from "../components/containers/Menu";
import Footer from "../components/elements/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
