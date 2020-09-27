import { motion } from 'framer-motion';
import Head from 'next/head';
import { Layout } from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Jenny Tran - Contact</title>
      </Head>
      <section className="h-screen max-w-screen-xl m-auto px-3">
        <div className="flex items-center flex-wrap justify-center my-12 lg:my-20">
          <img src="/images/youngme.jpg" className="rounded-full lg:mr-20 mb-12 lg:mb-0" />
          <div>
            <h1 className="text-5xl lg:text-7xl font-default font-semibold">
              Say hi!
              <span className="text-sm mx-6">don't be shy.</span>
            </h1>
            <div className="max-w-15 h-1 bg-white my-4"></div>
            <motion.a
              className="text-2xl lg:text-5xl font-default italic opacity-75"
              href={`mailto:jennny.tran@gmail.com?subject=Fun fact for you`}
              whileHover={{ opacity: 1 }}
            >
              jennny.tran@gmail.com
            </motion.a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
