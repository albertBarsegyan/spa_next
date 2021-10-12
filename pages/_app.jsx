import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
