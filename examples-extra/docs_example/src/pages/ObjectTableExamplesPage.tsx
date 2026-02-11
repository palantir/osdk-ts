/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { CodeBlock } from "../components/CodeBlock.js";
import { Callout } from "../components/Callout.js";
import { BasicTableExample } from "../components/examples/BasicTableExample.js";
import { CustomColumnsExample } from "../components/examples/CustomColumnsExample.js";
import { SelectionExample } from "../components/examples/SelectionExample.js";
import { CustomCellRenderingExample } from "../components/examples/CustomCellRenderingExample.js";
import { ColumnPinningExample } from "../components/examples/ColumnPinningExample.js";
import { DerivedPropertyExample } from "../components/examples/DerivedPropertyExample.js";
import { ContextMenuExample } from "../components/examples/ContextMenuExample.js";
import { SortingAndFilteringExample } from "../components/examples/SortingAndFilteringExample.js";

export function ObjectTableExamplesPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">ObjectTable Examples</h1>
        <p className="text-lg text-gray-600 mt-2">
          Comprehensive examples showing the full capabilities of the ObjectTable component.
        </p>
      </div>

      {/* Example 1: Basic */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Basic Usage</h2>
          <p className="text-gray-600 mt-1">
            The simplest way to display all object properties with default settings.
          </p>
        </div>
        <div style={{ height: "400px" }} className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
          <BasicTableExample />
        </div>
        <CodeBlock code={`<ObjectTable
  objectType={Employee}
/>`} />
      </section>

      {/* Example 2: Custom Columns */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Custom Columns</h2>
          <p className="text-gray-600 mt-1">
            Specify which columns to display and configure their widths.
          </p>
        </div>
        <div style={{ height: "400px" }} className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
          <CustomColumnsExample />
        </div>
        <CodeBlock code={`<ObjectTable
  objectType={Employee}
/>`} />
      </section>

      {/* Example 3: Row Selection */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Row Selection</h2>
          <p className="text-gray-600 mt-1">
            Enable single or multiple row selection with checkboxes.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4">
          <SelectionExample />
        </div>
        <CodeBlock code={`const [selectedIds, setSelectedIds] = useState<number[]>([]);

<ObjectTable
  objectType={Employee}
  selectionMode="multiple"
  selectedRows={selectedIds}
  onRowSelection={setSelectedIds}
/>`} />
      </section>

      {/* Example 4: Custom Cell Rendering */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Custom Cell Rendering</h2>
          <p className="text-gray-600 mt-1">
            Customize how cells and headers are displayed with custom renderers.
          </p>
        </div>
        <div style={{ height: "400px" }} className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
          <CustomCellRenderingExample />
        </div>
        <CodeBlock code={`<ObjectTable
  objectType={Employee}
/>`} />
      </section>

      {/* Example 5: Sorting and Filtering */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Sorting & Filtering</h2>
          <p className="text-gray-600 mt-1">
            Enable interactive sorting and filtering capabilities.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4">
          <SortingAndFilteringExample />
        </div>
        <CodeBlock code={`<ObjectTable
  objectType={Employee}
  filterable={true}
  orderable={true}
/>`} />
      </section>

      {/* Example 6: Column Pinning */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Column Pinning & Resizing</h2>
          <p className="text-gray-600 mt-1">
            Pin columns to the left or right and enable column resizing.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4">
          <ColumnPinningExample />
        </div>
        <CodeBlock code={`<ObjectTable
  objectType={Employee}
/>`} />
      </section>

      {/* Example 7: Derived Properties */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Derived Properties (RDPs)</h2>
          <p className="text-gray-600 mt-1">
            Display computed properties from related objects using RDPs.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4">
          <DerivedPropertyExample />
        </div>
        <CodeBlock code={`<ObjectTable
  objectType={Employee}
/>`} />
      </section>

      {/* Example 8: Context Menu */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Context Menu</h2>
          <p className="text-gray-600 mt-1">
            Add custom context menus for cell right-click interactions.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4">
          <ContextMenuExample />
        </div>
        <CodeBlock code={`<ObjectTable
  objectType={Employee}
/>`} />
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Best Practices</h2>
        <div className="grid grid-cols-1 gap-3">
          <Callout type="info">
            <strong>Define columns explicitly</strong>
            <p className="mt-1 text-sm">
              Use <code className="bg-blue-100 px-1 rounded font-mono">columnDefinitions</code> to control column order and visibility rather than relying on defaults.
            </p>
          </Callout>
          <Callout type="info">
            <strong>Pin important columns</strong>
            <p className="mt-1 text-sm">
              Pin key identifier columns (like name or ID) to the left for better UX when scrolling horizontally.
            </p>
          </Callout>
          <Callout type="info">
            <strong>Set reasonable widths</strong>
            <p className="mt-1 text-sm">
              Define <code className="bg-blue-100 px-1 rounded font-mono">minWidth</code> and <code className="bg-blue-100 px-1 rounded font-mono">maxWidth</code> to prevent columns from becoming too narrow or wide.
            </p>
          </Callout>
          <Callout type="info">
            <strong>Custom cell renderers for formatting</strong>
            <p className="mt-1 text-sm">
              Use <code className="bg-blue-100 px-1 rounded font-mono">renderCell</code> for dates, numbers, or complex content rather than displaying raw values.
            </p>
          </Callout>
        </div>
      </section>
    </div>
  );
}
