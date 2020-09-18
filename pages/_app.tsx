import '../styles/global.css';
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (AOS.refresh() === undefined) {
      AOS.init({ duration: 400 });
    }
  }, []);

  return <Component {...pageProps} />;
}
