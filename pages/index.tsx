import { useEffect } from 'react';
import { useFetch } from 'hooks';
import Layout from 'components/Layout';
import type { HakkasanResponse } from 'lib/hakkasan';

const Home = (): JSX.Element => {
  const { data, isLoading, fetchData } = useFetch<HakkasanResponse>(
    '/api/hakkasan?ref=events'
  );

  useEffect(() => {
    fetchData();
  }, []);

  console.log('data', data);
  return isLoading ? <>Loading...</> : <Layout>hello</Layout>;
};

export default Home;
