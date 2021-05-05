import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import Spinner from './Spinner';

interface Props {
  price: string;
}

const PurchaseButton = ({ price }: Props): JSX.Element => {
  const [loadingCheckout, setLoadingCheckout] = useState(false);

  const initiateCheckout = async () => {
    if (loadingCheckout) return;

    setLoadingCheckout(true);
    const response = await fetch('/api/checkout', { method: 'POST' });
    const { sessionId } = await response.json();
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );
    if (!stripe || !sessionId) return;
    const { error } = await stripe.redirectToCheckout({ sessionId });
    setLoadingCheckout(false);
  };

  return (
    <PrimaryButton onClick={initiateCheckout}>
      {loadingCheckout ? <Spinner /> : `Purchase for $${price}`}
    </PrimaryButton>
  );
};

export default PurchaseButton;
