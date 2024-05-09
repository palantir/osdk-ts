/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { Component } from "./Component.js";
import type { Type } from "./Type.js";
import { SimpleType } from "./Type.js";

export class UnionType extends SimpleType {
  constructor(
    public discriminator: string,
    public subTypes: Record<string, Component>,
  ) {
    super();
  }

  get referencedTypes(): Set<Type> {
    return new Set(Object.values(this.subTypes));
  }

  get tsReferenceString() {
    return Object.entries(this.subTypes).map(([name, type]) =>
      `{ ${this.discriminator}: "${name}" } & ${type.tsReferenceString}`
    ).join("|");
  }
}
