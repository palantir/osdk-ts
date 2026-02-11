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

import { ObjectTable } from "@osdk/react-components/experimental";
import { Employee } from "../../generatedNoCheck/index.js";

export function DerivedPropertyExample() {
  return (
    <div className="space-y-3">
      <div className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          <strong>Derived Properties (RDPs)</strong> let you display data from related objects.
          This example shows each employee's manager by following the "lead" relationship.
        </p>
      </div>
      <div style={{ height: "400px" }}>
        <ObjectTable
          objectType={Employee}
        />
      </div>
    </div>
  );
}
