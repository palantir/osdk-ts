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
import type { SortingState } from "@tanstack/react-table";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";

interface Person {
  id: number;
  name: string;
  email: string;
  department: string;
  startDate: string;
}

const MOCK_DATA: Person[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    department: "Engineering",
    startDate: "2020-01-15",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    department: "Product",
    startDate: "2019-06-22",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    department: "Engineering",
    startDate: "2021-03-01",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    department: "Design",
    startDate: "2020-11-30",
  },
  {
    id: 5,
    name: "Robert Wilson",
    email: "robert.wilson@example.com",
    department: "Sales",
    startDate: "2018-09-15",
  },
];

const COLUMNS = [
  { accessorKey: "name" as const, header: "Name" },
  { accessorKey: "email" as const, header: "Email" },
  { accessorKey: "department" as const, header: "Department" },
  { accessorKey: "startDate" as const, header: "Start Date" },
];

const HEADER_MENU_FLAGS = {
  showSortingItems: true,
} as const;

export const ShowcaseTable = React.memo(
  function ShowcaseTableFn(): React.ReactElement {
    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
      data: MOCK_DATA,
      columns: COLUMNS,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      state: { sorting },
      enableSorting: true,
      onSortingChange: setSorting,
      columnResizeMode: "onChange",
      columnResizeDirection: "ltr",
    });

    return (
      <BaseTable
        table={table}
        headerMenuFeatureFlags={HEADER_MENU_FLAGS}
      />
    );
  },
);
