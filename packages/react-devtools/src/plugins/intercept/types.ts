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

import type { SelectedPrimitive } from "../../components/PrimitiveSelectionPanel.js";
import type { MockResponse } from "../../mocking/MockManager.js";
import type {
  PrototypeOverride,
  PrototypeOverrideParams,
} from "../../prototyping/PrototypeOverrideStore.js";

export interface MockConfiguration {
  primitive: SelectedPrimitive;
  mockType: "static" | "function" | "passthrough";
  responseType: "success" | "error";
  usePayload?: boolean;
  payload?: string;
  useResponse?: boolean;
  staticData?: string;
  functionCode?: string;
  errorMessage?: string;
  enabled: boolean;
}

export interface SelectedQuery {
  componentId: string;
  componentName: string;
  objectType: string;
  hookType: string;
  hookIndex: number;
  originalParams: PrototypeOverrideParams;
  querySignature: string;
  isAggregation?: boolean;
}

export type MockWithConfig = MockResponse & { config: MockConfiguration };

export interface HydrateOverrideFormParams {
  isAggregation: boolean;
  where?: unknown;
  orderBy?: unknown;
  pageSize?: number;
  groupBy?: unknown;
  select?: unknown;
}

export type InterceptAction =
  | { type: "SET_SELECTED_PRIMITIVE"; primitive: SelectedPrimitive | null }
  | { type: "SET_MOCKS"; mocks: Array<MockWithConfig> }
  | {
      type: "UPDATE_MOCKS";
      updater: (prev: Array<MockWithConfig>) => Array<MockWithConfig>;
    }
  | { type: "SET_EDITING_MOCK"; mock: MockWithConfig | null }
  | { type: "SET_MOCK_TYPE"; mockType: MockConfiguration["mockType"] }
  | {
      type: "SET_RESPONSE_TYPE";
      responseType: MockConfiguration["responseType"];
    }
  | { type: "SET_USE_PAYLOAD"; usePayload: boolean }
  | { type: "SET_MOCK_PAYLOAD"; mockPayload: string }
  | { type: "SET_USE_RESPONSE"; useResponse: boolean }
  | { type: "SET_STATIC_DATA"; staticData: string }
  | { type: "SET_FUNCTION_CODE"; functionCode: string }
  | { type: "SET_ERROR_MESSAGE"; errorMessage: string }
  | { type: "SET_SELECTED_QUERY"; query: SelectedQuery | null }
  | { type: "SET_ACTIVE_OVERRIDES"; overrides: PrototypeOverride[] }
  | { type: "SET_WHERE_CLAUSE_TEXT"; text: string }
  | { type: "SET_ORDER_BY_TEXT"; text: string }
  | { type: "SET_PAGE_SIZE"; pageSize: number | undefined }
  | { type: "SET_GROUP_BY_TEXT"; text: string }
  | { type: "SET_SELECT_TEXT"; text: string }
  | { type: "SET_CHOOSING_PRIMITIVE"; primitive: SelectedPrimitive | null }
  | { type: "SET_ERROR"; error: string | null }
  | { type: "HYDRATE_OVERRIDE_FORM"; params: HydrateOverrideFormParams }
  | { type: "INIT_MOCK_FORM_FROM_CONFIG"; config: MockConfiguration }
  | { type: "INIT_MOCK_FORM_FROM_PRIMITIVE"; primitive: SelectedPrimitive }
  | { type: "SELECT_PRIMITIVE_FOR_MOCK"; primitive: SelectedPrimitive }
  | { type: "CANCEL_MOCK_EDITOR" }
  | { type: "CLEAR_SELECTION" }
  | { type: "SAVE_MOCK_DONE" };
