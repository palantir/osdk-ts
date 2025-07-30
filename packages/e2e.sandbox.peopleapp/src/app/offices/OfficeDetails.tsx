import { useLinks, useOsdkAction } from "@osdk/react/experimental";
import type { Point } from "geojson";
import { useState } from "react";
import { Button } from "../../components/Button.js";
import { ErrorMessage } from "../../components/ErrorMessage.js";
import { H2 } from "../../components/headers.js";
import { LoadingMessage } from "../../components/LoadingMessage.js";
import { MiniMap } from "../../components/MiniMap.js";
import type { Office } from "../../generatedNoCheck2/index.js";
import { deleteOffice } from "../../generatedNoCheck2/index.js";

interface OfficeDetailsProps {
  office: Office.OsdkInstance | undefined;
  onOfficeDeleted?: () => void;
}

export function OfficeDetails({ office, onOfficeDeleted }: OfficeDetailsProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const { applyAction, isPending: isDeleting, error: deleteError } =
    useOsdkAction(deleteOffice);

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  const handleConfirmDelete = async () => {
    if (!office) return;

    try {
      await applyAction({
        Office: office,
        $optimisticUpdate: (b) => b.deleteObject(office),
      });

      setShowDeleteConfirm(false);
      if (onOfficeDeleted) {
        onOfficeDeleted();
      }
    } catch (error) {
      // Error is handled by the useOsdkAction hook
      console.error("Failed to delete office:", error);
    }
  };

  if (!office) {
    return (
      <div className="p-4 text-gray-500 italic">
        Select an office to view its details
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <H2>Office Details</H2>
        <Button
          variant="danger"
          onClick={handleDeleteClick}
          disabled={isDeleting}
        >
          Delete Office
        </Button>
      </div>

      {showDeleteConfirm && (
        <div className="mt-3 p-4 border border-red-200 bg-red-50 rounded">
          <p className="mb-3 font-medium">
            Are you sure you want to delete this office?
          </p>
          <div className="flex justify-end gap-3">
            <Button
              variant="secondary"
              onClick={handleCancelDelete}
              disabled={isDeleting}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={handleConfirmDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Confirm Delete"}
            </Button>
          </div>
        </div>
      )}

      {deleteError && (
        <div className="mt-3 p-3 bg-red-100 rounded">
          <ErrorMessage
            message={`Error deleting office: ${
              deleteError.unknown !== undefined
                ? String(deleteError.unknown || "Unknown error")
                : "Failed to delete office"
            }`}
          />
        </div>
      )}

      <div className="mb-4">
        <div className="font-medium text-lg">
          {office.name ?? "Unnamed Office"}
        </div>
        <div className="text-sm text-gray-600 mb-2">
          ID: {office.$primaryKey}
        </div>

        <div className="grid grid-cols-2 gap-2 mt-3">
          <div className="text-gray-600">Location:</div>
          <div>
            {office.location != null
              ? "Location coordinates available"
              : "No location data"}
          </div>
        </div>

        {office.location && (
          <div className="mt-4">
            <H2>Location Map</H2>
            <MiniMap location={office.location as Point} height="200px" />
          </div>
        )}
      </div>
      <Occupants office={office} />
    </div>
  );
}

function Occupants({ office }: { office: Office.OsdkInstance }) {
  const { links, isLoading, error } = useLinks(office, "occupants");

  return (
    <>
      <H2>Occupants</H2>
      {isLoading
        && <LoadingMessage message="Loading occupants..." />}
      {error
        && (
          <ErrorMessage message={`Error loading occupants: ${error.message}`} />
        )}
      {links && links.length > 0
        ? (
          <div>
            <p className="mb-2 text-sm text-gray-600">
              {links.length} employees in this office
            </p>
            <ul className="list-none">
              {links.map(employee => (
                <li
                  key={employee.$primaryKey}
                  className="py-2 px-3 mb-1 rounded bg-gray-50"
                >
                  <div className="font-medium">
                    {(employee as any).fullName ?? "No name available"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {(employee as any).jobTitle ?? "No job title"}{" "}
                    - #{(employee as any).employeeNumber}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )
        : <div className="text-sm italic">No occupants in this office</div>}
    </>
  );
}
