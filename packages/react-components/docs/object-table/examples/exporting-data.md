### Exporting data

Pass a `tableRef` and call `getSnapshot()` to load every matching row and get a format-agnostic snapshot of columns, rows, and total count — then export to CSV, Excel, JSON, or anywhere.

```tsx
import {
  ObjectTable,
  type ObjectTableHandle,
} from "@osdk/react-components/experimental/object-table";
import { useRef } from "react";

function EmployeeTableWithDownload() {
  const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);

  const downloadCsv = async () => {
    const { columns, rows, totalCount } = await tableRef.current!.getSnapshot();
    console.log(`Exporting ${rows.length} of ${totalCount ?? "?"} rows`);
    const csv = [
      columns.map((c) => c.name).join(","),
      ...rows.map((r) =>
        columns.map((c) => String(r.getValue(c.id) ?? "")).join(",")
      ),
    ].join("\n");
    // ...turn `csv` into a download
  };

  return (
    <>
      <button onClick={downloadCsv}>Download CSV</button>
      <ObjectTable objectType={Employee} tableRef={tableRef} />
    </>
  );
}
```

[Open the "with loaded data download" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-advanced--with-loaded-data-download)
