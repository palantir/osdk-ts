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
import { ObjectTable } from '@osdk/react-components/experimental';
import { client } from './foundryClient.js';
import { Employee } from './generatedNoCheck/index.js';
import { ObjectTableExamplesPage } from './pages/ObjectTableExamplesPage.js';

function App() {
  const [showExamples, setShowExamples] = useState(false);

  if (showExamples) {
    return (
      <OsdkProvider2 client={client}>
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="max-w-6xl mx-auto">
            <button
              onClick={() => setShowExamples(false)}
              className="mb-4 text-blue-600 hover:text-blue-800 flex items-center gap-2"
            >
              ← Back to basics
            </button>
            <ObjectTableExamplesPage />
          </div>
        </div>
      </OsdkProvider2>
    );
  }

  return (
    <OsdkProvider2 client={client}>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              OSDK Components Demo
            </h1>
            <p className="text-gray-600">
              Explore OSDK React Components with live examples
            </p>
          </header>

          <main className="space-y-6">
            <section className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ObjectTable - Basic Example
              </h2>
              <p className="text-gray-600 mb-4">
                A high-performance table component for displaying OSDK objects with
                built-in sorting, filtering, and pagination.
              </p>

              <div className="border rounded-lg overflow-hidden" style={{ height: '500px' }}>
                <ObjectTable objectType={Employee} />
              </div>

              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
                <h3 className="font-semibold text-blue-900 mb-2">Try it out:</h3>
                <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                  <li>Click column headers to sort</li>
                  <li>Scroll to load more rows</li>
                  <li>Drag column edges to resize</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                More Examples
              </h2>
              <p className="text-gray-600 mb-4">
                Explore advanced ObjectTable features with 7 comprehensive examples.
              </p>
              <button
                onClick={() => setShowExamples(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                View All Examples →
              </button>
            </section>
          </main>
        </div>
      </div>
    </OsdkProvider2>
  );
}

export default App;
