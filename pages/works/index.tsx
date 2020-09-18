import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { getWorks } from '../../lib/works';
import { Layout } from '../../components/layout';
import ArrowRight from '../../public/icons/arrow_right.svg';

export default function Works({ works }) {
  return (
    <Layout>
      <Head>
        <title>Jenny Tran - Works</title>
      </Head>
      <section className="py-12">
        <ul className="mt-12">
          {works.map(({ id, description, title, preview }) => (
            <li className="my-40 relative py-12 group">
              <Link href="/works/[id]" as={`/works/${id}`}>
                <a>
                  <h2 className="text-6xl text-center font-default">{title}</h2>
                  <div className="opacity-0 group-hover:opacity-25 transition-opacity duration-300 absolute w-full flex flex-col items-center justify-center top-0">
                    <img src={preview} alt={description} className="rounded-lg" />
                  </div>
                  <small className="font-default text-xl text-center block m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {description}
                  </small>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const works = getWorks();
  return { props: { works } };
};
