import React from 'react';

const ObjectTable = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Object Table</h1>
      <p className="mt-2 text-lg text-gray-600">A high-scale, data-agnostic table for displaying ontology objects with sorting, filtering, and row actions.</p>
      
      <h2 className="text-2xl font-bold mt-8">Installation</h2>
      <pre className="bg-gray-800 text-white p-4 rounded mt-2">
        <code>import {'{ ObjectTable }'} from "@osdk/components";</code>
      </pre>

      <h2 className="text-2xl font-bold mt-8">Preview</h2>
      <div className="mt-2 border rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hired</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">Engineering</td>
              <td className="px-6 py-4 whitespace-nowrap">2023-01-15</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
              <td className="px-6 py-4 whitespace-nowrap">Marketing</td>
              <td className="px-6 py-4 whitespace-nowrap">2022-03-20</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8">Features</h2>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li>Sorting</li>
        <li>Filtering</li>
        <li>Pagination</li>
        <li>Row selection</li>
        <li>Row actions</li>
        <li>Custom cell rendering</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">Props / API</h2>
      <div className="mt-2 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prop Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-mono">objectType</td>
              <td className="px-6 py-4 whitespace-nowrap font-mono">string</td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4">The API name of the ontology object type to display.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-mono">columns</td>
              <td className="px-6 py-4 whitespace-nowrap font-mono">Column[]</td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4">Array of column definitions.</td>
            </tr>
             <tr>
              <td className="px-6 py-4 whitespace-nowrap font-mono">onRowClick</td>
              <td className="px-6 py-4 whitespace-nowrap font-mono">{'(object: OntologyObject) => void'}</td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4">Callback fired when a row is clicked.</td>
            </tr>
             <tr>
              <td className="px-6 py-4 whitespace-nowrap font-mono">enableSorting</td>
              <td className="px-6 py-4 whitespace-nowrap font-mono">boolean</td>
              <td className="px-6 py-4 whitespace-nowrap font-mono">true</td>
              <td className="px-6 py-4">Enable column header sorting.</td>
            </tr>
             <tr>
              <td className="px-6 py-4 whitespace-nowrap font-mono">enableFiltering</td>
              <td className="px-6 py-4 whitespace-nowrap font-mono">boolean</td>
              <td className="px-6 py-4 whitespace-nowrap font-mono">false</td>
              <td className="px-6 py-4">Show a filter bar above the table for narrowing results.</td>
            </tr>
             <tr>
              <td className="px-6 py-4 whitespace-nowrap font-mono">rowActions</td>
              <td className="px-6 py-4 whitespace-nowrap font-mono">RowAction[]</td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4">Array of action definitions rendered as buttons or a menu on each row.</td>
            </tr>
             <tr>
              <td className="px-6 py-4 whitespace-nowrap font-mono">pageSize</td>
              <td className="px-6 py-4 whitespace-nowrap font-mono">number</td>
              <td className="px-6 py-4 whitespace-nowrap font-mono">50</td>
              <td className="px-6 py-4">Number of rows per page.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8">Usage Examples</h2>
      <p className="mt-2">Basic usage:</p>
      <pre className="bg-gray-800 text-white p-4 rounded mt-2">
        <code>{'<ObjectTable objectType="Employee" />'}</code>
      </pre>
      <p className="mt-4">With columns:</p>
      <pre className="bg-gray-800 text-white p-4 rounded mt-2">
        <code>{'<ObjectTable objectType="Employee" columns={[{ property: "fullName", label: "Name" }, { property: "department" }, { property: "startDate", label: "Hired" }]} />'}</code>
      </pre>
      <p className="mt-4">With row actions:</p>
      <pre className="bg-gray-800 text-white p-4 rounded mt-2">
        <code>{'<ObjectTable objectType="Employee" rowActions={[{ label: "Edit", onClick: (obj) => openEditor(obj) }, { label: "Delete", onClick: (obj) => deleteObject(obj) }]} />'}</code>
      </pre>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-bold text-blue-800">llms.txt <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">NEW</span></h3>
        <p className="mt-2 text-sm text-blue-700">This component has a detailed llms.txt file to help Large Language Models understand its API and usage. You can learn more about llms.txt at <a href="https://llmstxt.org" className="underline">llmstxt.org</a>.</p>
        <pre className="bg-gray-800 text-white p-4 rounded mt-2 text-sm">
          <code>
{`# Object Table

> A high-scale, data-agnostic table component for displaying ontology objects. Supports sorting, filtering, pagination, row selection, row actions, and custom cell rendering. Built on OSDK's ontology data layer.

## Import

- \`import { ObjectTable } from "@osdk/components";\`

## Props

- objectType (string, required): The API name of the ontology object type to display.
- columns (Column[], optional): Array of column definitions. Each column specifies a property API name, display label, width, and optional custom cell renderer. If omitted, columns are auto-generated from the object type's properties.
- onRowClick ((object: OntologyObject) => void, optional): Callback fired when a row is clicked.
- enableSorting (boolean, default: true): Enable column header sorting.
- enableFiltering (boolean, default: false): Show a filter bar above the table for narrowing results.
- rowActions (RowAction[], optional): Array of action definitions rendered as buttons or a menu on each row.
- pageSize (number, default: 50): Number of rows per page.
- enableSelection (boolean, default: false): Enable row checkbox selection.
- onSelectionChange ((selectedObjects: OntologyObject[]) => void, optional): Callback when selection changes.
- loading (boolean, default: false): Show a loading skeleton state.
- emptyState (ReactNode, optional): Custom content to display when no results are found.
`}
          </code>
        </pre>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Copy</button>
      </div>
    </div>
  );
};

export default ObjectTable;
