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

import type { ObjectTypeDefinition } from '@osdk/client';

interface PropertyExplorerProps {
  objectType: ObjectTypeDefinition;
}

export function PropertyExplorer({ objectType }: PropertyExplorerProps) {
  const metadata = objectType.__DefinitionMetadata;

  if (!metadata) {
    return (
      <div className="text-gray-500 text-sm">
        No property metadata available for this object type.
      </div>
    );
  }

  const properties = Object.entries(metadata.properties);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700">
          Available Properties ({properties.length})
        </h3>
        <p className="text-xs text-gray-600 mt-1">
          Properties available on <code className="bg-gray-200 px-1 rounded font-mono text-xs">{metadata.apiName}</code> objects from your Foundry instance
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Property
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {properties.map(([propertyName, propertyDef]) => {
              const isPrimaryKey = propertyName === metadata.primaryKeyApiName;
              const description = typeof propertyDef === 'object' && propertyDef !== null && 'description' in propertyDef
                ? String(propertyDef.description)
                : undefined;
              const type = typeof propertyDef === 'object' && propertyDef !== null && 'type' in propertyDef
                ? String(propertyDef.type)
                : 'unknown';

              return (
                <tr key={propertyName} className={isPrimaryKey ? 'bg-blue-50' : ''}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <code className="font-mono text-sm text-pink-600">
                      {propertyName}
                    </code>
                    {isPrimaryKey && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        Primary Key
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="text-sm text-gray-700 font-mono">
                      {type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {description || (
                      <span className="text-gray-400 italic">No description</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
