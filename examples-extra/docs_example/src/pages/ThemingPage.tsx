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

import { CodeBlock } from '../components/CodeBlock.js';
import { Callout } from '../components/Callout.js';

export const THEMES = {
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

export type ThemeKey = keyof typeof THEMES;

interface ThemingPageProps {
  currentTheme: ThemeKey;
  onThemeChange: (theme: ThemeKey) => void;
}

export function ThemingPage({ currentTheme, onThemeChange }: ThemingPageProps) {
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
