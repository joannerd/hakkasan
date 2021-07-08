import Head from 'next/head';

interface Props {
  pageTitle: string;
  description: string;
  canonical: string;
  keywords: string;
}

const Title = ({
  pageTitle,
  description,
  canonical,
  keywords,
}: Props): JSX.Element => (
  <Head>
    <title>{pageTitle}</title>
    <title>{pageTitle}</title>
    <meta charSet="utf-8" />
    <meta property="og:title" content={pageTitle} key="og:title" />
    <meta property="og:site_name" content={pageTitle} key="og:site_name" />
    <meta property="og:image" content="/logo.png" key="og:image" />
    <meta
      property="og:description"
      content={description}
      key="og:description"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="apple-mobile-web-app-status-bar" content="#000000" />
    <meta name="description" content={description} />
    <meta name="title" content={pageTitle} />
    <meta name="keywords" content={keywords} />
    <link rel="canonical" href={canonical} />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" href="/logo.png" />
  </Head>
);

export default Title;
