/* istanbul ignore file */
import Image from 'next/image';
import Layout from 'components/Layout';

const Loading = (): JSX.Element => (
  <Layout>
    <article className="min-h-full my-40 w-full flex justify-center items-center animate-bounce transition-opacity">
      <section className="opacity-20 bg-gray-400 flex justify-center items-center w-60 h-60 rounded-full pl-5">
        <Image width={120} height={120} src="/loading.svg" />
      </section>
    </article>
  </Layout>
);

export default Loading;
