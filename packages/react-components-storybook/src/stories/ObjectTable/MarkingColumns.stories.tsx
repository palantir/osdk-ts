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

import { BaseTable } from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ColumnDef } from "@tanstack/react-table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { fauxFoundry } from "../../mocks/fauxFoundry.js";

type MarkingRow = {
  id: number;
  name: string;
  classification: string[];
  compartments: string[];
  releasability: string[];
  unspecifiedMarking: string[];
};

const rows: MarkingRow[] = [
  {
    id: 1,
    name: "Dossier A",
    classification: ["m-secret"],
    compartments: ["m-alpha", "m-bravo"],
    releasability: ["m-rel-usa"],
    unspecifiedMarking: ["m-confidential"],
  },
  {
    id: 2,
    name: "Dossier B",
    classification: ["m-top-secret"],
    compartments: ["m-alpha", "m-bravo", "m-charlie"],
    releasability: ["m-rel-allied", "m-no-foreign"],
    unspecifiedMarking: ["m-unclassified"],
  },
  {
    id: 3,
    name: "Dossier C",
    classification: ["m-confidential"],
    compartments: [],
    releasability: ["m-rel-usa", "m-rel-allied"],
    unspecifiedMarking: [],
  },
];

const columns: ColumnDef<MarkingRow>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Name",
    size: 140,
  },
  {
    id: "classification",
    accessorKey: "classification",
    header: "Classification (MANDATORY)",
    size: 220,
    meta: { markingType: "MANDATORY" },
  },
  {
    id: "compartments",
    accessorKey: "compartments",
    header: "Compartments (CBAC)",
    size: 260,
    meta: { markingType: "CBAC" },
  },
  {
    id: "releasability",
    accessorKey: "releasability",
    header: "Releasability (CBAC)",
    size: 260,
    meta: { markingType: "CBAC" },
  },
  {
    id: "unspecifiedMarking",
    accessorKey: "unspecifiedMarking",
    header: "Unspecified marking subtype",
    size: 240,
  },
];

const meta: Meta<typeof BaseTable<MarkingRow>> = {
  title: "Components/ObjectTable/Marking Columns",
  component: BaseTable,
  tags: ["beta"],
  parameters: {
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
    docs: {
      description: {
        component:
          "Demonstrates how ObjectTable renders marking property columns. The marking subtype on the column meta (`markingType: \"CBAC\" | \"MANDATORY\"`) is populated automatically by `useColumnDefs` from `ObjectMetadata.Property.typeMetadata`. CBAC columns render via `CbacBanner`; MANDATORY columns render one pill per marking id; marking columns whose subtype is not surfaced fall back to the default cell renderer.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const table = useReactTable({
      data: rows,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    return (
      <div style={{ height: 360 }}>
        <BaseTable table={table} />
      </div>
    );
  },
};

export const EmptyMarkings: Story = {
  name: "Empty marking values",
  render: () => {
    const emptyRows: MarkingRow[] = [{
      id: 1,
      name: "Dossier with no markings",
      classification: [],
      compartments: [],
      releasability: [],
      unspecifiedMarking: [],
    }];

    const table = useReactTable({
      data: emptyRows,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    return (
      <div style={{ height: 200 }}>
        <BaseTable table={table} />
      </div>
    );
  },
};
