import { useOsdkMedia } from "@osdk/react/experimental";
import { useState } from "react";
import type { Employee } from "../../generatedNoCheck2/index.js";

interface EmployeePhotoProps {
  employee: Employee.OsdkInstance;
}

export function EmployeePhoto({ employee }: EmployeePhotoProps) {
  const { url, isLoading, isPreview, dimensions, metadata, content, error } =
    useOsdkMedia(
      employee.employeeMedia ?? undefined,
    );
  const [imgFailed, setImgFailed] = useState(false);

  const hasMedia = !!employee.employeeMedia;
  const isImage = content?.type.startsWith("image/") && !imgFailed;

  return (
    <div className="relative mb-2">
      {!hasMedia && (
        <div className="text-gray-400 text-sm italic">
          No media
        </div>
      )}

      {hasMedia && (error || imgFailed) && (
        <div className="text-red-500 text-sm">Failed to load media</div>
      )}

      {hasMedia && isLoading && (
        <div className="text-gray-400 text-sm">Loading media...</div>
      )}

      {hasMedia && url && isImage && !error && (
        <img
          src={url}
          alt={employee.fullName ?? "Employee media"}
          width={dimensions?.width}
          height={dimensions?.height}
          className={`rounded max-w-48 ${isPreview ? "blur-sm" : ""}`}
          onError={() => setImgFailed(true)}
        />
      )}

      {hasMedia && url && !isImage && !error && (
        <a
          href={url}
          download={metadata?.path ?? "file"}
          className="text-blue-600 underline text-sm"
        >
          {metadata?.path ?? "Download media"}
          {metadata?.sizeBytes != null && (
            <span className="text-gray-400 ml-1">
              ({Math.round(metadata.sizeBytes / 1024)}KB)
            </span>
          )}
        </a>
      )}
    </div>
  );
}
