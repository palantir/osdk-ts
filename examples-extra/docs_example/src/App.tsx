import { useState } from 'react'
import { OsdkProvider2 } from '@osdk/react/experimental'
import { ObjectTable } from '@osdk/react-components/experimental'
import { Button } from '@base-ui/react/button'
import { client } from './foundryClient.js'
import { Employee } from './generatedNoCheck/index.js'
import { CodeBlock } from './components/CodeBlock.js'
import { Callout } from './components/Callout.js'
import { PropsTable } from './components/PropsTable.js'
import { ObjectTableExamplesPage } from './pages/ObjectTableExamplesPage.js'

// Theme definitions - using data-theme attributes with CSS
const THEMES = {
  default: {
    name: 'Default',
    description: 'Clean and minimal design with subtle gray tones',
  },
  ocean: {
    name: 'Ocean',
    description: 'Subtle cool blue tones for a professional look',
  },
  forest: {
    name: 'Forest',
    description: 'Muted earthy greens with refined accents',
  },
  sunset: {
    name: 'Sunset',
    description: 'Warm neutral amber for comfortable viewing',
  },
  midnight: {
    name: 'Midnight',
    description: 'Refined dark mode with subtle blue accents',
  },
  violet: {
    name: 'Violet',
    description: 'Soft purple tones for elegant interfaces',
  },
} as const;

type ThemeKey = keyof typeof THEMES;

// Navigation structure
const navigation = [
  {
    category: 'Components',
    items: [
      { name: 'Object Table', id: 'object-table' },
      { name: 'Filter List', id: 'filter-list' },
    ]
  },
  {
    category: 'Customization',
    items: [
      { name: 'Theming', id: 'theming' },
    ]
  },
];

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

// Page components
function ObjectTablePage() {
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
        <nav className="flex gap-8">
          <button
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
        <ObjectTableExamplesPage />
      ) : (
        <div className="space-y-8">
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

            {showSelection && (
              <div className="rounded-lg overflow-hidden mb-3 shadow-sm" style={{ height: "400px" }}>
                <ObjectTable
                  objectType={Employee}
                  selectionMode="multiple"
                  selectedRows={selectedIds}
                  onRowSelection={setSelectedIds}
                />
              </div>
            )}

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

function ThemingPage({ currentTheme, onThemeChange }: { currentTheme: ThemeKey; onThemeChange: (theme: ThemeKey) => void }) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Theming</h1>
        <p className="text-lg text-gray-600 mt-2">
          The ObjectTable (and all OSDK components) can be themed using CSS custom properties from the <code className="bg-gray-100 px-1 rounded font-mono text-sm">@osdk/react-components-styles</code> package.
        </p>
      </div>

      {/* Current Theme Info */}
      <Callout type="info">
        <strong>Current Theme: {THEMES[currentTheme].name}</strong>
        <p className="mt-1 text-sm">
          {THEMES[currentTheme].description}. Use the theme selector in the top bar to switch themes globally.
        </p>
      </Callout>

      {/* Understanding Token Scopes */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Token Scopes</h2>

        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">OSDK Tokens (<code className="bg-gray-100 px-1 rounded font-mono text-sm">--osdk-*</code>)</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
              <li>All tokens used in OSDK components are prefixed with <code className="bg-gray-100 px-1 rounded font-mono text-sm">--osdk-</code></li>
              <li>Any Blueprint token used in OSDK components is mapped to an <code className="bg-gray-100 px-1 rounded font-mono text-sm">--osdk-*</code> token</li>
              <li>Override these to theme <strong>OSDK components only</strong></li>
              <li>Safe to customize without affecting other Blueprint components in your app</li>
            </ul>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Blueprint Tokens (<code className="bg-gray-100 px-1 rounded font-mono text-sm">--bp-*</code>)</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
              <li>Core design tokens from Blueprint design system</li>
              <li>Override these to theme <strong>both Blueprint and OSDK components</strong></li>
              <li>Use this for consistent theming across your entire application</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Customization Strategies */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Customization Strategies</h2>

        <div className="space-y-6">
          {/* Strategy 1 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Override OSDK Tokens Only</h3>
            <p className="text-gray-600 mb-3">Change OSDK component styling without affecting other Blueprint components in your app:</p>
            <CodeBlock code={`@layer osdk.tokens, user.theme;

@import "@osdk/react-components-styles/index.css" layer(osdk.tokens);

@layer user.theme {
  :root {
    /* Only affects OSDK table headers */
    --osdk-table-header-bg: #f0f0f0;
    --osdk-table-border-color: #e0e0e0;
    --osdk-table-row-hover-bg: #f9fafb;

    /* Only affects OSDK components using primary intent */
    --osdk-intent-primary-rest: #2563eb;
    --osdk-intent-primary-hover: #1d4ed8;
  }
}`} />
          </div>

          {/* Strategy 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Override Blueprint Tokens</h3>
            <p className="text-gray-600 mb-3">Change both Blueprint and OSDK components for consistent theming:</p>
            <CodeBlock code={`@layer osdk.tokens, user.theme;

@import "@osdk/react-components-styles/index.css" layer(osdk.tokens);

@layer user.theme {
  :root {
    /* Affects ALL components (Blueprint + OSDK) using primary intent */
    --bp-intent-primary-rest: #2563eb;
    --bp-intent-primary-hover: #1d4ed8;
    --bp-intent-primary-active: #1e40af;

    /* Affects all spacing and borders across the design system */
    --bp-surface-spacing: 8px;
    --bp-surface-border-radius: 8px;
  }
}`} />
          </div>

          {/* Strategy 3 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Scoped Overrides for Specific Tables</h3>
            <p className="text-gray-600 mb-3">Apply custom styles to specific ObjectTable instances using the <code className="bg-gray-100 px-1 rounded font-mono text-sm">className</code> prop:</p>

            <p className="text-sm text-gray-700 mb-2 font-medium">Component:</p>
            <CodeBlock code={`<ObjectTable
  objectType={Employee}
  className="custom-employee-table"
/>`} />

            <p className="text-sm text-gray-700 mb-2 mt-4 font-medium">Styles:</p>
            <CodeBlock code={`.custom-employee-table {
  --osdk-table-header-bg: #1e40af;
  --osdk-table-header-text-color: white;
  --osdk-table-row-hover-bg: #dbeafe;
}`} />
          </div>
        </div>
      </div>

      {/* Common Theming Examples */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Theming Examples</h2>

        <div className="space-y-6">
          {/* Dark Mode */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Dark Mode</h3>
            <CodeBlock code={`@layer user.theme {
  [data-theme="dark"] {
    --osdk-table-header-bg: #1f2937;
    --osdk-table-border-color: #374151;
    --osdk-table-row-hover-bg: #374151;
    --osdk-surface-bg: #111827;
    --osdk-text-primary: #f9fafb;
  }
}`} />
          </div>

          {/* Compact Table */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Compact Table</h3>
            <CodeBlock code={`.compact-table {
  --osdk-surface-spacing: 4px;
  --osdk-table-cell-padding: 8px;
}`} />
            <p className="text-sm text-gray-700 mt-3 mb-2 font-medium">Usage:</p>
            <CodeBlock code={`<ObjectTable
  objectType={Employee}
  className="compact-table"
  rowHeight={32}
/>`} />
          </div>

          {/* Custom Brand Colors */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Custom Brand Colors</h3>
            <CodeBlock code={`@layer user.theme {
  :root {
    /* Use your brand's primary color */
    --bp-intent-primary-rest: #7c3aed;
    --bp-intent-primary-hover: #6d28d9;
    --bp-intent-primary-active: #5b21b6;
  }
}`} />
          </div>
        </div>
      </div>

      {/* Available CSS Variables */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Available CSS Variables</h2>
        <p className="text-gray-600 mb-3">For a complete reference of all available CSS tokens for theming, see:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
          <li>
            <a
              href="../../react-components-styles/CSS_VARIABLES.md"
              className="text-blue-600 hover:underline"
            >
              @osdk/react-components-styles CSS Variables Documentation
            </a>
          </li>
          <li>
            <a
              href="../../react-components-styles/README.md"
              className="text-blue-600 hover:underline"
            >
              @osdk/react-components-styles README
            </a>
          </li>
        </ul>
      </div>

      {/* Accessibility Note */}
      <Callout type="info">
        <strong>Accessibility Note</strong>
        <p className="mt-2">
          When overriding theme tokens, ensure your custom colors meet accessibility standards:
        </p>
        <ul className="list-disc list-inside mt-2 ml-2 space-y-1 text-sm">
          <li><strong>Color contrast ratios</strong> (WCAG AA): 4.5:1 for normal text, 3:1 for large text</li>
          <li><strong>Readable text</strong> on all background colors</li>
          <li><strong>Clear visual distinction</strong> between interactive states (rest, hover, active, disabled)</li>
        </ul>
        <p className="mt-2 text-sm">
          The default tokens are designed to meet WCAG AA standards.
        </p>
      </Callout>

      {/* Additional Resources */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Additional Resources</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
          <li>ObjectTable API Reference</li>
          <li>ObjectTable Implementation</li>
          <li>PeopleApp Examples</li>
          <li>
            <a
              href="../../docs/react/getting-started.md"
              className="text-blue-600 hover:underline"
            >
              @osdk/react Documentation
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  const [activePage, setActivePage] = useState('object-table');
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('default');
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [themeSearchQuery, setThemeSearchQuery] = useState('');

  const renderPage = () => {
    switch (activePage) {
      case 'object-table':
        return <ObjectTablePage />;
      case 'filter-list':
        return <StubPage title="Filter List" description="Configurable filter interface for narrowing object sets. This component is currently in development." />;
      case 'theming':
        return <ThemingPage currentTheme={currentTheme} onThemeChange={setCurrentTheme} />;
      default:
        return <ObjectTablePage />;
    }
  };

  return (
    <OsdkProvider2 client={client}>
      <div className="flex flex-col h-screen bg-white" data-theme={currentTheme}>
        {/* Top Bar */}
        <header className="h-14 border-b border-gray-200 bg-white flex-shrink-0 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-gray-900">OSDK Components</h1>
          </div>

          {/* Theme Selector */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <span className="font-medium text-gray-700">{THEMES[currentTheme].name}</span>
              <svg className={`w-4 h-4 text-gray-500 transition-transform ${themeDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                {/* Search Bar */}
                <div className="p-2 border-b border-gray-200">
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search themes..."
                      value={themeSearchQuery}
                      onChange={(e) => setThemeSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      autoFocus
                    />
                  </div>
                </div>

                {/* Theme List */}
                <div className="p-2 max-h-80 overflow-y-auto">
                  {(Object.keys(THEMES) as ThemeKey[])
                    .filter((themeKey) => {
                      const theme = THEMES[themeKey];
                      const query = themeSearchQuery.toLowerCase();
                      return (
                        theme.name.toLowerCase().includes(query) ||
                        theme.description.toLowerCase().includes(query)
                      );
                    })
                    .map((themeKey) => (
                      <button
                        key={themeKey}
                        onClick={() => {
                          setCurrentTheme(themeKey);
                          setThemeDropdownOpen(false);
                          setThemeSearchQuery('');
                        }}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          currentTheme === themeKey
                            ? 'bg-blue-50 text-blue-700 font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <div className="font-medium">{THEMES[themeKey].name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{THEMES[themeKey].description}</div>
                      </button>
                    ))}
                  {(Object.keys(THEMES) as ThemeKey[]).filter((themeKey) => {
                    const theme = THEMES[themeKey];
                    const query = themeSearchQuery.toLowerCase();
                    return (
                      theme.name.toLowerCase().includes(query) ||
                      theme.description.toLowerCase().includes(query)
                    );
                  }).length === 0 && (
                    <div className="px-3 py-4 text-sm text-gray-500 text-center">
                      No themes found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 border-r border-gray-200 bg-white overflow-y-auto flex-shrink-0">
            <nav className="p-6">
              {navigation.map((section) => (
                <div key={section.category} className="mb-8">
                  <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                    {section.category}
                  </h2>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => setActivePage(item.id)}
                          className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                            activePage === item.id
                              ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow-sm'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          {item.name}
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
      </div>
    </OsdkProvider2>
  );
}

export default App
