import { Layout } from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <section className="h-screen flex flex-col items-center py-12">
        <h1 className="text-4xl lg:text-6xl font-default font-semibold">Send me a fun fact</h1>
        <form className="border p-8 bg-black-light my-8">
          <div className="my-4">
            <label className="block" htmlFor="name">
              Your name
            </label>
            <input className="rounded-lg" type="text" id="name"></input>
          </div>
          <div className="my-4">
            <label className="block" htmlFor="email">
              Your email
            </label>
            <input className="rounded-lg" type="text" id="email"></input>
          </div>
          <div className="my-4">
            <label className="block">Message</label>
            <textarea className="rounded-lg"></textarea>
          </div>
        </form>
      </section>
    </Layout>
  );
}
