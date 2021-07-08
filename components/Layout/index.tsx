/* istanbul ignore file */
import Head from 'next/head';
import Image from 'next/image';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => (
  <div>
    <Head>
      <title>Hakkasan Calendar</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className="px-32 py-8 bg-black text-white">
      <Image alt="HAKKASAN CAL" src="/logo.svg" width="360px" height="34px" />
    </header>

    <main className="flex flex-row justify-between items-start mx-32 my-8">
      {children}
    </main>

    <footer className="px-32 pb-8 flex flex-col items-center text-gray-300 text-xs">
      <p>
        Hakkasan Cal not affiliated, associated, authorized, endorsed by, or in
        any way officially connected with Hakkasan Group. All product and
        company names are trademarks™ or registered® trademarks of their
        respective holders. Use of them does not imply any affiliation with or
        endorsement by them. Created by{' '}
        <a
          href="https://github.com/andweeb"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600"
        >
          Andweeb
        </a>{' '}
        and{' '}
        <a
          href="https://github.com/joannerd"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600"
        >
          Joannerd
        </a>
        .
      </p>
    </footer>
  </div>
);

export default Layout;
