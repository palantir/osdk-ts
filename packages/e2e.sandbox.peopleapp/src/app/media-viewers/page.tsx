import { useOsdkObjects } from "@osdk/react";
import { useCallback, useMemo, useState } from "react";

import { H2 } from "../../components/headers.js";
import { Section } from "../../components/Section.js";
import { Employee } from "../../generatedNoCheck2/index.js";
import { CustomEmailViewer } from "./CustomEmailViewer.js";
import { CustomExcelViewer } from "./CustomExcelViewer.js";
import { CustomTiffViewer } from "./CustomTiffViewer.js";

/*
 * Demonstrates building fully custom (headless) viewers from the hooks exported
 * by `@osdk/react-components/experimental/{excel-viewer,email-viewer,tiff-renderer}`.
 * Each card fetches a real Employee media property's bytes in the page (via the
 * local `useMediaBytes` hook) and hands them to a viewer hook, which parses /
 * decodes the bytes and drives a bespoke UI instead of the shipped components.
 *
 * Note: whether a given media property is actually an .xlsx / .eml / .tiff
 * depends on your ontology data, so mismatched files surface a parse error —
 * that is expected and shows each viewer's error handling.
 */
export function MediaViewersPage(): React.ReactElement {
  const { data: employees, isLoading, error } = useOsdkObjects(Employee, {});

  const [selectedPk, setSelectedPk] = useState<string | undefined>(undefined);

  const selected = useMemo(
    () => employees?.find((e) => String(e.$primaryKey) === selectedPk),
    [employees, selectedPk]
  );

  // Memoize the media references so the child fetch hooks don't refetch on
  // every render.
  const documentsMedia = useMemo(() => selected?.employeeDocuments, [selected]);
  const imageMedia = useMemo(() => selected?.employeeMedia, [selected]);

  const onSelectChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedPk(event.target.value === "" ? undefined : event.target.value);
    },
    []
  );

  return (
    <div className="flex flex-col w-full max-w-3xl text-left">
      <H2>Headless media viewers</H2>
      <p className="text-sm text-gray-600 mb-3">
        Custom UIs built directly on <code>useExcelViewerState</code>,{" "}
        <code>useEmailViewerState</code>, and <code>useTiffRenderer</code>, fed
        by bytes we fetch in the page.
      </p>

      <div className="mb-4">
        <label htmlFor="media-viewer-employee" className="text-sm mr-2">
          Employee:
        </label>
        <select
          id="media-viewer-employee"
          className="border border-gray-300 rounded px-2 py-1 text-sm"
          value={selectedPk ?? ""}
          onChange={onSelectChange}
        >
          <option value="">
            {isLoading ? "Loading employees…" : "Select an employee…"}
          </option>
          {employees?.map((employee) => (
            <option
              key={String(employee.$primaryKey)}
              value={String(employee.$primaryKey)}
            >
              {employee.fullName ?? String(employee.$primaryKey)}
            </option>
          ))}
        </select>
        {error != null && (
          <span className="text-sm text-red-600 ml-2">
            Failed to load employees: {error.message}
          </span>
        )}
      </div>

      <Section>
        <H2>Excel (useExcelViewerState)</H2>
        {documentsMedia != null ? (
          <CustomExcelViewer media={documentsMedia} />
        ) : (
          <div className="text-sm italic text-gray-500">
            Select an employee with an <code>employeeDocuments</code> file.
          </div>
        )}
      </Section>

      <Section>
        <H2>Email (useEmailViewerState)</H2>
        {documentsMedia != null ? (
          <CustomEmailViewer media={documentsMedia} />
        ) : (
          <div className="text-sm italic text-gray-500">
            Select an employee with an <code>employeeDocuments</code> file.
          </div>
        )}
      </Section>

      <Section>
        <H2>TIFF (useTiffRenderer)</H2>
        {imageMedia != null ? (
          <CustomTiffViewer media={imageMedia} />
        ) : (
          <div className="text-sm italic text-gray-500">
            Select an employee with an <code>employeeMedia</code> image.
          </div>
        )}
      </Section>
    </div>
  );
}
