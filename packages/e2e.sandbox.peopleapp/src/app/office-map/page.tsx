/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useOsdkClient } from "@osdk/react";
import { ObjectMap } from "@osdk/react-components/experimental/object-map";
import type {
  RowSelectionChange,
  ColumnDefinition,
} from "@osdk/react-components/object-table";
import { ObjectTable } from "@osdk/react-components/object-table";
import { useCallback, useMemo, useState } from "react";

import { Button } from "../../components/Button.js";
import { Office } from "../../generatedNoCheck2/index.js";
import { OfficeMapDetails } from "./OfficeMapDetails.js";

import styles from "./OfficeMapPage.module.css";

const NO_OFFICES: readonly Office.OsdkInstance[] = [];
const OFFICE_COLUMNS: ColumnDefinition<Office>[] = [
  { locator: { type: "property", id: "name" } },
  { locator: { type: "property", id: "primaryKey_" } },
];

export function OfficeMapPage(): React.JSX.Element {
  const client = useOsdkClient();
  const [draftQuery, setDraftQuery] = useState("");
  const [query, setQuery] = useState("");
  const [selection, setSelection] = useState(NO_OFFICES);
  const objectSet = useMemo(() => {
    const offices = client(Office);
    return query === ""
      ? offices
      : offices.where({ name: { $startsWith: query } });
  }, [client, query]);
  const selectedKeys = useMemo(
    () => selection.map((office) => office.$primaryKey),
    [selection],
  );
  const onTableSelectionChanged = useCallback(
    (change: RowSelectionChange<Office>) => setSelection(change.selectedRows),
    [],
  );
  const clearSelection = useCallback(() => setSelection(NO_OFFICES), []);

  return (
    <section className={styles.page}>
      <header>
        <h2>Office network</h2>
        <p>
          Explore office locations. Selection is shared between the map, table,
          and details.
        </p>
      </header>
      <form
        className={styles.filters}
        onSubmit={(event) => {
          event.preventDefault();
          setQuery(draftQuery.trim());
          setSelection(NO_OFFICES);
        }}
      >
        <label>
          Office name starts with
          <input
            type="search"
            value={draftQuery}
            onChange={(event) => setDraftQuery(event.target.value)}
          />
        </label>
        <Button type="submit">Apply filter</Button>
        <Button
          variant="secondary"
          onClick={clearSelection}
          disabled={selection.length === 0}
        >
          Clear selection
        </Button>
      </form>
      <div className={styles.workspace}>
        <div className={styles.mapPanel}>
          <ObjectMap
            objectType={Office}
            objectSet={objectSet}
            geometryProperty="location"
            selectedObjectKeys={selectedKeys}
            onSelectionChanged={setSelection}
            pageSize={100}
            className={styles.map}
            ariaLabel="Office network map"
          />
          <p>
            The map shows loaded offices with valid locations. Use Load more to
            include additional pages.
          </p>
        </div>
        <aside className={styles.details} aria-label="Selected office details">
          <h3>Selected offices</h3>
          {selection.length === 0 && (
            <p>Select an office on the map or in the table.</p>
          )}
          {selection.map((office) => (
            <OfficeMapDetails
              key={office.$primaryKey}
              officeKey={office.$primaryKey}
            />
          ))}
        </aside>
      </div>
      <div className={styles.table}>
        <ObjectTable
          objectType={Office}
          objectSet={objectSet}
          columnDefinitions={OFFICE_COLUMNS}
          selectionMode="multiple"
          selectedRows={selectedKeys}
          onRowSelectionChanged={onTableSelectionChanged}
          pageSize={100}
        />
      </div>
    </section>
  );
}
