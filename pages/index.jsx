import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import Header from '../src/component/Header';
import Link from 'next/link';
import About from '../src/pages/About';

export default function Home() {
  const { asPath } = useRouter();

  useEffect(() => {
    console.log(asPath);
  }, []);

  return (
    <div>
      <Header />
      {asPath === '/about' ? <About /> : <div>main page home</div>}
      <Link href="/about" passHref>
        <a>To home</a>
      </Link>
    </div>
  );
}
