import React from "react";
import { TextInput } from "./TextInput.js";

interface LocationInputProps {
  disabled?: boolean;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  latitudeValue?: string;
  longitudeValue?: string;
  className?: string;
}

export function LocationInput({
  disabled = false,
  error,
  onChange,
  latitudeValue,
  longitudeValue,
  className = "",
}: LocationInputProps) {
  const errorId = error ? "location-error" : undefined;

  return (
    <div className={`mb-4 ${className}`}>
      <label
        htmlFor="location"
        className="block text-sm font-medium mb-1"
      >
        Location
      </label>

      <div className="grid grid-cols-2 gap-2">
        <TextInput
          id="latitude"
          name="latitude"
          label="Latitude"
          type="number"
          step="0.000001"
          placeholder="e.g., 37.7749"
          disabled={disabled}
          value={latitudeValue}
          onChange={onChange}
          error={error ? "" : undefined} // Don't show error text here
          className="mb-0"
        />

        <TextInput
          id="longitude"
          name="longitude"
          label="Longitude"
          type="number"
          step="0.000001"
          placeholder="e.g., -122.4194"
          disabled={disabled}
          value={longitudeValue}
          onChange={onChange}
          error={error ? "" : undefined} // Don't show error text here
          className="mb-0"
        />
      </div>

      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}

      <p className="mt-1 text-xs text-gray-500">
        Enter coordinates for the office location
      </p>
    </div>
  );
}
