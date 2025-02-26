import React from 'react';
import { MessageStripe } from '@codesandbox/components';
import { useUpgradeFromV1ToV2 } from 'app/hooks/useUpgradeFromV1ToV2';

export const UpgradeSSEToV2Stripe = () => {
  const { perform, loading, canConvert } = useUpgradeFromV1ToV2('Top Bar');

  return (
    <MessageStripe variant="primary">
      <span>
        This sandbox runs much faster as a devbox. Do you want to{' '}
        {canConvert ? 'convert' : 'fork'} it?
      </span>
      <MessageStripe.Action loading={loading} onClick={perform}>
        {canConvert ? 'Yes, convert' : 'Yes, fork'}
      </MessageStripe.Action>
    </MessageStripe>
  );
};
