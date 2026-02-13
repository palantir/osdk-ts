import { useOsdkObjects } from "@osdk/react/experimental";
import { useState } from "react";
import { $ } from "../foundryClient.js";
import type { Employee } from "../generatedNoCheck2/index.js";
import { modifyEmployee, Office } from "../generatedNoCheck2/index.js";
import { Button } from "./Button.js";
import { ErrorMessage } from "./ErrorMessage.js";
import { InlineSpinner } from "./InlineSpinner.js";

interface OfficeSelectorProps {
  employee: Employee.OsdkInstance;
  currentOfficeId?: string | null;
  onAssigned?: () => void;
}

export function OfficeSelector({
  employee,
  currentOfficeId,
  onAssigned,
}: OfficeSelectorProps) {
  const [showSelector, setShowSelector] = useState(false);
  const [selectedOfficeId, setSelectedOfficeId] = useState<string | null>(
    currentOfficeId || null,
  );
  const [isAssigning, setIsAssigning] = useState(false);
  const [assignError, setAssignError] = useState<Error | null>(null);
  const [assignSuccess, setAssignSuccess] = useState(false);
  const { data: offices, isLoading: officesLoading, error: officesError } =
    useOsdkObjects(Office, {});

  const handleAssignOffice = async () => {
    setIsAssigning(true);
    setAssignError(null);
    setAssignSuccess(false);

    try {
      // Create payload with null value for clearing office assignment
      const primary_office_id = selectedOfficeId == null
        ? undefined // Using undefined for clarity - API will treat as null
        : selectedOfficeId;

      await $(modifyEmployee).applyAction({
        employee,
        primary_office_id,
        emailPrimaryWork: employee.emailPrimaryWork ?? "",
      });

      setAssignSuccess(true);
      setIsAssigning(false);

      if (onAssigned) {
        onAssigned();
      }

      // Close the selector after a brief delay to show success message
      setTimeout(() => {
        setShowSelector(false);
      }, 1500);

      return true;
    } catch (error) {
      console.error("Failed to assign office:", error);
      setAssignError(
        error instanceof Error ? error : new Error("Failed to assign office"),
      );
      setIsAssigning(false);
      return false;
    }
  };

  const handleCancel = () => {
    setAssignError(null);
    setAssignSuccess(false);
    setSelectedOfficeId(currentOfficeId || null);
    setShowSelector(false);
  };

  if (officesError) {
    return (
      <ErrorMessage
        message={`Error loading offices: ${officesError.message}`}
      />
    );
  }

  return (
    <div>
      {!showSelector
        ? (
          <Button onClick={() => setShowSelector(true)} variant="secondary">
            {currentOfficeId ? "Change Office" : "Assign Office"}
          </Button>
        )
        : (
          <div className="mt-3 p-4 border border-gray-200 bg-gray-50 rounded">
            <h4 className="text-sm font-medium mb-2">Select an office:</h4>

            {officesLoading
              ? (
                <div className="flex items-center text-sm text-gray-500">
                  <InlineSpinner /> Loading offices...
                </div>
              )
              : (
                <>
                  <div className="mb-3">
                    <select
                      className="w-full p-2 border border-gray-300 rounded"
                      value={selectedOfficeId || ""}
                      onChange={(e) =>
                        setSelectedOfficeId(e.target.value || null)}
                    >
                      <option value="">-- No office --</option>
                      {offices?.map(office => (
                        <option
                          key={office.$primaryKey}
                          value={office.$primaryKey}
                        >
                          {office.name || `Office ${office.$primaryKey}`}
                        </option>
                      ))}
                    </select>
                  </div>

                  {assignError && (
                    <div className="mb-3 p-2 bg-red-100 rounded">
                      <ErrorMessage message={assignError} />
                    </div>
                  )}

                  {assignSuccess && (
                    <div className="mb-3 p-2 text-sm bg-green-100 text-green-800 rounded">
                      Office successfully assigned!
                    </div>
                  )}

                  <div className="flex justify-end gap-2">
                    <Button
                      variant="secondary"
                      onClick={handleCancel}
                      disabled={isAssigning}
                    >
                      Cancel
                    </Button>
                    <Button onClick={handleAssignOffice} disabled={isAssigning}>
                      {isAssigning ? "Assigning..." : "Assign Office"}
                    </Button>
                  </div>
                </>
              )}
          </div>
        )}
    </div>
  );
}
