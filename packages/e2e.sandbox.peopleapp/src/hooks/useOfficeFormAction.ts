import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import type { Point } from "geojson";
import { useCallback, useState } from "react";
import { Office } from "../generatedNoCheck2/index.js";

// Define form state structure
export type FormState = {
  success: boolean;
  errors: {
    name?: string;
    location?: string;
  };
};

// Initial form state
export const initialFormState: FormState = {
  success: false,
  errors: {},
};

type UseOfficeFormActionOptions = {
  applyAction: (args: {
    name: string;
    location: Point;
    $optimisticUpdate?: ObservableClient.ApplyActionOptions["optimisticUpdate"];
  }) => Promise<unknown>;
  formRef: React.RefObject<HTMLFormElement>;
  setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

export function useOfficeFormAction({
  applyAction,
  formRef,
  setShowSuccess,
}: UseOfficeFormActionOptions) {
  const [formState, setFormState] = useState<FormState>(initialFormState);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);

      // Extract form values
      const name = String(formData.get("name") ?? "");
      const latitudeStr = String(formData.get("latitude") ?? "");
      const longitudeStr = String(formData.get("longitude") ?? "");

      // Validate form values
      const errors: FormState["errors"] = {};

      if (!name?.trim()) {
        errors.name = "Office name is required";
      }

      if (!latitudeStr || !longitudeStr) {
        errors.location = "Latitude and longitude are required";
      }

      if (Object.keys(errors).length > 0) {
        setFormState({ success: false, errors });
        return;
      }

      // Convert values
      const latitude = parseFloat(latitudeStr);
      const longitude = parseFloat(longitudeStr);

      // Create a GeoJSON Point object
      const location: Point = {
        type: "Point",
        coordinates: [longitude, latitude], // GeoJSON format is [longitude, latitude]
      };

      try {
        // Set success state
        setShowSuccess(true);

        // Submit the action
        await applyAction({
          name,
          location,
          $optimisticUpdate: (b) => {
            const id = "TMP_" + window.crypto.randomUUID();
            b.createObject(Office, id, {
              name,
              location,
              primaryKey_: id,
            });
          },
        });

        // Reset form on success
        if (formRef.current) {
          formRef.current.reset();
        }

        // Show success message temporarily
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);

        setFormState({ success: true, errors: {} });
      } catch (e) {
        // Error handling
        console.error("Failed to create office:", e);
        setShowSuccess(false);
        setFormState({
          success: false,
          errors: {
            name: "Failed to create office. Please try again.",
          },
        });
      }
    },
    [applyAction, formRef, setShowSuccess],
  );

  return [formState, handleSubmit] as const;
}
