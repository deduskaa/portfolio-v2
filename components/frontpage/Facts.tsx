import { motion } from 'framer-motion';
import { useState } from 'react';

export const Facts = () => {
  const [renderedFacts, setRenderedFacts] = useState<Array<string>>([]);
  const facts = [
    'I can lick my elbow 💪🏼',
    'I once won second place in a dance game competition 🥈',
    'My corona time hobby was sour dough baking 🍞',
    'I have completed the Hoenn Pokédex 🧢',
  ];
  const allFactsShowed = renderedFacts.length === facts.length;

  const getRandomNumber = () => Math.round(Math.random() * Math.floor(facts.length - 1));

  const showFact = () => {
    const randomNumber = getRandomNumber();
    if (renderedFacts.includes(facts[randomNumber]) && !allFactsShowed) {
      showFact();
      return;
    }
    const newFacts = [...renderedFacts, facts[randomNumber]];

    setRenderedFacts(newFacts);
  };

  return (
    <section className="bg-black-light py-8 mt-40 mb-24">
      <div className="max-w-screen-xl m-auto flex flex-col items-center">
        <h2 className="text-4xl font-default font-extrabold leading-tight mb-8">
          Want to hear <span className="text-blue-600">fun facts</span>?
        </h2>
        <motion.button
          whileTap={{ scale: [1, 1.3, 1] }}
          disabled={allFactsShowed}
          onClick={showFact}
          className="px-4 py-2 rounded-full text-xl bg-blue-600 disabled:bg-gray-800 disabled:cursor-not-allowed"
        >
          {allFactsShowed ? 'I have nothing more to tell you' : 'Tell me more'}
        </motion.button>
        <ul className="flex flex-col my-4 items-center">
          {renderedFacts.length > 0 &&
            renderedFacts.map((fact, i) => (
              <motion.li
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                key={i}
                className="text-xl flex-1 my-2 mr-4 py-2 px-4 rounded-full bg-blue-600"
              >
                {fact}
              </motion.li>
            ))}
        </ul>
      </div>
    </section>
  );
};
