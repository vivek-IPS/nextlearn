import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import "../styles/globals.css";
import Navbar from "@/modules/Navbar";
import Script from "next/script";
// import("bootstrap/dist/js/bootstrap");
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <Script
        src="/assets/js/main.js"
        onLoad={() => {
          console.log("Script has loaded");
        }}
      ></Script> */}
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;