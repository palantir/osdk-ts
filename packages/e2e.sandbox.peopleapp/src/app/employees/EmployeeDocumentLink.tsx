import { useOsdkMedia } from "@osdk/react/experimental";
import type { Employee } from "../../generatedNoCheck2/index.js";

interface EmployeeDocumentLinkProps {
  employee: Employee.OsdkInstance;
}

export function EmployeeDocumentLink({ employee }: EmployeeDocumentLinkProps) {
  const { url, metadata, isLoading } = useOsdkMedia(
    employee.employeeDocuments ?? undefined,
  );

  const hasDocuments = !!employee.employeeDocuments;

  return (
    <>
      {!hasDocuments && (
        <span className="text-gray-400 text-sm italic">None</span>
      )}

      {hasDocuments && isLoading && (
        <span className="text-gray-400 text-sm">Loading document...</span>
      )}

      {hasDocuments && url && (
        <a
          href={url}
          download={metadata?.path ?? "document"}
          className="text-blue-600 underline text-sm"
        >
          {metadata?.path ?? "Download document"}
          {metadata?.sizeBytes != null && (
            <span className="text-gray-400 ml-1">
              ({Math.round(metadata.sizeBytes / 1024)}KB)
            </span>
          )}
        </a>
      )}
    </>
  );
}
