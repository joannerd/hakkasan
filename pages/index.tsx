import Layout from '../components/Layout';
import { useFetch } from '../lib/hooks';
import type { HakkasanResponse } from '../lib/hakkasan';

const Home = (): JSX.Element => {
  const { data, error, isLoading } = useFetch<HakkasanResponse>(
    '/api/hakkasan?ref=events'
  );
  console.log('data', data);
  return isLoading ? <>Loading...</> : <Layout>hello</Layout>;
};

export default Home;
