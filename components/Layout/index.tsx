/* istanbul ignore file */
import Image from 'next/image';
import Title from 'components/Title';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => (
  <div className="h-screen w-screen">
    <Title
      pageTitle="Hakkasan Calendar"
      description="Navigate Hakkasan events."
      canonical="https://hakkasan.vercel.app/"
      keywords="hakkasan omnia las vegas"
    />

    <header className="lg:px-32 md:px-16 px-8 py-8 bg-black text-white">
      <Image alt="HAKKASAN CAL" src="/logo.svg" width={360} height={34} />
    </header>

    <main className="md:flex-row flex flex-col justify-center items-center md:justify-between md:items-start lg:mx-32 md:mx-16 mx-8 mt-12 mb-2">
      {children}
    </main>

    <footer className="lg:px-32 md:px-16 px-8 pb-8 flex flex-col items-center text-gray-300 text-xs">
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
