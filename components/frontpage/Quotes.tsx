import { AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react';
import Quote from '../../public/icons/quote.svg';

export const Quotes = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const testimonies = [
    {
      text:
        'So easy and fun to work with. Approachable and able to communicate clearly. Not something to take granted in this industry.',
      person: { name: 'Teammate', title: 'Software Developer, Reaktor' },
    },
    {
      text: 'Good team working skills, creates an open culture around her with her positiveness.',
      person: { name: 'Team lead', title: 'Project Manager, Kesko' },
    },
    {
      text:
        'She is a fast learner and a highly motivated individual, someone every developer and manager would like to work with.',
      person: { name: 'Teammate', title: 'Software Developer, 8-bit sheep' },
    },
  ];

  const quote = {
    visible: { opacity: 1, y: [20, -20], transition: { duration: 0.35, ease: 'easeOut' } },
    hidden: { opacity: 0, y: [0, 20], transition: { duration: 0.35, ease: 'easeOut' } },
  };

  const button = {
    active: { color: '#111', transition: { ease: 'easeOut' } },
    default: { color: '#fff' },
  };

  const buttonBg = {
    active: { y: 0, transition: { ease: 'easeOut' } },
    default: { y: '100%' },
  };

  const showQuote = (i: number) => {
    setVisibleIndex(i);
  };

  return (
    <section className="max-w-screen-xl mx-3 lg:mx-auto lg:my-32">
      <h2 className="text-3xl lg:text-4xl font-default font-extrabold leading-tight">
        Overheard about <span className="text-purple-600 block lg:inline-block">Jenny 👂🏽</span>
      </h2>
      <AnimateSharedLayout>
        <div className="grid lg:grid-cols-3 mt-12 mb-20">
          {testimonies.map(({ text, person }, i) => (
            <motion.div layout className="flex flex-col items-center relative">
              {i === visibleIndex && (
                <motion.div
                  layoutId="line"
                  animate={{ width: '100%' }}
                  initial={{ x: 0 }}
                  className="w-full h-1 rounded-full bg-white absolute left-0 hidden lg:block"
                ></motion.div>
              )}
              <motion.blockquote
                animate={i === visibleIndex ? 'visible' : 'hidden'}
                initial="hidden"
                variants={quote}
                key={i}
                className="text-2xl font-default max-w-lg leading-normal lg:mt-8 my-16 pt-20 pb-10 px-8 mt-5 rounded-lg hidden lg:block"
              >
                ‟ {text} ”
              </motion.blockquote>
              <blockquote className="text-lg font-default max-w-lg leading-normal pt-2 lg:pt-20 pb-10 px-2 mt-5 rounded-lg lg:hidden shadow-md">
                ‟ {text} ”<span className="block text-white opacity-75 mt-2 text-sm">- {person.title}</span>
              </blockquote>
              <motion.button
                variants={button}
                animate={i === visibleIndex ? 'active' : 'default'}
                className="text-xl font-breadText mt-auto border-b border-gray-100 p-8 w-full text-center relative overflow-hidden hidden lg:block"
                onClick={() => showQuote(i)}
              >
                <span className="block relative z-10">{person.name}</span>
                <span className="block relative z-10">{person.title}</span>
                <motion.div
                  variants={buttonBg}
                  className="h-full w-full absolute bg-white top-0 left-0 z-0 pointer-events-none"
                ></motion.div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </AnimateSharedLayout>
    </section>
  );
};
