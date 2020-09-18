import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Layout } from '../../components/layout';
import { Date } from '../../components/date';
import { getSortedPostsData } from '../../lib/posts';

export default function Blog({ posts }) {
  return (
    <Layout>
      <p>
        I don't actually have a blog, since I'm not a blogger but here are some intresting stuff
        I've been part of.
      </p>
      {posts.map(({ id, date, title }) => (
        <li className="" key={id}>
          <Link href="/posts/[id]" as={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small className="">
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData();
  return { props: { posts } };
};
