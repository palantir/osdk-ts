import React from "react";

interface ErrorMessageProps {
  message: string | Error;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  const errorText = message instanceof Error ? message.message : message;

  return (
    <div className="text-sm text-red-500">
      {errorText}
    </div>
  );
}
