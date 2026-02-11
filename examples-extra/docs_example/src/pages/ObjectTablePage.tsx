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

import { useState } from 'react';
import { ObjectTable } from '@osdk/react-components/experimental';
import { Employee } from '../generatedNoCheck/index.js';
import { CodeBlock } from '../components/CodeBlock.js';
import { Callout } from '../components/Callout.js';
import { PropsTable } from '../components/PropsTable.js';
import { ObjectTableExamplesPage } from './ObjectTableExamplesPage.js';

// Object Table props
const objectTableProps = [
  { name: 'objectType', type: 'ObjectOrInterfaceDefinition', description: 'The OSDK object type to display' },
  { name: 'columnDefinitions', type: 'ColumnDefinition[]', description: 'Ordered list of columns to display. If not provided, all properties are shown.' },
  { name: 'filter', type: 'WhereClause', description: 'Where clause to filter objects (controlled mode)' },
  { name: 'orderBy', type: '{ property, direction }[]', description: 'Current sort order (controlled mode)' },
  { name: 'defaultOrderBy', type: '{ property, direction }[]', description: 'Initial sort order (uncontrolled mode)' },
  { name: 'selectionMode', type: '"none" | "single" | "multiple"', default: '"none"', description: 'Row selection mode' },
  { name: 'selectedRows', type: 'PrimaryKeyType[]', description: 'Currently selected row primary keys (controlled mode)' },
  { name: 'onRowSelection', type: '(selectedRowIds) => void', description: 'Called when selection changes' },
  { name: 'onRowClick', type: '(object) => void', description: 'Called when a row is clicked' },
  { name: 'renderCellContextMenu', type: '(row, cellValue) => ReactNode', description: 'Custom right-click context menu for cells' },
  { name: 'rowHeight', type: 'number', default: '40', description: 'Height of each row in pixels' },
];

export function ObjectTablePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'examples'>('overview');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [showSelection, setShowSelection] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Object Table</h1>
        <p className="text-lg text-gray-600 mt-2">
          High-performance table for displaying OSDK objects with sorting, filtering, pagination, and row selection.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-8" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'overview'}
            aria-controls="overview-panel"
            onClick={() => setActiveTab('overview')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'overview'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Overview
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'examples'}
            aria-controls="examples-panel"
            onClick={() => setActiveTab('examples')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'examples'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Examples
          </button>
        </nav>
      </div>

      {activeTab === 'examples' ? (
        <div id="examples-panel" role="tabpanel" aria-labelledby="examples-tab">
          <ObjectTableExamplesPage />
        </div>
      ) : (
        <div id="overview-panel" role="tabpanel" aria-labelledby="overview-tab" className="space-y-8">
          {/* Live Demo */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Preview</h2>
            <p className="text-gray-600 mb-3">
              Interactive table displaying Employee data from your Foundry instance:
            </p>
            <div className="overflow-hidden shadow-sm" style={{ height: "500px" }}>
              <ObjectTable
                objectType={Employee}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Try clicking column headers to sort, or scroll to load more rows.
            </p>
          </div>

          {/* Installation */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Installation</h2>
            <CodeBlock code={`import { ObjectTable } from "@osdk/react-components/experimental";`} />
          </div>

          {/* Usage */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Usage</h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">Basic</h3>
            <p className="text-gray-600 mb-2">Display all properties automatically:</p>
            <CodeBlock code={`<ObjectTable objectType={Employee} />`} />

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">With Custom Columns</h3>
            <p className="text-gray-600 mb-2">Specify which columns to display:</p>
            <CodeBlock code={`<ObjectTable
  objectType={Employee}
  columnDefinitions={[
    { locator: { type: 'property', id: 'fullName' } },
    { locator: { type: 'property', id: 'class' } },
    { locator: { type: 'property', id: 'startDate' } },
  ]}
/>`} />

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">With Row Selection</h3>
            <p className="text-gray-600 mb-3">Enable multiple row selection with checkboxes:</p>

            <div className="mb-3">
              <button
                onClick={() => setShowSelection(!showSelection)}
                className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                {showSelection ? 'Hide' : 'Show'} Selection Example
              </button>
              {showSelection && (
                <div className="mt-2 px-3 py-2 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800">
                  Selected: {selectedIds.length} employee{selectedIds.length !== 1 ? 's' : ''}
                </div>
              )}
            </div>

            <div
              className="rounded-lg overflow-hidden mb-3 shadow-sm"
              style={{
                height: "400px",
                display: showSelection ? 'block' : 'none'
              }}
            >
              <ObjectTable
                objectType={Employee}
                selectionMode="multiple"
                selectedRows={selectedIds}
                onRowSelection={setSelectedIds}
              />
            </div>

            <CodeBlock code={`const [selectedIds, setSelectedIds] = useState([]);

<ObjectTable
  objectType={Employee}
  selectionMode="multiple"
  selectedRows={selectedIds}
  onRowSelection={setSelectedIds}
/>`} />

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">With Default Sorting</h3>
            <p className="text-gray-600 mb-2">Set initial sort order:</p>
            <CodeBlock code={`<ObjectTable
  objectType={Employee}
  defaultOrderBy={[
    { property: 'startDate', direction: 'desc' }
  ]}
/>`} />
          </div>

          {/* API Reference */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">API Reference</h2>
            <PropsTable props={objectTableProps} />
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="font-semibold text-gray-900 mb-1">Server-side Sorting</div>
                <div className="text-sm text-gray-600">Click column headers to sort. Supports multi-column sorting.</div>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="font-semibold text-gray-900 mb-1">Infinite Scroll</div>
                <div className="text-sm text-gray-600">Automatically loads more rows as you scroll down.</div>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="font-semibold text-gray-900 mb-1">Row Selection</div>
                <div className="text-sm text-gray-600">Single or multiple selection with checkboxes.</div>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="font-semibold text-gray-900 mb-1">Custom Rendering</div>
                <div className="text-sm text-gray-600">Full control over cell and header rendering.</div>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="font-semibold text-gray-900 mb-1">Column Pinning</div>
                <div className="text-sm text-gray-600">Pin columns to left or right side of table.</div>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="font-semibold text-gray-900 mb-1">Resizable Columns</div>
                <div className="text-sm text-gray-600">Drag column edges to resize width.</div>
              </div>
            </div>
          </div>

          {/* Setup callout */}
          <Callout type="info">
            <strong>Setup Required</strong>
            <p className="mt-2">
              To use ObjectTable in your app, configure Foundry credentials in <code className="bg-blue-100 px-1 rounded font-mono text-sm">.env</code>:
            </p>
            <ul className="list-disc list-inside mt-2 ml-2 space-y-1 text-sm">
              <li><code className="bg-blue-100 px-1 rounded font-mono text-sm">VITE_FOUNDRY_URL</code> - Your Foundry instance URL</li>
              <li><code className="bg-blue-100 px-1 rounded font-mono text-sm">VITE_FOUNDRY_CLIENT_ID</code> - OAuth client ID</li>
            </ul>
          </Callout>
        </div>
      )}
    </div>
  );
}
