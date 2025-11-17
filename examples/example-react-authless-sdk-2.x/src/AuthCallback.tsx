import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./client";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    auth.handleCallback().then(() => {
      navigate("/");
    });
  }, [navigate]);

  return <div>Loading...</div>;
}
