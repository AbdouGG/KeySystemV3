import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateVerificationStatus } from '../api/verificationEndpoint';

export const VerificationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAndRedirect = async () => {
      if (id) {
        const checkpointNumber = parseInt(id);
        if (!isNaN(checkpointNumber)) {
          await updateVerificationStatus(checkpointNumber);
        }
      }
      // Redirect back to the main page after verification
      navigate('/');
    };

    verifyAndRedirect();
  }, [id, navigate]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Verifying...</h1>
        <p className="text-gray-400">Please wait while we verify your checkpoint.</p>
      </div>
    </div>
  );
};