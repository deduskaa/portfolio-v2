import { motion } from 'framer-motion';
import Head from 'next/head';
import { Layout } from '../components/Layout';

export default function Contact() {
  const container = {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
    bounceIn: { scale3d: [1, 1.2, 1], opacity: 1 },
  };
  return (
    <Layout>
      <Head>
        <title>Jenny Tran - Contact</title>
      </Head>
      <section className="h-screen max-w-screen-xl m-auto px-3">
        <motion.div
          variants={container}
          animate="visible"
          initial="initial"
          className="flex items-center flex-wrap justify-center my-12 lg:my-20"
        >
          <motion.div variants={container} initial="initial" animate="bounceIn">
            <img src="/images/youngme.jpg" className="rounded-full lg:mr-20 mb-12 lg:mb-0" />
          </motion.div>
          <div>
            <h1 className="text-5xl lg:text-7xl font-default font-semibold">
              Say hi!
              <span className="text-sm mx-6">don't be shy.</span>
            </h1>
            <div className="max-w-15 h-1 bg-white my-4"></div>
            <motion.a
              className="text-2xl lg:text-5xl font-default italic opacity-75 block"
              href={`mailto:jennny.tran@gmail.com?subject=Fun fact for you`}
              whileHover={{ opacity: 1 }}
            >
              <span className="not-italic">💌</span> jennny.tran@gmail.com
            </motion.a>
            <motion.a
              className="text-2xl lg:text-5xl font-default italic opacity-75 block"
              href="https://www.linkedin.com/in/jen-nytr/"
              whileHover={{ opacity: 1 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="not-italic">👩🏻‍💻</span> LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
