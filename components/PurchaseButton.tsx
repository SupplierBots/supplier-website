import { loadStripe } from '@stripe/stripe-js';
import { devices } from 'constants/mediaQueriesBreakpoints';
import React, { useState } from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import Spinner from './Spinner';

interface Props {
  price: string;
}

const StyledButton = styled(PrimaryButton)`
  @media ${devices.desktop} {
    height: 2.6em;
    width: 11.75em;
    font-size: 0.9em;
  }
`;

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
    <StyledButton onClick={initiateCheckout}>
      {loadingCheckout ? <Spinner /> : `Purchase for $${price}`}
    </StyledButton>
  );
};

export default PurchaseButton;
