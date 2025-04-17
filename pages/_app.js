import "../styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 800,
        once: true,
        offset: window.innerHeight / 3, // dynamic midpoint
      });
    }
  }, []);

  return <Component {...pageProps} />;
}
