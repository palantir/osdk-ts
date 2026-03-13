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

/**
 * @module @osdk/react/testing
 *
 * Testing utilities for OSDK React hooks.
 *
 * @example
 * ```typescript
 * import { createMockObservableClient } from "@osdk/react/testing";
 * import { renderHook } from "@testing-library/react";
 *
 * const mockClient = createMockObservableClient({
 *   objects: [
 *     {
 *       objectType: Player,
 *       primaryKey: "player-1",
 *       data: { name: "John", age: 25, $primaryKey: "player-1", $apiName: "Player" },
 *     },
 *   ],
 * });
 *
 * // Use in tests
 * const wrapper = ({ children }) => (
 *   <OsdkProvider2 observableClient={mockClient}>
 *     {children}
 *   </OsdkProvider2>
 * );
 *
 * const { result } = renderHook(() => useOsdkObject(Player, "player-1", { shape: SlimPlayer }), { wrapper });
 * ```
 */

export {
  createMockObservableClient,
  type MockObservableClient,
  type MockObservableClientConfig,
  type MockObjectConfig,
} from "./createMockObservableClient.js";
