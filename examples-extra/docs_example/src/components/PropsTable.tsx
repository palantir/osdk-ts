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

import { Tooltip } from "@base-ui/react/tooltip";

interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
}

interface PropsTableProps {
  props: PropDefinition[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="docs-props-table-container">
      <table className="docs-props-table">
        <thead>
          <tr>
            <th>Prop Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className="docs-props-table-cell-name">
                {prop.name}
              </td>
              <td className="docs-props-table-cell-type">
                {prop.type}
              </td>
              <td className="docs-props-table-cell-default">
                {prop.default || '—'}
              </td>
              <td className="docs-props-table-cell-description">
                {prop.description.length > 100 ? (
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <span className="docs-props-table-description-truncated">
                        {prop.description.slice(0, 100)}...
                      </span>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Positioner sideOffset={4}>
                        <Tooltip.Popup className="docs-props-table-tooltip">
                          {prop.description}
                        </Tooltip.Popup>
                      </Tooltip.Positioner>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                ) : (
                  prop.description
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
