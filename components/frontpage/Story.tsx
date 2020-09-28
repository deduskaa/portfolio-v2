import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion';
import JS from '../../public/icons/javascript.svg';
import TS from '../../public/icons/typescript.svg';
import Node from '../../public/icons/nodejs.svg';
import Git from '../../public/icons/git.svg';
import ReactIcon from '../../public/icons/react.svg';
import Webpack from '../../public/icons/webpack.svg';
import CSS from '../../public/icons/css3.svg';
import Sass from '../../public/icons/sass.svg';
import Redux from '../../public/icons/redux.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Story = () => {
  const [scrolledTo, setScrolledTo] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const scaleValues = useTransform(scrollYProgress, [0, 0.5], [0.6, 1.6]);
  const scaleBall = useSpring(scaleValues, { stiffness: 400, damping: 90 });

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4, delayChildren: 0.3 } },
  };

  const text = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const spanVariant = {
    hidden: { backgroundColor: '#fff', color: '#222', opacity: 0, y: 0 },
    visible: { backgroundColor: '#d53f8c', color: '#fff', opacity: 1, y: 20 },
  };

  const spanAnimateProp = scrolledTo ? 'visible' : 'hidden';

  useEffect(() => {
    scrollYProgress.onChange((e) => {
      !scrolledTo && e > 0.1 && setScrolledTo(true);
    });
  }, []);

  return (
    <motion.section
      animate={spanAnimateProp}
      initial="hidden"
      variants={container}
      className="max-w-screen-xl mx-3 lg:m-auto"
    >
      <motion.h3 className="text-3xl lg:text-4xl font-default font-extrabold leading-tight mb-4 lg:text-left">
        I like <motion.span className="text-pink-600">JavaScript</motion.span> and everything web,
      </motion.h3>
      <motion.p variants={text} className="text-xl lg:text-2xl font-default max-w-lg leading-normal mb-8 pb-8 lg:mb-24">
        I have solid knowledge of JavaScript and its ecosystem, including experience from jQuery to Node.js. I aim for{' '}
        <motion.span variants={spanVariant} className="">
          readability
        </motion.span>{' '}
        and{' '}
        <motion.span variants={spanVariant} className="bg-pink-600">
          maintainability
        </motion.span>{' '}
        in my code and{' '}
        <motion.span variants={spanVariant} className="bg-pink-600">
          usability
        </motion.span>{' '}
        and{' '}
        <motion.span variants={spanVariant} className="bg-pink-600">
          accessability
        </motion.span>{' '}
        in the end product.
      </motion.p>
      <div className="relative">
        <motion.h3
          variants={text}
          className="text-3xl lg:text-4xl font-default font-extrabold leading-tight mb-4 lg:text-right relative z-10"
        >
          but I love <span className="text-pink-600">CSS</span> with its quirks and all.
        </motion.h3>
        <motion.p
          variants={text}
          className="text-xl lg:text-2xl font-default max-w-lg leading-normal lg:text-right lg:ml-auto mb-8 pb-8 lg:mb-24 relative z-10"
        >
          I have hands-on experience with modern CSS frameworks and have built massive websites from scratch.
        </motion.p>
        <motion.div
          style={{ scale: scaleBall, top: '-20%' }}
          className="rounded-full w-64 h-64 bg-gradient-to-r from-pink-600 to-purple-600 absolute right-0 z-0 top-0 hidden lg:block"
        ></motion.div>
      </div>
      <motion.h3 variants={text} className="text-3xl lg:text-4xl font-default font-extrabold leading-tight mb-4">
        All in all, <span className="text-purple-400">web development</span> is my jam.
      </motion.h3>
      <motion.p variants={text} className="text-xl lg:text-2xl font-default max-w-lg leading-normal">
        APIs, version control, testing libraries, CI/CD pipelines, cloud services... I've not seen them all but I've
        worked with a lot of them.
      </motion.p>
      <motion.p
        variants={text}
        className="text-xl lg:text-2xl font-default max-w-lg leading-normal my-4 lg:text-right lg:ml-auto"
      >
        Currently working as a{' '}
        <a
          href="https://www.columbiaroad.com/blog/jenny-tran-joins-columbia-road"
          className="bg-purple-400 hover:underline"
        >
          Software Developer at Columbia Road
        </a>{' '}
        helping companies growth hack through their websites and other digital channels.
      </motion.p>
      <div className="flex flex-col items-center mt-8 lg:my-16">
        <Link href="/works/">
          <a className="px-4 py-2 text-xl font-bold lg:text-2xl text-purple-400 rounded-full hover:text-purple-600 transition duration-150 ease-in-out">
            See my work →
          </a>
        </Link>
      </div>
      <div className="flex justify-evenly flex-wrap py-12 border-t border-b border-gray-600 mb-12 mt-8 lg:mb-24 lg:mt-20 relative">
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
    </motion.section>
  );
};
