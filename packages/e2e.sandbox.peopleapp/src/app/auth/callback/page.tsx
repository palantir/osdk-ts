import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../../foundryClient.js";

export function AuthCallbackPage() {
  const [redirecting, setRedirecting] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Process the OAuth callback using the auth client
    const completeAuth = async () => {
      try {
        // The auth.signIn() method will automatically detect that we're on the callback URL
        // and handle processing the callback and exchanging the code for tokens
        await auth.signIn();

        // If we get here, it means the auth flow was successful but for some reason
        // the automatic redirect didn't happen
        setRedirecting(false);
      } catch (err) {
        console.error("Authentication error:", err);
        setError(err instanceof Error ? err.message : "Authentication failed");
        setRedirecting(false);
      }
    };

    void completeAuth();
  }, []);

  if (!redirecting) {
    // If there's an error, show it instead of redirecting
    if (error) {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center max-w-md p-6 bg-red-50 rounded-lg border border-red-200">
            <div className="text-red-600 text-5xl mb-4">⚠️</div>
            <h2 className="text-xl font-semibold mb-2">Authentication Error</h2>
            <p className="text-red-700 mb-4">{error}</p>
            <button
              onClick={() => window.location.href = "/"}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Return to Home
            </button>
          </div>
        </div>
      );
    }

    // After successful callback processing, redirect to the main page
    // Preserve any state that was passed if available
    const redirectPath = location.state?.from || "/";
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto mb-4">
        </div>
        <h2 className="text-xl font-semibold mb-2">
          Authentication in progress...
        </h2>
        <p className="text-gray-600">
          Please wait while we complete the authentication process.
        </p>
      </div>
    </div>
  );
}
