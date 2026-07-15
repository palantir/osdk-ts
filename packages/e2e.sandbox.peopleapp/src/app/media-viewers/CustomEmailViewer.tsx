import type { Media } from "@osdk/api";
import { useEmailViewerState } from "@osdk/react-components/experimental/email-viewer";
import React from "react";

import { useMediaBytes } from "./useMediaBytes.js";

interface CustomEmailViewerProps {
  /** A media property (e.g. `employee.employeeDocuments`) holding an .eml file. */
  media: Media;
}

/*
 * Fully custom (headless) email viewer:
 *
 *   useMediaBytes         fetches the media's bytes in the page (our own fetch)
 *   useEmailViewerState   parses those bytes and derives body mode + addresses
 *
 * Renders a compact "card" layout instead of the shipped `BaseEmailViewer`.
 */
export function CustomEmailViewer({
  media,
}: CustomEmailViewerProps): React.ReactElement {
  const { data, loading, error } = useMediaBytes(media);

  return (
    <div className="w-full">
      {loading && (
        <div className="text-sm italic text-gray-500">Loading email…</div>
      )}
      {error != null && (
        <div className="text-sm text-red-600">
          Failed to load: {error.message}
        </div>
      )}
      {data != null && <EmailCard content={data} />}
    </div>
  );
}

function EmailCard({ content }: { content: ArrayBuffer }): React.ReactElement {
  const {
    loading,
    error,
    email,
    bodyMode,
    formattedFrom,
    formattedTo,
    formattedCc,
  } = useEmailViewerState({ content });

  if (loading) {
    return <div className="text-sm italic text-gray-500">Parsing email…</div>;
  }
  if (error != null) {
    return (
      <div className="text-sm text-red-600">
        Could not parse as an email: {error.message}
      </div>
    );
  }

  return (
    <div className="rounded border border-gray-200 p-3 text-sm">
      {email?.subject != null && (
        <div className="font-semibold text-base mb-1">{email.subject}</div>
      )}
      <dl className="grid grid-cols-[3rem_1fr] gap-x-2 text-gray-700 mb-2">
        {formattedFrom != null && (
          <>
            <dt className="text-gray-400">From</dt>
            <dd>{formattedFrom}</dd>
          </>
        )}
        {email != null && email.to.length > 0 && (
          <>
            <dt className="text-gray-400">To</dt>
            <dd>{formattedTo}</dd>
          </>
        )}
        {email != null && email.cc.length > 0 && (
          <>
            <dt className="text-gray-400">Cc</dt>
            <dd>{formattedCc}</dd>
          </>
        )}
      </dl>
      {bodyMode === "html" && (
        <iframe
          className="w-full h-64 border border-gray-100"
          sandbox="allow-same-origin"
          srcDoc={email?.html}
          title="Email body"
        />
      )}
      {bodyMode === "text" && (
        <pre className="whitespace-pre-wrap font-sans">{email?.text}</pre>
      )}
      {bodyMode === "empty" && (
        <div className="italic text-gray-400">No content</div>
      )}
    </div>
  );
}
