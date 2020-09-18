import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { Layout } from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { Date } from '../../components/Date';

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
      <article>
        <h1 className="text-2xl font-default">{postData.title}</h1>
        <div className="text-xl font-default text-gray-600">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
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
