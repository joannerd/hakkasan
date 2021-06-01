import Layout from '../components/Layout';
import { useFetch } from '../lib/hooks';
import { HakkasanResponse } from '../lib/hakkasan';

const Home = (): JSX.Element => {
  const { data, error, isLoading } = useFetch<HakkasanResponse>(
    `/api/hakkasan?ref=artists&ref=events&ref=venues`
  );
  console.log('data', data);
  return isLoading ? <>Loading...</> : <Layout>hello</Layout>;
};

export default Home;
