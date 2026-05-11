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

export interface Person {
  id: number;
  name: string;
  email: string;
  department: string;
  city: string;
  team: string;
  startDate: string;
}

export const MOCK_DATA: Person[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    department: "Engineering",
    city: "New York",
    team: "Platform",
    startDate: "2020-01-15",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    department: "Product",
    city: "San Francisco",
    team: "Growth",
    startDate: "2019-06-22",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    department: "Engineering",
    city: "Seattle",
    team: "Infrastructure",
    startDate: "2021-03-01",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    department: "Design",
    city: "New York",
    team: "Brand",
    startDate: "2020-11-30",
  },
  {
    id: 5,
    name: "Robert Wilson",
    email: "robert.wilson@example.com",
    department: "Sales",
    city: "Chicago",
    team: "Enterprise",
    startDate: "2018-09-15",
  },
  {
    id: 6,
    name: "Lisa Wang",
    email: "lisa.wang@example.com",
    department: "Marketing",
    city: "San Francisco",
    team: "Growth",
    startDate: "2022-04-10",
  },
  {
    id: 7,
    name: "James Taylor",
    email: "james.taylor@example.com",
    department: "Finance",
    city: "New York",
    team: "FP&A",
    startDate: "2017-08-03",
  },
  {
    id: 8,
    name: "Amanda Martinez",
    email: "amanda.martinez@example.com",
    department: "Engineering",
    city: "Seattle",
    team: "Platform",
    startDate: "2021-09-20",
  },
  {
    id: 9,
    name: "David Kim",
    email: "david.kim@example.com",
    department: "Operations",
    city: "Chicago",
    team: "Logistics",
    startDate: "2019-12-01",
  },
  {
    id: 10,
    name: "Rachel Green",
    email: "rachel.green@example.com",
    department: "Marketing",
    city: "London",
    team: "Brand",
    startDate: "2023-01-09",
  },
  {
    id: 11,
    name: "Kevin Patel",
    email: "kevin.patel@example.com",
    department: "Engineering",
    city: "San Francisco",
    team: "Infrastructure",
    startDate: "2020-06-15",
  },
  {
    id: 12,
    name: "Sophia Lee",
    email: "sophia.lee@example.com",
    department: "Design",
    city: "London",
    team: "Product Design",
    startDate: "2022-02-28",
  },
  {
    id: 13,
    name: "Daniel Brown",
    email: "daniel.brown@example.com",
    department: "Finance",
    city: "New York",
    team: "Accounting",
    startDate: "2018-11-12",
  },
  {
    id: 14,
    name: "Olivia Thomas",
    email: "olivia.thomas@example.com",
    department: "Operations",
    city: "Chicago",
    team: "Logistics",
    startDate: "2021-07-05",
  },
  {
    id: 15,
    name: "Andrew Garcia",
    email: "andrew.garcia@example.com",
    department: "Marketing",
    city: "San Francisco",
    team: "Growth",
    startDate: "2023-03-18",
  },
];

const COLUMNS = [
  { accessorKey: "name" as const, header: "Name" },
  { accessorKey: "email" as const, header: "Email" },
  { accessorKey: "department" as const, header: "Department" },
  { accessorKey: "city" as const, header: "City" },
  { accessorKey: "team" as const, header: "Team" },
  { accessorKey: "startDate" as const, header: "Start Date" },
];

const HEADER_MENU_FLAGS = {
  showSortingItems: true,
} as const;

interface ShowcaseTableProps {
  readonly data: Person[];
}

export const ShowcaseTable = React.memo(
  function ShowcaseTableFn({ data }: ShowcaseTableProps): React.ReactElement {
    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
      data,
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
