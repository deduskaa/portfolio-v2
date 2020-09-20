import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { Layout } from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { Date } from '../../components/Date';
import { AnimatePresence, motion } from 'framer-motion';

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <AnimatePresence>
        <motion.article
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 1, delay: 0.15 }}
          style={{ pointerEvents: 'auto' }}
        >
          <motion.h1 className="text-2xl font-default" layoutId="blog">
            {postData.title}
          </motion.h1>
          <div className="text-xl font-default text-gray-600">
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </motion.article>
      </AnimatePresence>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return { props: { postData } };
};
