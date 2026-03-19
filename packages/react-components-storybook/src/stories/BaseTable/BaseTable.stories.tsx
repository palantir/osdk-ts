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

import type { BaseTableProps } from "@osdk/react-components/experimental";
import { BaseTable } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type {
  ColumnPinningState,
  ColumnSizingState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { fauxFoundry } from "../../mocks/fauxFoundry.js";

type Person = {
  id: number;
  name: string;
  email: string;
  department: string;
  startDate: string;
};

const mockData: Person[] = [
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

const meta: Meta<BaseTableProps<Person>> = {
  title: "Components/BaseTable",
  component: BaseTable,
  parameters: {
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    table: {
      description: "An instance of tanstack react-table",
      control: false,
    },
    isLoading: {
      description: "Whether the table is fetching data",
      control: "boolean",
      defaultValue: false,
      table: {
        defaultValue: { summary: "false" },
      },
    },
    fetchNextPage: {
      description: "A promise to fetch next page",
      control: false,
    },
    error: {
      description: "Error to show in the table",
      control: false,
    },
    rowHeight: {
      description: "The height of each row in pixels",
      control: "number",
      defaultValue: 40,
      table: {
        defaultValue: { summary: "40" },
      },
    },
    headerMenuFeatureFlags: {
      description:
        "Configuration to show sorting, pinning, resizing, and column config menu in the header",
      control: "object",
      defaultValue: {
        showSortingItems: false,
        showPinningItems: false,
        showResizeItem: false,
        showConfigItem: false,
      },
      table: {
        defaultValue: {
          summary: JSON.stringify({
            showSortingItems: false,
            showPinningItems: false,
            showResizeItem: false,
            showConfigItem: false,
          }),
        },
      },
    },
    editableConfig: {
      description: "Configuration for editable table",
      control: "object",
    },
    onRowClick: {
      description: "Called when a row is clicked.",
      control: false,
      table: {
        category: "Events",
      },
    },
    renderCellContextMenu: {
      description:
        "If provided, will render this context menu when right clicking on a cell",
      control: false,
      table: {
        category: "Advanced",
      },
    },
    className: {
      description: "Additional CSS class name for the table",
      control: "text",
    },
  },
};

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  { accessorKey: "startDate", header: "Start Date" },
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
import { BaseTable } from "@osdk/react-components/experimental";
import { 
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

function MyCustomTable({ data }) {
 
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "department",
      header: "Department",
    },
    { accessorKey: "startDate", header: "Start Date" },
  ];

  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
  });
  
  return <BaseTable table={table} />;
}`,
      },
    },
  },
  render: (args) => {
    const table = useReactTable({
      data: mockData,
      columns,
      getCoreRowModel: getCoreRowModel(),
      columnResizeMode: "onChange",
      columnResizeDirection: "ltr",
    });

    return <BaseTable {...args} table={table} />;
  },
};

export const WithSorting: Story = {
  args: {
    headerMenuFeatureFlags: {
      showSortingItems: true,
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
import { BaseTable } from "@osdk/react-components/experimental";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  SortingState,
} from "@tanstack/react-table";

const headerMenuFeatureFlags = {
  showSortingItems: true,
};
const [sorting, setSorting] = useState<SortingState>();

const table = useReactTable({
  data: mockData,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  state: {
    sorting,
  },
  enableSorting: true,
  onSortingChange: setSorting,
});


return <BaseTable table={table} headerMenuFeatureFlags={headerMenuFeatureFlags} />;
`,
      },
    },
  },
  render: (args) => {
    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
      data: mockData,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      state: {
        sorting,
      },
      enableSorting: true,
      onSortingChange: setSorting,
    });

    return (
      <div style={{ height: "400px" }}>
        <BaseTable
          {...args}
          table={table}
        />
      </div>
    );
  },
};

export const WithColumnPinning: Story = {
  args: {
    headerMenuFeatureFlags: {
      showPinningItems: true,
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
import { BaseTable } from "@osdk/react-components/experimental";
import {
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  ColumnPinningState,
} from "@tanstack/react-table";
 
const headerMenuFeatureFlags = {
  showPinningItems: true,
};
const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
  left: [],
  right: [],
});

const table = useReactTable({
  data: mockData,
  columns,
  getCoreRowModel: getCoreRowModel(),
  state: {
    columnPinning,
  },
  onColumnPinningChange: setColumnPinning,
});

return <BaseTable table={table} headerMenuFeatureFlags={headerMenuFeatureFlags} />;
`,
      },
    },
  },
  render: (args) => {
    const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
      left: [],
      right: [],
    });

    const table = useReactTable({
      data: mockData,
      columns,
      getCoreRowModel: getCoreRowModel(),
      state: {
        columnPinning,
      },
      enableColumnResizing: false,
      onColumnPinningChange: setColumnPinning,
    });

    return (
      <div style={{ height: "400px" }}>
        <BaseTable
          {...args}
          table={table}
        />
      </div>
    );
  },
};

export const WithColumnResizing: Story = {
  args: {
    headerMenuFeatureFlags: {
      showResizeItem: true,
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
import { BaseTable } from "@osdk/react-components/experimental";
import {
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  ColumnSizingState,
} from "@tanstack/react-table";
 
const headerMenuFeatureFlags = {
  showResizeItem: true,
};
const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({});

const table = useReactTable({
  data: mockData,
  columns,
  getCoreRowModel: getCoreRowModel(),
  state: {
    columnSizing,
  },
  columnResizeMode: "onChange",
  columnResizeDirection: "ltr",
  onColumnSizingChange: setColumnSizing,
});


return <BaseTable table={table} headerMenuFeatureFlags={headerMenuFeatureFlags} />;
`,
      },
    },
  },
  render: (args) => {
    const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({});

    const table = useReactTable({
      data: mockData,
      columns,
      getCoreRowModel: getCoreRowModel(),
      state: {
        columnSizing,
      },
      columnResizeMode: "onChange",
      columnResizeDirection: "ltr",
      onColumnSizingChange: setColumnSizing,
    });

    return (
      <div style={{ height: "400px" }}>
        <BaseTable
          {...args}
          table={table}
        />
      </div>
    );
  },
};

export const WithColumnConfig: Story = {
  args: {
    headerMenuFeatureFlags: {
      showConfigItem: true,
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
import { BaseTable } from "@osdk/react-components/experimental";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  SortingState,
} from "@tanstack/react-table";

const headerMenuFeatureFlags = {
  showSortingItems: true,
};
const [sorting, setSorting] = useState<SortingState>();

const table = useReactTable({
  data: mockData,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  state: {
    sorting,
  },
  enableSorting: true,
  onSortingChange: setSorting,
});


return <BaseTable table={table} headerMenuFeatureFlags={headerMenuFeatureFlags} />;
`,
      },
    },
  },
  render: (args) => {
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
      columns.reduce((acc, col) => {
        return {
          ...acc,
          [col.accessorKey]: true,
        };
      }, {}),
    );

    const table = useReactTable({
      data: mockData,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      state: {
        columnVisibility,
      },
      onColumnVisibilityChange: setColumnVisibility,
    });

    return (
      <div style={{ height: "400px" }}>
        <BaseTable
          {...args}
          table={table}
        />
      </div>
    );
  },
};

export const LoadingState: Story = {
  args: {
    isLoading: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
const table = useReactTable({
  data: [], // No data
  columns,
  getCoreRowModel: getCoreRowModel(),
});

return <BaseTable table={table} isLoading={true} />;
}`,
      },
    },
  },
  render: (args) => {
    const table = useReactTable({
      data: [] as Person[],
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    return (
      <div style={{ height: "400px" }}>
        <BaseTable {...args} table={table} />
      </div>
    );
  },
};

export const EmptyState: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
const table = useReactTable({
  data: [], // No data
  columns,
  getCoreRowModel: getCoreRowModel(),
});

return <BaseTable table={table} />;
`,
      },
    },
  },
  render: (args) => {
    const table = useReactTable({
      data: [] as Person[],
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    return (
      <div style={{ height: "400px" }}>
        <BaseTable {...args} table={table} />
      </div>
    );
  },
};

export const ErrorState: Story = {
  args: {
    error: new Error("Example error"),
  },
  parameters: {
    docs: {
      source: {
        code: `<BaseTable table={table} error={new Error("Example error")} />`,
      },
    },
  },
  render: (args) => {
    const table = useReactTable({
      data: [] as Person[],
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    return (
      <div style={{ height: "400px" }}>
        <BaseTable {...args} table={table} />
      </div>
    );
  },
};
