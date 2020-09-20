import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Layout } from '../../components/Layout';
import { Date } from '../../components/Date';
import { getSortedPostsData } from '../../lib/posts';
import { AnimatePresence, motion } from 'framer-motion';

export default function Blog({ posts }) {
  return (
    <Layout>
      <AnimatePresence>
        <motion.section
          className="max-w-screen-xl m-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          transition={{ duration: 1, delay: 0.15 }}
          style={{ pointerEvents: 'auto' }}
        >
          <h1 className="text-4xl">Blog</h1>
          <p>
            I don't actually have a blog, since I'm not a blogger but here are some interesting stuff I've been part of.
          </p>
          <ul className="my-8 grid grid-cols-2 items-center">
            {posts.map(({ id, date, title, thumbnail }) => (
              <li className="my-16 flex flex-col items-center" key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a className="text-center">
                    <img className="max-w-xs mb-4 m-auto" src={thumbnail} alt={title} />
                    <motion.p layoutId={id}>{title}</motion.p>
                  </a>
                </Link>
                <br />
                <small className="">
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
