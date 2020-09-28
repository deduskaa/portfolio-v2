import { GetStaticProps } from 'next';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout } from '../../components/Layout';
import { Date } from '../../components/Date';
import { getSortedPostsData } from '../../lib/posts';

export default function Blog({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Jenny Tran - Works</title>
      </Head>
      <AnimatePresence>
        <motion.section
          className="max-w-screen-xl m-auto p-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          transition={{ duration: 1, delay: 0.15 }}
          style={{ pointerEvents: 'auto' }}
        >
          <h1 className="text-4xl lg:text-5xl font-default font-semibold">Blog</h1>
          <p>I don't actually have a blog but here are some interesting stuff I've been part of.</p>
          <ul className="my-8 grid lg:grid-cols-2 items-center">
            {posts.map(({ id, date, title, thumbnail }) => (
              <li className="my-16 flex flex-col items-center" key={id}>
                <p className="text-center">
                  <img className="max-w-sm mb-4 m-auto" src={thumbnail} alt={title} />
                  <motion.p layoutId={id}>{title}</motion.p>
                </p>
                <small className="my-2">
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </motion.section>
      </AnimatePresence>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData();
  return { props: { posts } };
};
