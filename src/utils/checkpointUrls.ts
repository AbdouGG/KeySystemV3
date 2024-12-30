import { createVerificationEndpoint } from '../api/verificationEndpoint';

export const LINKVERTISE_BASE_URL = 'https://link-target.net/1174023';

export const getCheckpointUrl = async (checkpoint: number): Promise<string> => {
  // Create a verification record and get its ID
  const verification = await createVerificationEndpoint(checkpoint);
  
  // Return the appropriate Linkvertise URL based on checkpoint number
  return `${LINKVERTISE_BASE_URL}/check-point-${checkpoint}?${new URLSearchParams({
    'o': `${window.location.origin}/verify/${checkpoint}`
  }).toString()}`;
};