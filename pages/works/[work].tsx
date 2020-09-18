import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { Layout } from '../../components/Layout';
import { getAllWorkIds, getWork } from '../../lib/works';

export default function Work({
  work,
}: {
  work: {
    title: string;
    description: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{work.title}</title>
      </Head>
      <article className="max-w-screen-xl m-auto py-12">
        <h1 className="text-4xl font-default">{work.title}</h1>
        <div className="text-2xl font-default text-gray-400 pb-8">{work.description}</div>
        <div className="work-article" dangerouslySetInnerHTML={{ __html: work.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllWorkIds();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: { params: { work: string } }) => {
  console.log('getStaticProps:GetStaticProps -> params', params);
  const work = await getWork(params.work);
  return { props: { work } };
};
