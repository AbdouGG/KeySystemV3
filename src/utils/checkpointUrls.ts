import { createVerificationEndpoint } from '../api/verificationEndpoint';

export const LINKVERTISE_BASE_URL = 'https://link-target.net/1174023';

export const getCheckpointUrl = async (checkpoint: number): Promise<string> => {
  // Create a verification record and get its ID
  const verification = await createVerificationEndpoint(checkpoint);
  
  // Construct the verification URL that Linkvertise will redirect to
  const verificationUrl = `${window.location.origin}/verify/${verification.id}`;
  
  // Return the appropriate Linkvertise URL based on checkpoint number
  return `${LINKVERTISE_BASE_URL}/check-point-${checkpoint}`;
};