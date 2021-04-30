import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Head from 'next/head';
import useSWR from 'swr';

async function fetchGetJSON(url: string) {
  try {
    const data = await fetch(url).then((res) => res.json());
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

const Purchase: NextPage = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.session_id ? `/api/checkout/${router.query.session_id}` : null,
    fetchGetJSON,
  );

  return (
    <div>
      <Head>
        <link rel="Logo" href="/favicon.ico" />
      </Head>
      <h1>Checkout Payment Result</h1>
      <h2>Status: {data?.payment_intent?.status ?? 'Loading...'}</h2>
      <h3>CheckoutSession response:</h3>
      <pre>{JSON.stringify(data, null, 2) ?? 'Loading...'}</pre>
    </div>
  );
};

export default Purchase;
