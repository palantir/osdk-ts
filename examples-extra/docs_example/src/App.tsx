import { useState } from 'react'
import { OsdkProvider2 } from '@osdk/react/experimental'
import { ObjectTable } from '@osdk/react-components/experimental'
import { client } from './foundryClient.js'
import { Employee } from './generatedNoCheck/index.js'

// Navigation structure
const navigation = [
  {
    category: 'Getting Started',
    items: [
      { name: 'Overview', id: 'overview' },
      { name: 'Installation', id: 'installation' },
      { name: 'Usage', id: 'usage' },
      { name: 'llms.txt', id: 'llms-library', badge: 'NEW' },
    ]
  },
  {
    category: 'Components',
    items: [
      { name: 'Object Table', id: 'object-table' },
      { name: 'Object List', id: 'object-list' },
      { name: 'Property Editor', id: 'property-editor' },
      { name: 'Filter Bar', id: 'filter-bar' },
      { name: 'Action Button', id: 'action-button' },
    ]
  },
  {
    category: 'Configuration',
    items: [
      { name: 'Object Types', id: 'object-types' },
      { name: 'Properties', id: 'properties' },
      { name: 'Filters', id: 'filters' },
    ]
  },
  {
    category: 'Guides',
    items: [
      { name: 'Theming', id: 'theming' },
      { name: 'Customization', id: 'customization' },
    ]
  },
];

// Code block component with copy button
function CodeBlock({ code, language = 'tsx' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-[#1e1e2e] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-600"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}

// Callout component
function Callout({ type = 'info', children }: { type?: 'info' | 'warning'; children: React.ReactNode }) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
  };
  const icons = {
    info: 'ℹ️',
    warning: '⚠️',
  };

  return (
    <div className={`p-4 rounded-lg border ${styles[type]} flex gap-3`}>
      <span>{icons[type]}</span>
      <div>{children}</div>
    </div>
  );
}

// Props table component
function PropsTable({ props }: { props: Array<{ name: string; type: string; default?: string; description: string }> }) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Prop Name</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Type</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Default</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className="px-4 py-3 whitespace-nowrap font-mono text-sm text-pink-600">{prop.name}</td>
              <td className="px-4 py-3 whitespace-nowrap font-mono text-sm text-gray-600">{prop.type}</td>
              <td className="px-4 py-3 whitespace-nowrap font-mono text-sm text-gray-500">{prop.default || '—'}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Sample data for Object Table preview
const sampleEmployees = [
  { id: 1, fullName: 'John Doe', department: 'Engineering', startDate: '2023-01-15', status: 'Active' },
  { id: 2, fullName: 'Jane Smith', department: 'Marketing', startDate: '2022-03-20', status: 'Active' },
  { id: 3, fullName: 'Bob Johnson', department: 'Sales', startDate: '2021-07-10', status: 'On Leave' },
  { id: 4, fullName: 'Alice Brown', department: 'Engineering', startDate: '2023-06-01', status: 'Active' },
  { id: 5, fullName: 'Charlie Wilson', department: 'HR', startDate: '2020-11-15', status: 'Active' },
];

// Object Table props
const objectTableProps = [
  { name: 'objectType', type: 'string', description: 'The API name of the ontology object type to display.' },
  { name: 'columns', type: 'Column[]', description: 'Array of column definitions. Each column specifies a property API name, display label, width, and optional custom cell renderer.' },
  { name: 'onRowClick', type: '(object: OntologyObject) => void', description: 'Callback fired when a row is clicked.' },
  { name: 'enableSorting', type: 'boolean', default: 'true', description: 'Enable column header sorting.' },
  { name: 'enableFiltering', type: 'boolean', default: 'false', description: 'Show a filter bar above the table for narrowing results.' },
  { name: 'rowActions', type: 'RowAction[]', description: 'Array of action definitions rendered as buttons or a menu on each row.' },
  { name: 'pageSize', type: 'number', default: '50', description: 'Number of rows per page.' },
  { name: 'enableSelection', type: 'boolean', default: 'false', description: 'Enable row checkbox selection.' },
  { name: 'onSelectionChange', type: '(selectedObjects: OntologyObject[]) => void', description: 'Callback when selection changes.' },
  { name: 'loading', type: 'boolean', default: 'false', description: 'Show a loading skeleton state.' },
  { name: 'emptyState', type: 'ReactNode', description: 'Custom content to display when no results are found.' },
];

// llms.txt content for library
const llmsLibraryContent = `# OSDK Component Library

> A React component library for building applications on the Ontology SDK (OSDK). Provides data-bound UI components for displaying, editing, and interacting with ontology objects.

## Components

- [Object Table](/components/object-table): High-scale, data-agnostic table for displaying ontology objects with sorting, filtering, and row actions.
- [Object List](/components/object-list): Vertical list view for ontology objects with customizable item rendering.
- [Property Editor](/components/property-editor): Form component for viewing and editing object properties.
- [Filter Bar](/components/filter-bar): Configurable filter interface for narrowing object sets.
- [Action Button](/components/action-button): Button that triggers ontology actions with built-in validation and confirmation.

## Key Concepts

- Object Types: Define the schema and structure of ontology objects.
- Properties: Typed attributes on object types (string, number, date, etc.).
- Filters: Predicates for narrowing object sets by property values.
- Actions: Operations that modify ontology objects with defined parameters and validation.

## Optional

- [Theming](/guides/theming): Customize component appearance via CSS variables and design tokens.
- [Integration](/guides/integration): Connect components to OSDK client instances.`;

// llms.txt content for Object Table
const llmsObjectTableContent = `# Object Table

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

## Column Definition

- property (string, required): The API name of the object property.
- label (string, optional): Display header text. Defaults to the property's display name.
- width (number | string, optional): Column width in pixels or as a CSS value.
- cellRenderer ((value: any, object: OntologyObject) => ReactNode, optional): Custom render function for cells in this column.
- sortable (boolean, default: true): Whether this column supports sorting.

## Row Action Definition

- label (string, required): Display text for the action.
- onClick ((object: OntologyObject) => void, required): Callback when the action is triggered.
- icon (ReactNode, optional): Icon to display alongside the label.
- disabled ((object: OntologyObject) => boolean, optional): Function to conditionally disable the action.

## Usage Examples

- Basic: \`<ObjectTable objectType="Employee" />\`
- With columns: \`<ObjectTable objectType="Employee" columns={[{ property: "fullName", label: "Name" }, { property: "department" }, { property: "startDate", label: "Hired" }]} />\`
- With row actions: \`<ObjectTable objectType="Employee" rowActions={[{ label: "Edit", onClick: (obj) => openEditor(obj) }, { label: "Delete", onClick: (obj) => deleteObject(obj) }]} />\`

## Related

- [Filter Bar](/components/filter-bar): Use alongside Object Table for advanced filtering.
- [Property Editor](/components/property-editor): Open from a row action to edit object properties.
- [Object Types (Configuration)](/configuration/object-types): Define the schema that Object Table reads from.`;

// Page components
function OverviewPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">OSDK Components</h1>
      <p className="text-lg text-gray-600">
        A React component library for building applications on the Ontology SDK (OSDK). 
        Provides data-bound UI components for displaying, editing, and interacting with ontology objects.
      </p>
      <Callout type="info">
        This library requires <code className="bg-gray-100 px-1 rounded font-mono text-sm">@osdk/client</code> to be configured in your application.
      </Callout>
      <h2 className="text-2xl font-bold text-gray-900 pt-4">Features</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>High-performance data tables with sorting, filtering, and pagination</li>
        <li>Form components for viewing and editing object properties</li>
        <li>Action buttons with built-in validation and confirmation dialogs</li>
        <li>Fully typed with TypeScript support</li>
        <li>Customizable theming via CSS variables</li>
      </ul>
    </div>
  );
}

function InstallationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Installation</h1>
      <p className="text-lg text-gray-600">Install the OSDK Components package using your package manager.</p>
      <h2 className="text-2xl font-bold text-gray-900">npm</h2>
      <CodeBlock code="npm install @osdk/components" language="bash" />
      <h2 className="text-2xl font-bold text-gray-900">yarn</h2>
      <CodeBlock code="yarn add @osdk/components" language="bash" />
      <h2 className="text-2xl font-bold text-gray-900">pnpm</h2>
      <CodeBlock code="pnpm add @osdk/components" language="bash" />
    </div>
  );
}

function UsagePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Usage</h1>
      <p className="text-lg text-gray-600">Get started with OSDK Components in your React application.</p>
      <h2 className="text-2xl font-bold text-gray-900">Basic Setup</h2>
      <CodeBlock code={`import { OsdkProvider } from "@osdk/components";
import { client } from "./osdk";

function App() {
  return (
    <OsdkProvider client={client}>
      <YourApp />
    </OsdkProvider>
  );
}`} />
      <h2 className="text-2xl font-bold text-gray-900">Using Components</h2>
      <CodeBlock code={`import { ObjectTable } from "@osdk/components";

function EmployeeList() {
  return (
    <ObjectTable 
      objectType="Employee"
      enableSorting
      enableFiltering
    />
  );
}`} />
    </div>
  );
}

function LlmsLibraryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="text-4xl font-bold text-gray-900">llms.txt</h1>
        <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">NEW</span>
      </div>
      <p className="text-lg text-gray-600">
        A standardized plain-text file that helps Large Language Models understand your library.
      </p>
      
      <Callout type="info">
        <strong>What is llms.txt?</strong> Similar to <code className="bg-blue-100 px-1 rounded font-mono text-sm">robots.txt</code> for search engines, 
        <code className="bg-blue-100 px-1 rounded font-mono text-sm">llms.txt</code> is a proposed standard for helping AI assistants understand your project.
        Learn more at <a href="https://llmstxt.org" className="underline text-blue-600" target="_blank" rel="noreferrer">llmstxt.org</a>.
      </Callout>

      <h2 className="text-2xl font-bold text-gray-900">OSDK Component Library llms.txt</h2>
      <p className="text-gray-600">This file covers the entire component library:</p>
      <CodeBlock code={llmsLibraryContent} language="markdown" />

      <h2 className="text-2xl font-bold text-gray-900">How to Use</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Paste as context:</strong> Copy the content above and paste it at the beginning of your LLM conversation.</li>
        <li><strong>System prompt:</strong> Reference the llms.txt content in your system prompt for AI coding assistants.</li>
        <li><strong>Host publicly:</strong> Serve the file at <code className="bg-gray-100 px-1 rounded font-mono text-sm">/llms.txt</code> on your documentation site.</li>
      </ul>
    </div>
  );
}

function ObjectTablePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Object Table</h1>
        <p className="text-lg text-gray-600 mt-2">
          A high-scale, data-agnostic table component for displaying ontology objects. 
          Supports sorting, filtering, pagination, row selection, row actions, and custom cell rendering.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Installation</h2>
        <CodeBlock code={`import { ObjectTable } from "@osdk/components";`} />
      </div>

      <Callout type="info">
        <strong>Setup Required</strong>
        <p className="mt-2">
          To see the live ObjectTable below, you need to configure your Foundry credentials:
        </p>
        <ol className="list-decimal list-inside mt-2 ml-2 space-y-1">
          <li>Copy <code className="bg-blue-100 px-1 rounded font-mono text-sm">.env.example</code> to <code className="bg-blue-100 px-1 rounded font-mono text-sm">.env</code></li>
          <li>Set <code className="bg-blue-100 px-1 rounded font-mono text-sm">VITE_FOUNDRY_URL</code> to your Foundry instance URL</li>
          <li>Set <code className="bg-blue-100 px-1 rounded font-mono text-sm">VITE_FOUNDRY_CLIENT_ID</code> to your OAuth client ID</li>
          <li>Restart the dev server</li>
        </ol>
      </Callout>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Live Preview</h2>
        <p className="text-gray-600 mb-3">
          This is a live, working instance of the ObjectTable component displaying Employee data:
        </p>
        <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ height: "500px" }}>
          <ObjectTable
            objectType={Employee}
            columnDefinitions={[
              { locator: { type: 'property', id: 'fullName' } },
              { locator: { type: 'property', id: 'class' } },
              { locator: { type: 'property', id: 'office' } },
              { locator: { type: 'property', id: 'startDate' } },
            ]}
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Features</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Column sorting with single and multi-column support</li>
          <li>Built-in filter bar with property-based filtering</li>
          <li>Pagination with configurable page sizes</li>
          <li>Row selection with checkbox support</li>
          <li>Custom row actions (edit, delete, etc.)</li>
          <li>Custom cell renderers for advanced formatting</li>
          <li>Loading and empty state handling</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Props / API</h2>
        <PropsTable props={objectTableProps} />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Usage Examples</h2>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Basic Usage</h3>
        <p className="text-gray-600 mb-2">Display a simple table with auto-generated columns:</p>
        <CodeBlock code={`<ObjectTable objectType="Employee" />`} />

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">With Custom Columns</h3>
        <p className="text-gray-600 mb-2">Specify which columns to display and their labels:</p>
        <CodeBlock code={`<ObjectTable 
  objectType="Employee" 
  columns={[
    { property: "fullName", label: "Name" },
    { property: "department" },
    { property: "startDate", label: "Hired" }
  ]} 
/>`} />

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">With Row Actions</h3>
        <p className="text-gray-600 mb-2">Add action buttons to each row:</p>
        <CodeBlock code={`<ObjectTable 
  objectType="Employee" 
  rowActions={[
    { label: "Edit", onClick: (obj) => openEditor(obj) },
    { label: "Delete", onClick: (obj) => deleteObject(obj) }
  ]} 
/>`} />
      </div>

      <Callout type="warning">
        When using <code className="bg-amber-100 px-1 rounded font-mono text-sm">enableFiltering</code>, ensure your object type has the appropriate indexes configured for optimal performance.
      </Callout>

      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-2xl font-bold text-gray-900">llms.txt</h2>
          <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">NEW</span>
        </div>
        <p className="text-gray-600 mb-3">
          Use this llms.txt content to help AI assistants understand the Object Table component. 
          <a href="https://llmstxt.org" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noreferrer">Learn more →</a>
        </p>
        <CodeBlock code={llmsObjectTableContent} language="markdown" />
      </div>
    </div>
  );
}

function StubPage({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      <p className="text-lg text-gray-600">{description}</p>
      <Callout type="info">
        Documentation for this component is coming soon.
      </Callout>
    </div>
  );
}

function App() {
  const [activePage, setActivePage] = useState('object-table');

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <OverviewPage />;
      case 'installation':
        return <InstallationPage />;
      case 'usage':
        return <UsagePage />;
      case 'llms-library':
        return <LlmsLibraryPage />;
      case 'object-table':
        return <ObjectTablePage />;
      case 'object-list':
        return <StubPage title="Object List" description="Vertical list view for ontology objects with customizable item rendering." />;
      case 'property-editor':
        return <StubPage title="Property Editor" description="Form component for viewing and editing object properties." />;
      case 'filter-bar':
        return <StubPage title="Filter Bar" description="Configurable filter interface for narrowing object sets." />;
      case 'action-button':
        return <StubPage title="Action Button" description="Button that triggers ontology actions with built-in validation and confirmation." />;
      case 'object-types':
        return <StubPage title="Object Types" description="Define the schema and structure of ontology objects." />;
      case 'properties':
        return <StubPage title="Properties" description="Typed attributes on object types (string, number, date, etc.)." />;
      case 'filters':
        return <StubPage title="Filters" description="Predicates for narrowing object sets by property values." />;
      case 'theming':
        return <StubPage title="Theming" description="Customize component appearance via CSS variables and design tokens." />;
      case 'customization':
        return <StubPage title="Customization" description="Advanced customization options for OSDK Components." />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <OsdkProvider2 client={client}>
      <div className="flex h-screen bg-white">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-200 bg-gray-50 overflow-y-auto flex-shrink-0">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-lg font-bold text-gray-900">OSDK Components</h1>
            <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-gray-200 text-gray-700 rounded">
              v2.4.0
            </span>
          </div>
          <nav className="p-4">
            {navigation.map((section) => (
              <div key={section.category} className="mb-6">
                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  {section.category}
                </h2>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActivePage(item.id)}
                        className={`w-full text-left px-2 py-1.5 rounded text-sm flex items-center gap-2 transition-colors ${
                          activePage === item.id
                            ? 'bg-blue-50 text-blue-700 font-medium border-l-2 border-blue-600 -ml-0.5 pl-2.5'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {item.name}
                        {item.badge && (
                          <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-blue-100 text-blue-700 rounded">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-8 py-12">
            {renderPage()}
          </div>
        </main>
      </div>
    </OsdkProvider2>
  );
}

export default App
