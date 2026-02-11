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

import { useState } from "react";
import { ObjectTable } from "@osdk/react-components/experimental";
import { Employee } from "../../generatedNoCheck/index.js";

export function SelectionExample() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  return (
    <div className="space-y-3">
      <div className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="text-sm font-medium text-blue-900">
          Selected: {selectedIds.length} employee{selectedIds.length !== 1 ? 's' : ''}
        </div>
        {selectedIds.length > 0 && (
          <div className="text-xs text-blue-700 mt-1">
            IDs: {selectedIds.join(', ')}
          </div>
        )}
      </div>
      <div style={{ height: "400px" }}>
        <ObjectTable
          objectType={Employee}
          selectionMode="multiple"
          selectedRows={selectedIds}
          onRowSelection={setSelectedIds}
        />
      </div>
    </div>
  );
}
