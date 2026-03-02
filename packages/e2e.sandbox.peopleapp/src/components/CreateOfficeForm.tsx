import { useOsdkAction } from "@osdk/react/experimental";
import { useRef, useState } from "react";
import { $Actions } from "../generatedNoCheck2/index.js";
import { useOfficeFormAction } from "../hooks/useOfficeFormAction.js";
import { Button } from "./Button.js";
import { ErrorMessage } from "./form/ErrorMessage.js";
import { LocationInput } from "./form/LocationInput.js";
import { SuccessMessage } from "./form/SuccessMessage.js";
import { TextInput } from "./form/TextInput.js";
import { H2 } from "./headers.js";
import { InlineSpinner } from "./InlineSpinner.js";

export function CreateOfficeForm() {
  const formRef = useRef<HTMLFormElement>(null);

  // Get the createOffice action
  const { applyAction, isPending, error } = useOsdkAction(
    $Actions.createOffice,
  );

  // State for success message
  const [showSuccess, setShowSuccess] = useState(false);

  // Use custom hook for form action
  const [formState, handleSubmit] = useOfficeFormAction({
    applyAction,
    formRef,
    setShowSuccess,
  });

  return (
    <>
      <H2>
        Create Office <InlineSpinner isLoading={isPending} />
      </H2>

      <div className="flex grow">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
        >
          {/* Messages */}
          <SuccessMessage
            show={formState.success || showSuccess}
            message="Office created successfully!"
          />
          <ErrorMessage error={error} />

          {/* Form Fields */}
          <TextInput
            id="office-name"
            name="name"
            label="Office Name"
            placeholder="Enter office name"
            disabled={isPending}
            error={formState.errors.name}
            required
          />

          <LocationInput
            disabled={isPending}
            error={formState.errors.location}
          />

          {/* Submit button */}
          <Button type="submit" disabled={isPending}>
            {isPending ? "Creating..." : "Create Office"}
          </Button>
        </form>
      </div>
    </>
  );
}
