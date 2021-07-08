/* istanbul ignore file */
import Image from 'next/image';
import Title from 'components/Title';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => (
  <div className="h-screen">
    <Title
      pageTitle="Hakkasan Calendar"
      description="Navigate Hakkasan events."
      canonical="https://hakkasan.vercel.app/"
      keywords="hakkasan omnia las vegas"
    />

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
