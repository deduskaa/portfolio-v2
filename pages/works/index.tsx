import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { getWorks } from '../../lib/works';
import { Layout } from '../../components/Layout';

export default function Works({ works }) {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 1,
      },
    },
    hidden: { opacity: 0 },
    hover: { opacity: 1 },
  };

  const image = {
    visible: {
      opacity: [0, 0.75, 0],
      scale: [1, 1.2, 1],
      transition: { duration: 1 },
    },
    hidden: { opacity: 0, scale: 1 },
    hover: { opacity: 0.25 },
  };

  return (
    <Layout>
      <Head>
        <title>Jenny Tran - Works</title>
      </Head>
      <motion.section
        className="py-6 max-w-screen-xl m-auto"
        exit={{ opacity: 0, scale: 0, transition: { duration: 1 } }}
      >
        <motion.ul variants={list} className="mt-12 grid lg:grid-cols-2">
          {works.map(({ id, description, title, preview }, i) => (
            <motion.li whileHover="hover" variants={list} className="lg:my-32 relative py-12 group" key={id}>
              <Link href="/works/[id]" as={`/works/${id}`}>
                <a>
                  <h2 className="text-xl lg:text-6xl text-center font-default relative z-10 pointer-events-none">
                    {title}
                  </h2>
                  <motion.div
                    animate="visible"
                    initial="hidden"
                    variants={image}
                    whileHover="hover"
                    className="absolute w-full flex flex-col items-center justify-center top-0"
                  >
                    <img src={preview} alt={description} className="rounded-lg max-w-50 lg:max-w-full" />
                  </motion.div>
                  <motion.small
                    className="font-default text-xl text-center block m-auto"
                    initial="hidden"
                    variants={list}
                  >
                    {description}
                  </motion.small>
                </a>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const works = getWorks();
  return { props: { works } };
};
