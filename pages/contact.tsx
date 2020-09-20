import { Layout } from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <section className="h-screen flex flex-col items-center py-12">
        <h1 className="text-6xl font-default font-semibold">Send me a fun fact</h1>
        <form className="border p-8 bg-black-light my-8">
          <div>
            <label className="block" htmlFor="email">
              Your name
            </label>
            <input type="text" id="email"></input>
          </div>
          <div>
            <label className="block" htmlFor="email">
              Your email
            </label>
            <input type="text" id="email"></input>
          </div>
          <label className="block">Message</label>
          <textarea></textarea>
        </form>
      </section>
    </Layout>
  );
}
