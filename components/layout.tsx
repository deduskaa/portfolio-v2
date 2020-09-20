import Head from 'next/head';
import Link from 'next/link';
import { TopNav } from './TopNav';
import { BottomNav } from './BottomNav';
import { Footer } from './Footer';
import { AnimateSharedLayout } from 'framer-motion';

const name = 'Jenny Tran';
export const siteTitle = 'JENNY TRAN - FULL STACK DESIGNER';

export function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <div className="bg-black text-white">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;800&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap" rel="stylesheet"></link>
      </Head>
      <AnimateSharedLayout type="crossfade">
        <TopNav />
        <main className="">{children}</main>
        <footer>
          <Footer />
        </footer>
        <BottomNav />
      </AnimateSharedLayout>
    </div>
  );
}
