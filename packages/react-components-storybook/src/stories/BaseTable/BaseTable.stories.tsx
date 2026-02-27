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

import { BaseTable } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { fauxFoundry } from "../../mocks/fauxFoundry.js";

const meta: Meta<typeof BaseTable> = {
  title: "Components/BaseTable",
  component: BaseTable,
  parameters: {
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
    docs: {
      description: {
        component:
          `BaseTable is a low-level table component that integrates with TanStack Table (React Table) for maximum flexibility. Use this component when you need full control over table behavior.

**Note:** BaseTable requires a table instance from @tanstack/react-table. In most cases, you should use a higher-level table component that handles table instance creation automatically. BaseTable is exposed for advanced use cases where you need direct control over the table configuration.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  parameters: {
    docs: {
      source: {
        code: `// BaseTable requires a table instance from @tanstack/react-table
// Here's a basic example:

import { BaseTable } from "@osdk/react-components/experimental";
import { 
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

function MyCustomTable({ data }) {
  const columnHelper = createColumnHelper();
  
  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
      cell: info => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: info => info.getValue(),
    }),
  ];
  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  
  return <BaseTable table={table} />;
}`,
      },
    },
  },
  render: () => {
    const ExampleTable = () => {
      type Person = {
        id: number;
        name: string;
        email: string;
        department: string;
        startDate: string;
      };
      const columnHelper = createColumnHelper<Person>();

      const data = useMemo(() => [
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
      ], []);

      const columns = useMemo(() => [
        columnHelper.accessor("name", {
          header: "Name",
          cell: info => info.getValue(),
        }),
        columnHelper.accessor("email", {
          header: "Email",
          cell: info => info.getValue(),
        }),
        columnHelper.accessor("department", {
          header: "Department",
          cell: info => info.getValue(),
        }),
        columnHelper.accessor("startDate", {
          header: "Start Date",
          cell: info => new Date(info.getValue()).toLocaleDateString(),
        }),
      ], [columnHelper]);

      const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      });

      return <BaseTable table={table} />;
    };

    return (
      <div>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f3f4f6",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <h3 style={{ marginTop: 0 }}>BaseTable Component</h3>
          <p>
            BaseTable is a low-level component that requires a table instance
            from @tanstack/react-table.
          </p>
          <p>
            For most use cases, we recommend using a higher-level table
            component that handles table instance creation automatically.
          </p>
          <p>
            Use BaseTable only when you need full control over the table
            configuration and behavior.
          </p>
        </div>
        <div style={{ height: "400px" }}>
          <ExampleTable />
        </div>
      </div>
    );
  },
};
