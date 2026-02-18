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

export const argTypes = {
  objectType: {
    description: "The object type of the object",
    control: false, // Required prop set in stories
  },
  columnDefinitions: {
    description:
      "Ordered list of column definitions to show in the table. If not provided, all of the properties of the object type will be shown in default order.",
    control: "object",
  },
  enableFiltering: {
    description: "Whether the table is filterable by the user.",
    control: "boolean",
    defaultValue: true,
    table: {
      defaultValue: { summary: "true" },
    },
  },
  filter: {
    description:
      "The current where clause to filter the objects in the table. If provided, the filter is controlled.",
    control: "object",
  },
  onFilterChanged: {
    description:
      "Called when the where clause is changed. Required when filter is controlled.",
    control: false,
    table: {
      category: "Events",
    },
  },
  enableOrdering: {
    description: "Whether the table is sortable by the user.",
    control: "boolean",
    defaultValue: true,
    table: {
      defaultValue: { summary: "true" },
    },
  },
  enableColumnPinning: {
    description: "Whether columns can be pinned by the user.",
    control: "boolean",
    defaultValue: true,
    table: {
      defaultValue: { summary: "true" },
    },
  },
  enableColumnResizing: {
    description: "Whether columns can be resized by the user.",
    control: "boolean",
    defaultValue: true,
    table: {
      defaultValue: { summary: "true" },
    },
  },
  enableColumnConfig: {
    description:
      "Whether the column configuration dialog for column visibility and ordering is available to the user.",
    control: "boolean",
    defaultValue: true,
    table: {
      defaultValue: { summary: "true" },
    },
  },
  defaultOrderBy: {
    description:
      "The default order by clause to sort the objects in the table. If provided without orderBy prop, the sorting is uncontrolled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",
    control: "object",
  },
  orderBy: {
    description:
      "The current order by clause to sort the objects in the table. If provided, the sorting is controlled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",
    control: "object",
  },
  onOrderByChanged: {
    description:
      "Called when the order by clause is changed. Required when sorting is controlled.",
    control: false,
    table: {
      category: "Events",
    },
  },
  onColumnVisibilityChanged: {
    description:
      "Called when the column visibility or ordering changed. If provided, the table will allow the user to show/hide columns.",
    control: false,
    table: {
      category: "Events",
    },
  },
  onColumnsPinnedChanged: {
    description:
      "Called when the pinned columns change. If provided, the table will allow the user to pin/unpin columns.",
    control: false,
    table: {
      category: "Events",
    },
  },
  onColumnResize: {
    description:
      "Called when a column is resized. Parameters: columnId - The ID of the resized column, newWidth - The new width of the column. When newWidth = null, the column size is reset.",
    control: false,
    table: {
      category: "Events",
    },
  },
  onRowClick: {
    description: "Called when a row is clicked.",
    control: false,
    table: {
      category: "Events",
    },
  },
  selectionMode: {
    description:
      "Selection mode for the table rows. If multiple, a checkbox will be shown for each row to allow selecting multiple rows as well as a top-level checkbox in the header to select all rows.",
    control: { type: "select" },
    options: ["single", "multiple", "none"],
    defaultValue: "none",
    table: {
      defaultValue: { summary: "none" },
    },
  },
  selectedRows: {
    description:
      "The currently selected rows in the table. If provided, the row selection is controlled.",
    control: "object",
  },
  onRowSelection: {
    description:
      "Called when the row selection changes. Required when row selection is controlled.",
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
  rowHeight: {
    description: "The height of each row in pixels.",
    control: "number",
    defaultValue: 40,
    table: {
      defaultValue: { summary: "40" },
    },
  },
  className: {
    description: "Additional CSS class name for the table",
    control: "text",
  },
};
