import type { Media } from "@osdk/api";
import { useExcelViewerState } from "@osdk/react-components/experimental/excel-viewer";
import React from "react";

import { useMediaBytes } from "./useMediaBytes.js";

interface CustomExcelViewerProps {
  /** A media property (e.g. `employee.employeeDocuments`) holding an .xlsx file. */
  media: Media;
}

/*
 * Fully custom (headless) spreadsheet viewer:
 *
 *   useMediaBytes         fetches the media's bytes in the page (our own fetch)
 *   useExcelViewerState   parses those bytes and owns the active-sheet state
 *
 * The markup is entirely bespoke (a vertical sheet rail + a bare grid) instead
 * of the shipped `BaseExcelViewer`, showing a consumer can build their own UI
 * on the hook.
 */
export function CustomExcelViewer({
  media,
}: CustomExcelViewerProps): React.ReactElement {
  const { data, loading, error } = useMediaBytes(media);

  return (
    <div className="w-full">
      {loading && (
        <div className="text-sm italic text-gray-500">Loading spreadsheet…</div>
      )}
      {error != null && (
        <div className="text-sm text-red-600">
          Failed to load: {error.message}
        </div>
      )}
      {data != null && <SpreadsheetView content={data} />}
    </div>
  );
}

function SpreadsheetView({
  content,
}: {
  content: ArrayBuffer;
}): React.ReactElement {
  const { error, sheets, activeSheetIndex, activeSheet, selectSheet } =
    useExcelViewerState({ content });

  if (error != null) {
    return (
      <div className="text-sm text-red-600">
        Could not parse as a spreadsheet: {error.message}
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <ul className="list-none w-40 shrink-0 border-r border-gray-200 pr-2">
        {sheets.map((sheet, index) => (
          <li key={sheet.name}>
            <button
              type="button"
              onClick={() => selectSheet(index)}
              className={`w-full text-left px-2 py-1 rounded text-sm ${
                index === activeSheetIndex
                  ? "bg-blue-100 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {sheet.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="grow overflow-auto">
        {activeSheet != null ? (
          <table className="border-collapse text-left text-sm">
            <tbody>
              {activeSheet.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-gray-100">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="py-1 px-2 whitespace-nowrap">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-sm italic text-gray-500">No sheets</div>
        )}
      </div>
    </div>
  );
}
