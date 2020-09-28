import Head from 'next/head';
import { AnimateSharedLayout } from 'framer-motion';
import { TopNav } from './TopNav';
import { BottomNav } from './BottomNav';
import { Footer } from './Footer';

export const siteTitle = 'Jenny Tran - Software Developer';

export function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <div className="bg-black text-white">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-143253930-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-143253930-1');`,
          }}
        ></script>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={siteTitle} />
        <meta
          name="description"
          content="Jenny Tran is a front end developer from Espoo, Finland.  She likes to code cool websites and sometimes also designs stuff."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;800&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap" rel="stylesheet"></link>
      </Head>
      <AnimateSharedLayout type="crossfade">
        <TopNav />
        <main className="overflow-hidden">{children}</main>
        <footer>
          <Footer />
        </footer>
        <BottomNav />
      </AnimateSharedLayout>
    </div>
  );
}
