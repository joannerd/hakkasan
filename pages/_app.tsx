/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default MyApp;
