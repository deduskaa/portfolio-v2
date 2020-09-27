import Head from 'next/head';
import Link from 'next/link';
import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion';
import { Layout, siteTitle } from '../components/Layout';
import { Facts } from '../components/frontpage/Facts';
import { Story } from '../components/frontpage/Story';
import { Quotes } from '../components/frontpage/Quotes';

export default function Home() {
  const container = {
    visible: { opacity: 1, transition: { staggerChildren: 0.4 } },
    hidden: { opacity: 0 },
  };

  const image = {
    visible: { opacity: 1, y: 0, scale: [1, 1.02, 1] },
    hidden: { opacity: 0, y: 10, scale: 1 },
  };

  const text = {
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut' } },
    hidden: { opacity: 0, y: 10 },
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col lg:h-screen max-w-screen-xl m-auto mb-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex h-full justify-between items-center flex-wrap lg:-mt-24"
        >
          <motion.div
            variants={image}
            className="w-64 m-auto lg:max-w-45 md:max-w-md md:w-auto lg:ml-auto my-8 lg:my-12 md:order-2"
          >
            <img alt="Cartoon version of me" src="/images/cartoon_me.png" />
          </motion.div>
          <div className="mx-3 lg:mx-none">
            <motion.h1 variants={text} className="text-4xl lg:text-7xl font-default font-extrabold leading-tight">
              Hello, <br />
              <mark className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                I'm Jenny
              </mark>{' '}
              <motion.span
                animate={{ rotate: 10 }}
                initial={{ rotate: -10 }}
                transition={{
                  repeat: 4,
                  repeatType: 'mirror',
                  delay: 0.5,
                  stiffness: 0,
                }}
                whileHover={{ rotate: 20 }}
                className="inline-block"
              >
                👋🏽
              </motion.span>
            </motion.h1>
            <motion.p
              variants={text}
              className="text-xl lg:text-2xl font-default font-normal mt-6 max-w-sm leading-normal"
            >
              I like to code cool websites and sometimes I also design stuff.
            </motion.p>
            <Link href="/works/">
              <motion.a
                variants={text}
                className="my-8 inline-block text-xl font-bold lg:text-2xl text-purple-400 rounded-full hover:text-purple-600 transition duration-150 ease-in-out cursor-pointer"
              >
                See my work →
              </motion.a>
            </Link>
          </div>
        </motion.div>
        <div className="flex self-center">
          <svg
            className="hidden lg:block animate-bounce w-6 h-6 text-gray-100 mb-4 absolute bottom-0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>
      <Story />
      <Quotes />
      <Facts />
    </Layout>
  );
}
