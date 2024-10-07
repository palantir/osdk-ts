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

export abstract class Type {
  abstract getDeclaration(localNamespace: string | undefined): string;
  abstract get referencedTypes(): Set<Type>;
  abstract getTsReferenceString(localNamespace: string | undefined): string;

  getPropertyDeclaration(name: string, localNamespace: string | undefined) {
    return `${name}: ${
      this.getDeclaration(localNamespace).replace(/Record(?![<])/g, "_Record")
    }`;
  }

  isComponent: boolean = false;

  get referencedComponents(): Component[] {
    return [...this.referencedTypes].filter(t => t.isComponent) as Component[];
  }
}
export abstract class SimpleType extends Type {
  get referencedTypes(): Set<Type> {
    return new Set();
  }

  getTsReferenceString(localNamespace: string): string {
    return this.getDeclaration(localNamespace);
  }
}
export abstract class SingleSubType extends SimpleType {
  constructor(public subType: Type) {
    super();
  }

  get referencedTypes(): Set<Type> {
    return this.subType.referencedTypes;
  }
}
