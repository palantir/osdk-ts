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

// WARNING!
// WARNING!
// This file is used for tests that check intellisense. Editing this file by hand will likely
// break tests that have hard coded line numbers and line offsets.

import type { DerivedProperty } from "@osdk/api";
import { Employee } from "@osdk/client.test.ontology";
import { useOsdkObjects } from "@osdk/react/experimental";

function TestComponent() {
  const withProps: DerivedProperty.Clause<typeof Employee> = {
    constantValue: (employee) => employee.constant.integer(42),
  };

  const { data } = useOsdkObjects(Employee, {
    withProperties: withProps,
  });

  return null;
}
