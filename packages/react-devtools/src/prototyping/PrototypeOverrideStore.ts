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

import { SubscribableStore } from "../store/SubscribableStore.js";

export interface PrototypeOverrideParams {
  where?: Record<string, unknown>;
  orderBy?: Record<string, "asc" | "desc">;
  pageSize?: number;
  groupBy?: Record<string, unknown>;
  select?: Record<string, unknown>;
}

export interface PrototypeOverride {
  bindingId: string;
  componentId: string;
  componentName: string;
  hookType: string;
  hookIndex: number;
  objectType: string;
  querySignature: string;
  originalParams: PrototypeOverrideParams;
  overrideParams: PrototypeOverrideParams;
  enabled: boolean;
  createdAt: number;
}

export class PrototypeOverrideStore extends SubscribableStore {
  private overrides = new Map<string, PrototypeOverride>();
  private signatureToBindingId = new Map<string, string>();

  setOverride(override: PrototypeOverride): void {
    this.overrides.set(override.bindingId, override);
    this.signatureToBindingId.set(override.querySignature, override.bindingId);
    this.notifySubscribers();
  }

  getOverride(bindingId: string): PrototypeOverride | undefined {
    return this.overrides.get(bindingId);
  }

  getOverrideBySignature(
    querySignature: string,
  ): PrototypeOverride | undefined {
    const bindingId = this.signatureToBindingId.get(querySignature);
    if (bindingId) {
      return this.overrides.get(bindingId);
    }
    return undefined;
  }

  updateOverride(
    bindingId: string,
    updates: Partial<Pick<PrototypeOverride, "overrideParams" | "enabled">>,
  ): void {
    const existing = this.overrides.get(bindingId);
    if (existing) {
      this.overrides.set(bindingId, { ...existing, ...updates });
      this.notifySubscribers();
    }
  }

  clearOverride(bindingId: string): void {
    const override = this.overrides.get(bindingId);
    if (override) {
      this.signatureToBindingId.delete(override.querySignature);
      this.overrides.delete(bindingId);
      this.notifySubscribers();
    }
  }

  clearAll(): void {
    this.overrides.clear();
    this.signatureToBindingId.clear();
    this.notifySubscribers();
  }

  getAll(): PrototypeOverride[] {
    return Array.from(this.overrides.values());
  }

  hasOverride(querySignature: string): boolean {
    return this.signatureToBindingId.has(querySignature);
  }
}
