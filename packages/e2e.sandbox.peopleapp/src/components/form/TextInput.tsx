import React from "react";

interface TextInputProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  error?: string;
  type?: "text" | "email" | "number" | "password" | "tel";
  required?: boolean;
  step?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function TextInput({
  id,
  name,
  label,
  placeholder,
  value,
  disabled = false,
  error,
  type = "text",
  required = false,
  step,
  onChange,
  className = "",
}: TextInputProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={`mb-4 ${className}`}>
      <label
        htmlFor={id}
        className="block text-sm font-medium mb-1"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        step={step}
        disabled={disabled}
        aria-disabled={disabled}
        required={required}
        placeholder={placeholder}
        className="w-full py-2 px-2 border-gray-500 rounded-lg text-sm border-2
          disabled:opacity-90
          disabled:pointer-events-none 
          disabled:border-gray-200
          focus:border-blue-500 focus:ring-blue-500"
        aria-describedby={errorId}
        aria-invalid={error ? "true" : undefined}
      />
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
