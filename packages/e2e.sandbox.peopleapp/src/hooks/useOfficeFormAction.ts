import type { Point } from "geojson";
import { useActionState } from "react";
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
  applyAction: (args: any) => Promise<unknown>;
  formRef: React.RefObject<HTMLFormElement | null>;
  setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

export function useOfficeFormAction({
  applyAction,
  formRef,
  setShowSuccess,
}: UseOfficeFormActionOptions) {
  return useActionState<FormState, FormData>(
    async (_prevState, formData) => {
      // Extract form values
      const name = formData.get("name") as string;
      const latitudeStr = formData.get("latitude") as string;
      const longitudeStr = formData.get("longitude") as string;

      // Validate form values
      const errors: FormState["errors"] = {};

      if (!name?.trim()) {
        errors.name = "Office name is required";
      }

      if (!latitudeStr || !longitudeStr) {
        errors.location = "Latitude and longitude are required";
      }

      if (Object.keys(errors).length > 0) {
        return { success: false, errors };
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
          $optimisticUpdate: (b: any) => {
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

        return { success: true, errors: {} };
      } catch (e) {
        // Error handling
        console.error("Failed to create office:", e);
        setShowSuccess(false);
        return {
          success: false,
          errors: {
            name: "Failed to create office. Please try again.",
          },
        };
      }
    },
    initialFormState,
  );
}
