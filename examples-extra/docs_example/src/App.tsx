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
import { OsdkProvider2 } from '@osdk/react/experimental';
import { client } from './foundryClient.js';
import { ObjectTablePage } from './pages/ObjectTablePage.js';
import { ThemingPage, type ThemeKey } from './pages/ThemingPage.js';
import { ThemeSelector } from './components/ThemeSelector.js';
import { ErrorBoundary } from './components/ErrorBoundary.js';
import { Callout } from './components/Callout.js';

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
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('default');

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
          <ThemeSelector currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 border-r border-gray-200 bg-white overflow-y-auto flex-shrink-0">
            <nav className="p-6" aria-label="Main navigation">
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
                          aria-current={activePage === item.id ? 'page' : undefined}
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
              <ErrorBoundary>
                {renderPage()}
              </ErrorBoundary>
            </div>
          </main>
        </div>
      </div>
    </OsdkProvider2>
  );
}

export default App;
