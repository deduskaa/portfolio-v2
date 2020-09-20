import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { getWorks } from '../../lib/works';
import { Layout } from '../../components/Layout';
import { AnimationProps, motion } from 'framer-motion';

export default function Works({ works }) {
  const list = {
    visible: (i) => ({
      opacity: [0, 0.75, 0],
      scale: 1.2,
      transition: {
        delay: i * 0.5,
        duration: 0.8,
      },
    }),
    hidden: { opacity: 0, scale: 1 },
    hover: { opacity: 1 },
  };

  return (
    <Layout>
      <Head>
        <title>Jenny Tran - Works</title>
      </Head>
      <motion.section
        className="py-6 max-w-screen-xl m-auto"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0, transition: { duration: 1 } }}
        transition={{ duration: 0.5, delay: 0.15 }}
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
                    custom={i}
                    animate="visible"
                    initial="hidden"
                    variants={{ ...list, hover: { opacity: 0.25 } }}
                    whileHover="hover"
                    className="absolute w-full flex flex-col items-center justify-center top-0 "
                  >
                    <img src={preview} alt={description} className="rounded-lg" />
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
