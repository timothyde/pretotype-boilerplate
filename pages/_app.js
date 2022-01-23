import '../css/index.css';
import Head from 'next/head';
import Layout from '@components/layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Head>
        <title>
          PRETOTYPE | Laboris do nostrud laborum commodo sunt sit anim in ut
          cillum id.
        </title>
        <meta
          name="Description"
          content="Dolor dolor Lorem exercitation aliquip mollit qui consequat laboris minim."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
