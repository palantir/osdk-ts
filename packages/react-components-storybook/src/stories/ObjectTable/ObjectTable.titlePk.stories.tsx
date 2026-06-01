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

import type { ObjectOrInterfaceDefinition, ObjectSet } from "@osdk/api";
import { getWireObjectSet } from "@osdk/client/unstable-do-not-use";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import type { ColumnDefinition } from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useState } from "react";
import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";
import { WorkerInterface } from "../../types/WorkerInterface.js";

// ---------------------------------------------------------------------------
// PR #3408 — ObjectTable + observable matcher coverage.
//
// These stories pin two PR-introduced behaviors:
//
//  1. Row-selection narrows the derived ObjectSet via the special
//     `$primaryKey` filter, so partial selection works for both objects and
//     interfaces (previously interface-typed tables produced `objectSet:
//     undefined` on partial selection).
//
//  2. The observable cache matcher's `$startsWith` branch is null-safe — a
//     `$title.$startsWith` filtered list does not crash when an object with
//     a null `$title` is written into the cache (now returns false instead
//     of throwing).
//
// Sibling file to ObjectTable.stories.tsx because the base stories file is
// already over the ~1500-line append threshold.
// ---------------------------------------------------------------------------

const meta: Meta<typeof ObjectTable> = {
  title: "Components/ObjectTable/PR3408",
  component: ObjectTable,
  tags: ["beta"],
  parameters: {
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof ObjectTable>;

interface CapturedSelection {
  selectedPrimaryKeys: Array<string | number>;
  isSelectAll: boolean;
  wireObjectSet: unknown;
}

interface SelectionWindow extends Window {
  __osdkLastSelection?: CapturedSelection;
}

// `<ObjectTable .../>` inference picks `never` for the RDPs generic when the
// only constraint is `objectType`. Explicitly match that shape on the column
// arrays so the assignment to `columnDefinitions` resolves.
const employeeColumns: Array<ColumnDefinition<typeof Employee, never, never>> =
  [
    { locator: { type: "property", id: "fullName" } },
    { locator: { type: "property", id: "department" } },
    { locator: { type: "property", id: "employeeNumber" } },
  ];

const interfaceColumns: Array<
  ColumnDefinition<typeof WorkerInterface, never, never>
> = [
  { locator: { type: "property", id: "name" } },
  { locator: { type: "property", id: "email" } },
  { locator: { type: "property", id: "employeeNumber" } },
];

interface SelectionChangeShape<Q extends ObjectOrInterfaceDefinition> {
  selectedRows: Array<{ $primaryKey: string | number }>;
  isSelectAll: boolean;
  objectSet: ObjectSet<Q> | undefined;
}

function captureSelection<Q extends ObjectOrInterfaceDefinition>(
  change: SelectionChangeShape<Q>,
): CapturedSelection {
  const wireObjectSet = change.objectSet != null
    ? getWireObjectSet(change.objectSet)
    : null;
  return {
    selectedPrimaryKeys: change.selectedRows.map((r) => r.$primaryKey),
    isSelectAll: change.isSelectAll,
    wireObjectSet,
  };
}

function EmployeeSelectionCapture(
  { testId }: { testId: string },
): React.ReactElement {
  const [capture, setCapture] = useState<CapturedSelection | null>(null);

  const handleRowSelectionChanged = useCallback(
    (change: SelectionChangeShape<typeof Employee>) => {
      const next = captureSelection(change);
      setCapture(next);
      const w = window as SelectionWindow;
      w.__osdkLastSelection = next;
    },
    [],
  );

  return (
    <div className="object-table-container" style={{ height: "600px" }}>
      <pre data-testid={testId}>
        {capture ? JSON.stringify(capture, null, 2) : "{}"}
      </pre>
      <ObjectTable
        objectType={Employee}
        columnDefinitions={employeeColumns}
        selectionMode="multiple"
        onRowSelectionChanged={handleRowSelectionChanged}
      />
    </div>
  );
}

function InterfaceSelectionCapture(
  { testId }: { testId: string },
): React.ReactElement {
  const [capture, setCapture] = useState<CapturedSelection | null>(null);

  const handleRowSelectionChanged = useCallback(
    (change: SelectionChangeShape<typeof WorkerInterface>) => {
      const next = captureSelection(change);
      setCapture(next);
      const w = window as SelectionWindow;
      w.__osdkLastSelection = next;
    },
    [],
  );

  return (
    <div className="object-table-container" style={{ height: "600px" }}>
      <pre data-testid={testId}>
        {capture ? JSON.stringify(capture, null, 2) : "{}"}
      </pre>
      <ObjectTable
        objectType={WorkerInterface}
        columnDefinitions={interfaceColumns}
        selectionMode="multiple"
        onRowSelectionChanged={handleRowSelectionChanged}
      />
    </div>
  );
}

export const EmployeePartialSelection: Story = {
  render: () => <EmployeeSelectionCapture testId="capture-employee-partial" />,
  parameters: {
    docs: {
      description: {
        story:
          "Selecting two rows yields `change.objectSet === resultingObjectSet.where({ $primaryKey: { $in: [pk1, pk2] } })`. "
          + "Inspecting the wire object set should reveal a filter wrapping the base set with `$primaryKey.$in` on the selected pks.",
      },
    },
  },
};

export const EmployeeSelectAll: Story = {
  render: () => (
    <EmployeeSelectionCapture testId="capture-employee-select-all" />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Header checkbox sets `isSelectAll: true`. The wire object set on the change should be the base `resultingObjectSet` (no $in narrowing).",
      },
    },
  },
};

export const EmployeeDeselectAll: Story = {
  render: () => (
    <EmployeeSelectionCapture testId="capture-employee-deselect-all" />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Selecting then deselecting yields `change.objectSet === resultingObjectSet.where({ $primaryKey: { $in: [] } })`. "
          + "Empty selection narrows to an empty set rather than returning undefined.",
      },
    },
  },
};

export const InterfacePartialSelection: Story = {
  render: () => 
  <InterfaceSelectionCapture testId="capture-interface-partial" />,
  parameters: {
    docs: {
      description: {
        story:
          "Interface-typed table: partial selection now derives a real ObjectSet (previously undefined). "
          + "The wire object set should still be a filter wrapping the base set with `$primaryKey.$in` on the selected pks.",
      },
    },
  },
};

// ---------------------------------------------------------------------------
// Matcher hardening: $startsWith against a null $title.
//
// The fixture in employeeData.ts ships a row with fullName "" (faux foundry
// normalizes that to `__title: undefined`). When this story renders two
// tables — one filtered by `$title.$startsWith`, one unfiltered — the
// observable cache routes the unfiltered objects through the filtered
// subscription's matcher. Pre-PR the matcher threw on the null-title row
// because it called `null.startsWith(...)`. Post-PR the matcher returns
// false and the page renders cleanly.
// ---------------------------------------------------------------------------

function MatcherHardeningCapture(): React.ReactElement {
  return (
    <div data-testid="matcher-hardening-root">
      <div
        className="object-table-container"
        style={{ height: "260px", marginBottom: "12px" }}
      >
        <strong data-testid="matcher-filtered-label">
          {"Filtered: $title startsWith 'Liam'"}
        </strong>
        <ObjectTable
          objectType={Employee}
          columnDefinitions={employeeColumns}
          filter={{ $title: { $startsWith: "Liam" } }}
        />
      </div>
      <div className="object-table-container" style={{ height: "260px" }}>
        <strong data-testid="matcher-unfiltered-label">
          {"Unfiltered (loads null-title row into the cache)"}
        </strong>
        <ObjectTable
          objectType={Employee}
          columnDefinitions={employeeColumns}
        />
      </div>
    </div>
  );
}

export const MatcherHardeningNullTitleStartsWith: Story = {
  render: () => <MatcherHardeningCapture />,
  parameters: {
    docs: {
      description: {
        story: "Renders two tables side by side. The filtered table subscribes "
          + "to `{ $title: { $startsWith: 'Liam' } }`; the unfiltered table "
          + "loads every employee — including the null-title row — into the "
          + "observable cache. Pre-PR this combination throws when the "
          + "matcher evaluates the null-title row against the $startsWith "
          + "filter. Post-PR it renders normally.",
      },
    },
  },
};
