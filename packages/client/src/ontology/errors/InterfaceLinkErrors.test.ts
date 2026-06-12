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

import { describe, expect, it } from "vitest";
import {
  InterfaceLinkNotResolvableError,
  OntologyMetadataNotFoundError,
} from "./InterfaceLinkErrors.js";

describe("interface link errors", () => {
  it("OntologyMetadataNotFoundError carries apiName and a stable name", () => {
    const e = new OntologyMetadataNotFoundError("Category");
    expect(e.name).toBe("OntologyMetadataNotFoundError");
    expect(e.apiName).toBe("Category");
    expect(e).toBeInstanceOf(Error);
  });
  it("InterfaceLinkNotResolvableError carries concrete + link", () => {
    const e = new InterfaceLinkNotResolvableError(
      "SubCategory",
      "childCategories",
    );
    expect(e.name).toBe("InterfaceLinkNotResolvableError");
    expect(e.concreteType).toBe("SubCategory");
    expect(e.interfaceLinkApiName).toBe("childCategories");
  });
});
