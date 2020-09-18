import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layout, siteTitle } from '../components/Layout';
import Quote from '../public/icons/quote.svg';
import JS from '../public/icons/javascript.svg';
import TS from '../public/icons/typescript.svg';
import Node from '../public/icons/nodejs.svg';
import Git from '../public/icons/git.svg';
import ReactIcon from '../public/icons/react.svg';
import Webpack from '../public/icons/webpack.svg';
import CSS from '../public/icons/css3.svg';
import Sass from '../public/icons/sass.svg';
import Redux from '../public/icons/redux.svg';

export default function Home() {
  const testimonies = [
    'So easy and fun to work with. Approachable and able to communicate clearly. Not something to take granted in this industry.',
    'Good team working skills, creates an open culture around her with her positiveness.',
    'She is a fast learner and a highly motivated individual, someone every developer and manager would like to work with.',
  ];
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col lg:h-screen max-w-screen-xl m-auto mb-12">
        <div className="flex h-full justify-between items-center flex-wrap -mt-24">
          <motion.div
            animate={{ y: 0, opacity: 1, scale: [1, 1.02, 1] }}
            transition={{
              stiffness: 0,
              duration: 0.5,
            }}
            initial={{ y: 10, opacity: 0.1, scale: 1 }}
            className="w-64 lg:max-w-45 md:max-w-md md:w-auto mx-auto lg:ml-auto my-8 lg:my-12 md:order-2"
          >
            <img alt="Cartoon version of me" src="/images/cartoon_me.png" />
          </motion.div>
          <div className="mx-3 lg:mx-none">
            <motion.h1
              animate={{ opacity: 1 }}
              initial={{ opacity: 0.1 }}
              className="text-4xl lg:text-7xl font-default font-extrabold leading-tight"
            >
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
            <p className="text-xl lg:text-2xl font-default font-normal mt-6 max-w-sm leading-normal">
              I like to code cool websites and sometimes I also design stuff.
            </p>
            <Link href="/works/">
              <a className="my-8 inline-block text-xl font-bold lg:text-2xl text-purple-400 rounded-full hover:text-purple-600 transition duration-150 ease-in-out">
                See my work →
              </a>
            </Link>
          </div>
        </div>
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
      <section className="max-w-screen-xl mx-3 lg:m-auto ">
        <h3 className="text-3xl lg:text-4xl font-default font-extrabold leading-tight mb-4 lg:text-left">
          I like <span className="text-pink-600">JavaScript</span> and everything web,
        </h3>
        <p className="text-xl lg:text-2xl font-default max-w-lg leading-normal mb-8 border-b pb-8 border-gray-600 lg:border-none lg:mb-24">
          I have solid knowledge of JavaScript and its ecosystem, including experience from jQuery to Node.js. I aim for{' '}
          <span className="bg-pink-600">readability</span> and <span className="bg-pink-600">maintainability</span> in
          my code and <span className="bg-pink-600">usability</span> and{' '}
          <span className="bg-pink-600">accessability</span> in the end product.
        </p>
        <h3
          className="text-3xl lg:text-4xl font-default font-extrabold leading-tight mb-4 lg:text-right"
          id="trigger-left"
        >
          but I love <span className="text-pink-600">CSS</span> with its quirks and all.
        </h3>
        <p
          className="text-xl lg:text-2xl font-default max-w-lg leading-normal text-left lg:text-right ml-auto mb-8 border-b pb-8 border-gray-600 lg:border-none lg:mb-24"
          id="trigger-left"
        >
          I have hands-on experience with modern CSS frameworks and have built massive websites from scratch.
        </p>
        <h3 id="trigger-right2" className="text-3xl lg:text-4xl font-default font-extrabold leading-tight mb-4">
          In short, <span className="text-purple-400">web development</span> is my jam.
        </h3>
        <p className="text-xl lg:text-2xl font-default max-w-lg leading-normal">
          REST APIs, Git, Jest, Jenkins, AWS, Azure, these are only some of the tools I've worked with during my career.
          I've also created UI designs for big and complex services.
        </p>
        <p className="text-xl lg:text-2xl font-default max-w-lg leading-normal lg:text-right ml-auto">
          I'm currently working as a{' '}
          <a
            href="https://www.columbiaroad.com/blog/jenny-tran-joins-columbia-road"
            className="bg-purple-400 hover:underline"
          >
            Software Developer at Columbia Road
          </a>{' '}
          helping companies growth hack through their websites and other digital channels. I've worked on big projects
          with millions of
        </p>
        <div className="flex flex-col items-center mt-8 lg:my-20">
          <Link href="/works/">
            <a className="px-4 py-2 text-xl font-bold lg:text-2xl text-purple-400 rounded-full hover:text-purple-600 transition duration-150 ease-in-out">
              See my work →
            </a>
          </Link>
        </div>
        <div className="flex justify-evenly flex-wrap py-12 border-t border-b border-gray-600 my-12 lg:mb-24 lg:mt-20">
          <CSS width="72" height="72" />
          <Sass width="72" height="72" />
          <JS width="72" height="72" />
          <TS width="72" height="72" />
          <ReactIcon width="72" height="72" />
          <Redux width="72" height="72" />
          <Node width="72" height="72" />
          <Webpack width="72" height="72" />
          <Git width="72" height="72" />
        </div>
      </section>
      <section className="max-w-screen-xl mx-3 lg:m-auto mb-24">
        <h2 className="text-3xl lg:text-4xl font-default font-extrabold leading-tight">
          Overheard about <span className="text-purple-600">Jenny</span> 👂🏽
        </h2>
        <div className="grid lg:grid-cols-3 gap-6 my-4">
          {testimonies.map((text, i) => (
            <blockquote
              key={i}
              className="relative text-lg font-default lg:mt-8 max-w-lg leading-normal lg:my-16 py-12 px-10 rounded-lg shadow-md italic border border-gray-600"
            >
              <Quote fill="#fff" width="28" height="28" className="absolute top-0 left-0 m-3" />
              {text}
              <Quote
                fill="#fff"
                width="28"
                height="28"
                className="absolute bottom-0 right-0 m-3 transform rotate-180"
              />
            </blockquote>
          ))}
        </div>
      </section>
      <section className="bg-black-light py-8">
        <div className="max-w-screen-xl m-auto">
          <h2 className="text-4xl font-default font-extrabold leading-tight">Fun facts</h2>
          <ul>
            <li>I can lick my elbow.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
