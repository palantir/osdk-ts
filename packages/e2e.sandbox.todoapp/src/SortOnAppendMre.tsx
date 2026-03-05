import { createClient } from "@osdk/client";
import { OsdkProvider2, useObjectSet } from "@osdk/react/experimental";
import React from "react";
import { Button } from "./Button.js";
import { Todo } from "./generatedNoCheck2/index.js";
import { $ontologyRid } from "./generatedNoCheck2/OntologyMetadata.js";
import { H1 } from "./H2.js";
import { InlineSpinner } from "./InlineSpinner.js";
import { mreFakeFetch } from "./mreFakeFetch.js";

/**
 * MRE: Skip-sort-on-append bug demonstration using real OSDK hooks
 * backed by a fake fetch that returns nulls-first ordering.
 *
 * Bug: BaseListQuery._updateList unconditionally called _sortCacheKeys even
 * when append=true (fetchMore). Cursor pagination ($nextPageToken) already
 * guarantees correct ordering from the server. Client-side re-sort on a
 * partial dataset produces different results than the server's full-dataset
 * sort — especially for nullable properties like `title`, where the server
 * sorts nulls-first (standard Postgres/Foundry) but the client's
 * OrderBySortingStrategy sorts nulls-last.
 *
 * Fix: Skip _sortCacheKeys when append=true in _updateList.
 *
 * Left column:  What the old code produced (client re-sort applied to hook data)
 * Right column: What the hook actually returns now (server order preserved)
 */

const PAGE_SIZE = 5;

// Create a dedicated client backed by fake fetch (nulls-first server ordering).
// Uses a no-op token provider since the fake fetch doesn't check auth.
const fakeClient = createClient(
  "https://fake-foundry.example.com",
  $ontologyRid,
  () => Promise.resolve("fake-token"),
  undefined,
  mreFakeFetch,
);

/**
 * Replicates OrderBySortingStrategy's comparator for title ASC (nulls-last).
 * This is the exact logic from SortingStrategy.ts createOrderBySortFns.
 */
function clientNullsLastSort<T extends { title: string | undefined }>(
  items: T[],
): T[] {
  return [...items].sort((a, b) => {
    const aVal = a.title;
    const bVal = b.title;
    if (aVal == null && bVal == null) return 0;
    if (aVal == null) return 1; // nulls last
    if (bVal == null) return -1;
    return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
  });
}

/** Outer wrapper: provides the fake client to hooks via OsdkProvider2. */
export function SortOnAppendMrePage() {
  return (
    <OsdkProvider2 client={fakeClient}>
      <SortOnAppendMreContent />
    </OsdkProvider2>
  );
}

function SortOnAppendMreContent() {
  const [pageCount, setPageCount] = React.useState(1);
  const baseObjectSet = React.useMemo(() => fakeClient(Todo), []);
  const { data, isLoading, fetchMore } = useObjectSet(baseObjectSet, {
    orderBy: { title: "asc" },
    pageSize: PAGE_SIZE,
  });

  // What the old code would produce: re-sort the hook's data with nulls-last.
  const bugData = React.useMemo(
    () => (data ? clientNullsLastSort(data) : undefined),
    [data],
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <H1>MRE: Skip Sort on Append</H1>

      <a href="#" className="text-blue-500 underline text-sm mb-4">
        &larr; Back to Todos
      </a>

      <p className="text-sm text-gray-600 mb-2 max-w-2xl text-center">
        Real <code>useObjectSet</code>{" "}
        hook backed by a fake fetch returning 15 todos with nulls-first ordering
        (Postgres/Foundry). pageSize={PAGE_SIZE}, orderBy: title ASC.
      </p>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm font-semibold">
          {data?.length ?? 0} items loaded (page {pageCount})
        </span>
        <InlineSpinner isLoading={isLoading} />
        {fetchMore && (
          <Button
            onClick={() => {
              setPageCount((c) => c + 1);
              void fetchMore();
            }}
            disabled={isLoading}
          >
            fetchMore (page {pageCount + 1})
          </Button>
        )}
        {!fetchMore && data && data.length > 0 && (
          <span className="text-sm text-gray-400">— all pages loaded</span>
        )}
      </div>

      <div className="flex gap-8 items-start">
        <ResultColumn
          heading="Without fix (client re-sorts)"
          subheading="OrderBySortingStrategy nulls-last applied after append"
          items={bugData}
          isBug
        />
      </div>
    </main>
  );
}

function ResultColumn({
  heading,
  subheading,
  items,
  isBug,
}: {
  heading: string;
  subheading: string;
  items:
    | Array<{ $primaryKey: string | number; title: string | undefined }>
    | undefined;
  isBug: boolean;
}) {
  return (
    <div
      className={`border rounded p-3 w-80 ${
        isBug ? "border-red-300 bg-red-50" : "border-green-300 bg-green-50"
      }`}
    >
      <h3
        className={`font-bold text-sm mb-0.5 ${
          isBug ? "text-red-700" : "text-green-700"
        }`}
      >
        {heading}
      </h3>
      <p className="text-xs text-gray-500 mb-2">{subheading}</p>
      {items
        ? (
          <ol className="font-mono text-xs list-decimal list-inside">
            {items.map((todo, i) => (
              <li
                key={`${String(todo.$primaryKey)}-${i}`}
                className={i > 0 && i % PAGE_SIZE === 0
                  ? "border-t-2 border-dashed border-gray-300 mt-1 pt-1"
                  : "py-px"}
              >
                <span
                  className={todo.title == null ? "text-red-500 font-bold" : ""}
                >
                  {todo.title ?? "null"}
                </span>{" "}
                <span className="text-gray-400">
                  pk={String(todo.$primaryKey)}
                </span>
              </li>
            ))}
          </ol>
        )
        : <p className="text-xs text-gray-400">No data yet</p>}
    </div>
  );
}
