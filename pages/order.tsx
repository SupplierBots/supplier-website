import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { CheckoutSessionResponse } from './api/checkout/[id]';

import Head from 'next/head';
import useSWR from 'swr';
import { getJSON } from 'utils/fetcher';

const Order: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isValidating } = useSWR<CheckoutSessionResponse, Error>(
    id ? `/api/checkout/${id}` : null,
    getJSON,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Only retry up to 10 times.
        if (retryCount >= 10) return;
        // Retry after 5 seconds.
        setTimeout(() => revalidate({ retryCount }), 2000);
      },
      revalidateOnFocus: false,
    },
  );

  return (
    <div>
      <Head>
        <link rel="Logo" href="/favicon.ico" />
      </Head>
      <h1>Payment Result</h1>
      {!isValidating && error && (
        <>
          <p>{error.toString()}</p>
          <p>
            Unfortunately we couldn&apos;t check your order status. Please send
            us a message to get a license key: contact@supplierbots.io
          </p>
        </>
      )}
      {isValidating && <p>Processing...</p>}
      {!isValidating && data && !error && (
        <>
          <p>Success: {data.success.toString()}</p>
          <p>Customer email: {data.customerEmail}</p>
        </>
      )}
    </div>
  );
};

export default Order;
