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

import { Button, Icon } from "@blueprintjs/core";
import React, { useCallback, useMemo, useReducer } from "react";
import { createPollingStore } from "../hooks/createPollingStore.js";
import { useInspectorSelection } from "../hooks/useInspectorSelection.js";
import type { MockResponse } from "../mocking/MockManager.js";
import type {
  PrototypeOverride,
  PrototypeOverrideParams,
} from "../prototyping/PrototypeOverrideStore.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import { MockDataGenerator } from "../utils/MockDataGenerator.js";
import { InspectorSelectionHeader } from "./InspectorSelectionHeader.js";
import styles from "./InterceptTab.module.scss";
import {
  createMatcherFromPrimitive,
  createResponseFromConfig,
  getMockPrimitiveInfo,
  MockEditor,
  MockItem,
} from "./MockEditor.js";
import { OverrideEditor, OverrideItem } from "./OverrideEditor.js";
import type { SelectedPrimitive } from "./PrimitiveSelectionPanel.js";
import { PrimitiveSelectionPanel } from "./PrimitiveSelectionPanel.js";

const lazyJson = () => import("@codemirror/lang-json").then(m => m.json);

type JsonExtension = ReturnType<Awaited<ReturnType<typeof lazyJson>>>;
let jsonExtensionValue: JsonExtension | null = null;
const jsonExtensionListeners = new Set<() => void>();
const jsonExtensionPromise = lazyJson().then(jsonFn => {
  jsonExtensionValue = jsonFn();
  for (const listener of jsonExtensionListeners) {
    listener();
  }
});
void jsonExtensionPromise;

function subscribeJsonExtension(callback: () => void): () => void {
  jsonExtensionListeners.add(callback);
  return () => {
    jsonExtensionListeners.delete(callback);
  };
}

function getJsonExtensionSnapshot(): JsonExtension | null {
  return jsonExtensionValue;
}

function parseJsonField<T>(
  text: string,
  fieldName: string,
): { value: T | undefined; error: string | null } {
  try {
    const trimmed = text.trim();
    if (trimmed && trimmed !== "{}") {
      return { value: JSON.parse(trimmed) as T, error: null };
    }
    return { value: undefined, error: null };
  } catch {
    return { value: undefined, error: `Invalid JSON in ${fieldName} field` };
  }
}

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

type MockWithConfig = MockResponse & { config: MockConfiguration };

interface InterceptState {
  selectedPrimitive: SelectedPrimitive | null;
  mocks: Array<MockWithConfig>;
  editingMock: MockWithConfig | null;

  mockType: MockConfiguration["mockType"];
  responseType: MockConfiguration["responseType"];
  usePayload: boolean;
  mockPayload: string;
  useResponse: boolean;
  staticData: string;
  functionCode: string;
  errorMessage: string;

  selectedQuery: SelectedQuery | null;
  activeOverrides: PrototypeOverride[];
  whereClauseText: string;
  orderByText: string;
  pageSize: number | undefined;
  groupByText: string;
  selectText: string;

  choosingPrimitive: SelectedPrimitive | null;
  error: string | null;
}

const DEFAULT_STATIC_DATA = "{\n  \"status\": \"SUCCESS\",\n  \"data\": {}\n}";
const DEFAULT_FUNCTION_CODE =
  "function generateMock(params) {\n  return {\n    status: \"SUCCESS\",\n    data: {}\n  };\n}";
const DEFAULT_ERROR_MESSAGE = "Mock request failed";

const initialState: InterceptState = {
  selectedPrimitive: null,
  mocks: [],
  editingMock: null,

  mockType: "static",
  responseType: "success",
  usePayload: true,
  mockPayload: "{}",
  useResponse: true,
  staticData: DEFAULT_STATIC_DATA,
  functionCode: DEFAULT_FUNCTION_CODE,
  errorMessage: DEFAULT_ERROR_MESSAGE,

  selectedQuery: null,
  activeOverrides: [],
  whereClauseText: "",
  orderByText: "",
  pageSize: undefined,
  groupByText: "",
  selectText: "",

  choosingPrimitive: null,
  error: null,
};

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

interface HydrateOverrideFormParams {
  isAggregation: boolean;
  where?: unknown;
  orderBy?: unknown;
  pageSize?: number;
  groupBy?: unknown;
  select?: unknown;
}

function hydrateOverrideFields(
  params: HydrateOverrideFormParams,
): Pick<
  InterceptState,
  "whereClauseText" | "orderByText" | "pageSize" | "groupByText" | "selectText"
> {
  const jsonOrEmpty = (val: unknown, fallback: string) =>
    val ? JSON.stringify(val, null, 2) : fallback;

  if (params.isAggregation) {
    return {
      whereClauseText: jsonOrEmpty(params.where, "{}"),
      groupByText: jsonOrEmpty(params.groupBy, "{}"),
      selectText: jsonOrEmpty(params.select, "{}"),
      orderByText: "{}",
      pageSize: undefined,
    };
  }

  return {
    whereClauseText: jsonOrEmpty(params.where, "{}"),
    orderByText: jsonOrEmpty(params.orderBy, "{}"),
    pageSize: params.pageSize,
    groupByText: "",
    selectText: "",
  };
}

function interceptReducer(
  state: InterceptState,
  action: InterceptAction,
): InterceptState {
  switch (action.type) {
    case "SET_SELECTED_PRIMITIVE":
      return { ...state, selectedPrimitive: action.primitive };
    case "SET_MOCKS":
      return { ...state, mocks: action.mocks };
    case "UPDATE_MOCKS":
      return { ...state, mocks: action.updater(state.mocks) };
    case "SET_EDITING_MOCK":
      return { ...state, editingMock: action.mock };
    case "SET_MOCK_TYPE":
      return { ...state, mockType: action.mockType };
    case "SET_RESPONSE_TYPE":
      return { ...state, responseType: action.responseType };
    case "SET_USE_PAYLOAD":
      return { ...state, usePayload: action.usePayload };
    case "SET_MOCK_PAYLOAD":
      return { ...state, mockPayload: action.mockPayload };
    case "SET_USE_RESPONSE":
      return { ...state, useResponse: action.useResponse };
    case "SET_STATIC_DATA":
      return { ...state, staticData: action.staticData };
    case "SET_FUNCTION_CODE":
      return { ...state, functionCode: action.functionCode };
    case "SET_ERROR_MESSAGE":
      return { ...state, errorMessage: action.errorMessage };
    case "SET_SELECTED_QUERY":
      return { ...state, selectedQuery: action.query };
    case "SET_ACTIVE_OVERRIDES":
      return { ...state, activeOverrides: action.overrides };
    case "SET_WHERE_CLAUSE_TEXT":
      return { ...state, whereClauseText: action.text };
    case "SET_ORDER_BY_TEXT":
      return { ...state, orderByText: action.text };
    case "SET_PAGE_SIZE":
      return { ...state, pageSize: action.pageSize };
    case "SET_GROUP_BY_TEXT":
      return { ...state, groupByText: action.text };
    case "SET_SELECT_TEXT":
      return { ...state, selectText: action.text };
    case "SET_CHOOSING_PRIMITIVE":
      return { ...state, choosingPrimitive: action.primitive };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "HYDRATE_OVERRIDE_FORM":
      return { ...state, ...hydrateOverrideFields(action.params) };
    case "INIT_MOCK_FORM_FROM_CONFIG": {
      const cfg = action.config;
      return {
        ...state,
        mockType: cfg.mockType,
        responseType: cfg.responseType,
        usePayload: cfg.usePayload ?? false,
        mockPayload: cfg.payload || "{}",
        useResponse: cfg.useResponse ?? false,
        staticData: cfg.staticData || DEFAULT_STATIC_DATA,
        functionCode: cfg.functionCode || DEFAULT_FUNCTION_CODE,
        errorMessage: cfg.errorMessage || DEFAULT_ERROR_MESSAGE,
      };
    }
    case "INIT_MOCK_FORM_FROM_PRIMITIVE":
      return {
        ...state,
        staticData: MockDataGenerator.generateStaticData(action.primitive),
        functionCode: MockDataGenerator.generateFunctionCode(action.primitive),
        mockPayload: MockDataGenerator.generatePayload(action.primitive),
        mockType: "static",
        responseType: "success",
        usePayload: true,
        useResponse: true,
        errorMessage: DEFAULT_ERROR_MESSAGE,
      };
    case "SELECT_PRIMITIVE_FOR_MOCK":
      return {
        ...state,
        selectedPrimitive: action.primitive,
        editingMock: null,
      };
    case "CANCEL_MOCK_EDITOR":
      return {
        ...state,
        selectedPrimitive: null,
        editingMock: null,
      };
    case "CLEAR_SELECTION":
      return {
        ...state,
        selectedQuery: null,
        choosingPrimitive: null,
        error: null,
      };
    case "SAVE_MOCK_DONE":
      return {
        ...state,
        selectedPrimitive: null,
        editingMock: null,
      };
  }
}

export interface InterceptTabProps {
  monitorStore: MonitorStore;
  theme?: "light" | "dark";
}

export const InterceptTab: React.FC<InterceptTabProps> = ({
  monitorStore,
  theme,
}) => {
  const {
    isSelectionActive,
    discoveredPrimitives,
    activateSelection,
    clearDiscoveredPrimitives,
  } = useInspectorSelection(monitorStore);

  const [state, dispatch] = useReducer(interceptReducer, initialState);

  const {
    selectedPrimitive,
    mocks,
    editingMock,
    mockType,
    responseType,
    usePayload,
    mockPayload,
    useResponse,
    staticData,
    functionCode,
    errorMessage,
    selectedQuery,
    activeOverrides,
    whereClauseText,
    orderByText,
    pageSize,
    groupByText,
    selectText,
    choosingPrimitive,
    error,
  } = state;

  const jsonExtension = React.useSyncExternalStore(
    subscribeJsonExtension,
    getJsonExtensionSnapshot,
  );
  const jsonExtensions = useMemo(
    () => (jsonExtension ? [jsonExtension] : []),
    [jsonExtension],
  );

  const overrideStore = monitorStore.getPrototypeOverrideStore();

  const overrideSnapshotRef = React.useRef<PrototypeOverride[]>([]);
  const overrideSubscribe = useCallback(
    (callback: () => void) => overrideStore.subscribe(callback),
    [overrideStore],
  );
  const overrideGetSnapshot = useCallback(
    (): PrototypeOverride[] => {
      const current = overrideStore.getAll();
      const prev = overrideSnapshotRef.current;
      if (
        prev.length === current.length
        && prev.every((o, i) => o === current[i])
      ) {
        return prev;
      }
      overrideSnapshotRef.current = current;
      return current;
    },
    [overrideStore],
  );
  const overrideStoreOverrides = React.useSyncExternalStore(
    overrideSubscribe,
    overrideGetSnapshot,
  );

  const mockPollingStore = React.useMemo(
    () => {
      const mockManager = monitorStore.getMockManager();
      return createPollingStore(() => mockManager.getMocks(), 1000);
    },
    [monitorStore],
  );
  const polledMocks = React.useSyncExternalStore(
    mockPollingStore.subscribe,
    mockPollingStore.getSnapshot,
  );

  const effectiveMocks: Array<MockWithConfig> = useMemo(() => {
    if (!polledMocks || polledMocks.length === 0) {
      return mocks;
    }
    return polledMocks.map(m => {
      const existingMock = mocks.find(item => item.id === m.id);
      if (existingMock?.config) {
        return { ...m, config: existingMock.config };
      }
      return {
        ...m,
        config: {
          primitive: {
            type: "action" as const,
            data: {
              name: "unknown",
              signature: "",
              location: "",
              hookIndex: 0,
            },
          },
          mockType: "static" as const,
          responseType: "success" as const,
          enabled: m.enabled,
        },
      };
    });
  }, [polledMocks, mocks]);

  const handleSelectPrimitive = useCallback((primitive: SelectedPrimitive) => {
    if (primitive.type === "objectSet" || primitive.type === "aggregation") {
      dispatch({ type: "SET_CHOOSING_PRIMITIVE", primitive });
    } else {
      dispatch({ type: "SELECT_PRIMITIVE_FOR_MOCK", primitive });
      dispatch({ type: "INIT_MOCK_FORM_FROM_PRIMITIVE", primitive });
    }
  }, []);

  const handleChooseMock = useCallback(() => {
    if (!choosingPrimitive) {
      return;
    }
    dispatch({
      type: "SELECT_PRIMITIVE_FOR_MOCK",
      primitive: choosingPrimitive,
    });
    dispatch({
      type: "INIT_MOCK_FORM_FROM_PRIMITIVE",
      primitive: choosingPrimitive,
    });
    dispatch({ type: "SET_CHOOSING_PRIMITIVE", primitive: null });
  }, [choosingPrimitive]);

  const handleChooseOverride = useCallback(() => {
    if (!choosingPrimitive || !discoveredPrimitives) {
      return;
    }

    if (choosingPrimitive.type === "aggregation") {
      const data = choosingPrimitive.data;
      dispatch({
        type: "SET_SELECTED_QUERY",
        query: {
          componentId: discoveredPrimitives.componentId,
          componentName: discoveredPrimitives.componentName,
          objectType: data.type,
          hookType: "useOsdkAggregation",
          hookIndex: data.hookIndex,
          originalParams: {
            where: data.whereClause,
            groupBy: data.aggregate?.groupBy as
              | Record<string, unknown>
              | undefined,
            select: data.aggregate?.select as
              | Record<string, unknown>
              | undefined,
          },
          querySignature: data.querySignature,
          isAggregation: true,
        },
      });

      dispatch({
        type: "HYDRATE_OVERRIDE_FORM",
        params: {
          isAggregation: true,
          where: data.whereClause,
          groupBy: data.aggregate?.groupBy,
          select: data.aggregate?.select,
        },
      });
    } else if (choosingPrimitive.type === "objectSet") {
      const data = choosingPrimitive.data;
      dispatch({
        type: "SET_SELECTED_QUERY",
        query: {
          componentId: discoveredPrimitives.componentId,
          componentName: discoveredPrimitives.componentName,
          objectType: data.type,
          hookType: "useOsdkObjects",
          hookIndex: data.hookIndex,
          originalParams: {
            where: data.whereClause,
            orderBy: data.orderBy,
            pageSize: data.pageSize,
          },
          querySignature: data.querySignature,
          isAggregation: false,
        },
      });

      dispatch({
        type: "HYDRATE_OVERRIDE_FORM",
        params: {
          isAggregation: false,
          where: data.whereClause,
          orderBy: data.orderBy,
          pageSize: data.pageSize,
        },
      });
    }

    dispatch({ type: "SET_CHOOSING_PRIMITIVE", primitive: null });
    clearDiscoveredPrimitives();
    dispatch({ type: "SET_ERROR", error: null });
  }, [choosingPrimitive, discoveredPrimitives, clearDiscoveredPrimitives]);

  const handleSaveMock = useCallback(() => {
    if (!selectedPrimitive) {
      return;
    }

    const mockManager = monitorStore.getMockManager();

    dispatch({ type: "SET_ERROR", error: null });

    try {
      if (!selectedPrimitive.type || !selectedPrimitive.data) {
        dispatch({
          type: "SET_ERROR",
          error:
            "Invalid primitive structure. Please try selecting the component again.",
        });
        return;
      }

      const config: MockConfiguration = {
        primitive: selectedPrimitive,
        mockType,
        responseType,
        usePayload: selectedPrimitive.type === "action"
          ? usePayload
          : undefined,
        payload: selectedPrimitive.type === "action" && usePayload
          ? mockPayload
          : undefined,
        useResponse,
        staticData: mockType === "static" && useResponse
          ? staticData
          : undefined,
        functionCode: mockType === "function" && useResponse
          ? functionCode
          : undefined,
        errorMessage: responseType === "error" && useResponse
          ? errorMessage
          : undefined,
        enabled: true,
      };

      let mockData: unknown;
      if (!useResponse) {
        mockData = null;
      } else if (responseType === "error") {
        mockData = {
          error: true,
          message: errorMessage || DEFAULT_ERROR_MESSAGE,
        };
      } else if (mockType === "static" && staticData) {
        try {
          mockData = JSON.parse(staticData);
        } catch (_jsonError) {
          dispatch({
            type: "SET_ERROR",
            error: "Invalid JSON in mock data. Please check your JSON syntax.",
          });
          return;
        }
      }

      const response = !useResponse
        ? { type: "passthrough" as const }
        : responseType === "error"
        ? {
          type: "error" as const,
          error: errorMessage || DEFAULT_ERROR_MESSAGE,
        }
        : createResponseFromConfig(selectedPrimitive, mockData);

      const sharedFields = {
        matcher: createMatcherFromPrimitive(selectedPrimitive),
        response,
        enabled: config.enabled,
        usePayload: config.usePayload,
        payload: config.payload,
        usedCount: 0,
      };

      if (editingMock) {
        mockManager.removeMock(editingMock.id);
        const mockResponse: MockResponse = { ...editingMock, ...sharedFields };
        const id = mockManager.registerMock(mockResponse);
        dispatch({
          type: "UPDATE_MOCKS",
          updater: (prevMocks) =>
            prevMocks.map(m =>
              m.id === editingMock.id ? { ...mockResponse, config, id } : m
            ),
        });
      } else {
        const mockResponse: MockResponse = {
          id: crypto.randomUUID(),
          type: selectedPrimitive.type === "action"
            ? "action"
            : selectedPrimitive.type === "objectSet"
                || selectedPrimitive.type === "link"
                || selectedPrimitive.type === "aggregation"
            ? "list"
            : "object",
          delay: 0,
          ...sharedFields,
        };
        const id = mockManager.registerMock(mockResponse);
        dispatch({
          type: "UPDATE_MOCKS",
          updater: (
            prevMocks,
          ) => [...prevMocks, { ...mockResponse, config, id }],
        });
      }

      dispatch({ type: "SAVE_MOCK_DONE" });
      clearDiscoveredPrimitives();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      dispatch({ type: "SET_ERROR", error: `Failed to save mock: ${msg}` });
    }
  }, [
    selectedPrimitive,
    editingMock,
    mockType,
    responseType,
    usePayload,
    mockPayload,
    useResponse,
    staticData,
    functionCode,
    errorMessage,
    monitorStore,
    clearDiscoveredPrimitives,
  ]);

  const handleCancelMockEditor = useCallback(() => {
    dispatch({ type: "CANCEL_MOCK_EDITOR" });
  }, []);

  const handleToggleMock = useCallback((mockId: string) => {
    const mockManager = monitorStore.getMockManager();
    const mock = mockManager.getMock(mockId);
    if (mock) {
      const newEnabled = !mock.enabled;
      mockManager.updateMock(mockId, { enabled: newEnabled });
      dispatch({
        type: "UPDATE_MOCKS",
        updater: (prevMocks) =>
          prevMocks.map(m =>
            m.id === mockId ? { ...m, enabled: newEnabled } : m
          ),
      });
    }
  }, [monitorStore]);

  const handleDeleteMock = useCallback((mockId: string) => {
    const mockManager = monitorStore.getMockManager();
    mockManager.removeMock(mockId);
    dispatch({
      type: "UPDATE_MOCKS",
      updater: (prevMocks) => prevMocks.filter(m => m.id !== mockId),
    });
  }, [monitorStore]);

  const handleEditMock = useCallback((
    mock: MockWithConfig,
  ) => {
    dispatch({ type: "SET_EDITING_MOCK", mock });
    dispatch({
      type: "SET_SELECTED_PRIMITIVE",
      primitive: mock.config.primitive,
    });
    dispatch({
      type: "INIT_MOCK_FORM_FROM_CONFIG",
      config: mock.config,
    });
  }, []);

  const handleApplyOverride = useCallback(() => {
    if (!selectedQuery) {
      return;
    }

    dispatch({ type: "SET_ERROR", error: null });

    const whereResult = parseJsonField<Record<string, unknown>>(
      whereClauseText,
      "Where Clause",
    );
    if (whereResult.error) {
      dispatch({ type: "SET_ERROR", error: whereResult.error });
      return;
    }

    const bindingId = `${selectedQuery.componentId}:${selectedQuery.hookIndex}`;

    let overrideParams: PrototypeOverrideParams;

    if (selectedQuery.isAggregation) {
      const groupByResult = parseJsonField<Record<string, unknown>>(
        groupByText,
        "Group By",
      );
      if (groupByResult.error) {
        dispatch({ type: "SET_ERROR", error: groupByResult.error });
        return;
      }

      const selectResult = parseJsonField<Record<string, unknown>>(
        selectText,
        "Select",
      );
      if (selectResult.error) {
        dispatch({ type: "SET_ERROR", error: selectResult.error });
        return;
      }

      overrideParams = {
        where: whereResult.value,
        groupBy: groupByResult.value,
        select: selectResult.value,
      };
    } else {
      const orderByResult = parseJsonField<Record<string, "asc" | "desc">>(
        orderByText,
        "Order By",
      );
      if (orderByResult.error) {
        dispatch({ type: "SET_ERROR", error: orderByResult.error });
        return;
      }

      overrideParams = {
        where: whereResult.value,
        orderBy: orderByResult.value,
        pageSize,
      };
    }

    const override: PrototypeOverride = {
      bindingId,
      componentId: selectedQuery.componentId,
      componentName: selectedQuery.componentName,
      hookType: selectedQuery.hookType,
      hookIndex: selectedQuery.hookIndex,
      objectType: selectedQuery.objectType,
      querySignature: selectedQuery.querySignature,
      originalParams: selectedQuery.originalParams,
      overrideParams,
      enabled: true,
      createdAt: Date.now(),
    };

    overrideStore.setOverride(override);
    dispatch({ type: "SET_SELECTED_QUERY", query: null });
  }, [
    selectedQuery,
    whereClauseText,
    orderByText,
    pageSize,
    groupByText,
    selectText,
    overrideStore,
  ]);

  const handleToggleOverride = useCallback(
    (bindingId: string) => {
      const override = overrideStore.getOverride(bindingId);
      if (override) {
        overrideStore.updateOverride(bindingId, { enabled: !override.enabled });
      }
    },
    [overrideStore],
  );

  const handleRemoveOverride = useCallback(
    (bindingId: string) => {
      overrideStore.clearOverride(bindingId);
    },
    [overrideStore],
  );

  const handleEditOverride = useCallback(
    (override: PrototypeOverride) => {
      const isAggregation = override.hookType === "useOsdkAggregation";

      dispatch({
        type: "SET_SELECTED_QUERY",
        query: {
          componentId: override.componentId,
          componentName: override.componentName,
          objectType: override.objectType,
          hookType: override.hookType,
          hookIndex: override.hookIndex,
          originalParams: override.originalParams,
          querySignature: override.querySignature,
          isAggregation,
        },
      });

      dispatch({
        type: "HYDRATE_OVERRIDE_FORM",
        params: {
          isAggregation,
          where: override.overrideParams.where,
          orderBy: override.overrideParams.orderBy,
          pageSize: override.overrideParams.pageSize,
          groupBy: override.overrideParams.groupBy,
          select: override.overrideParams.select,
        },
      });
      dispatch({ type: "SET_ERROR", error: null });
    },
    [],
  );

  const handleClearSelection = useCallback(() => {
    dispatch({ type: "CLEAR_SELECTION" });
    clearDiscoveredPrimitives();
  }, [clearDiscoveredPrimitives]);

  const hasActiveIntercepts = effectiveMocks.length > 0
    || overrideStoreOverrides.length > 0;
  const isShowingList = !discoveredPrimitives && !choosingPrimitive
    && !selectedQuery && !selectedPrimitive;

  const mockPrimitiveInfo = useMemo(() => {
    if (!selectedPrimitive) {
      return null;
    }
    return getMockPrimitiveInfo(selectedPrimitive);
  }, [selectedPrimitive]);

  return (
    <div className={styles.interceptTab}>
      <InspectorSelectionHeader
        error={error}
        onDismissError={() => dispatch({ type: "SET_ERROR", error: null })}
        isSelectionActive={isSelectionActive}
        onActivateSelection={activateSelection}
        infoText={
          <>
            <strong>Intercept:</strong>{" "}
            Select a component to mock responses or override query parameters.
          </>
        }
        activeWarningText="Selection mode is active. Click on any component to discover its OSDK usage."
        buttonLabel="Select Component"
        showHelpTooltip={true}
      />

      <div className={styles.content}>
        {discoveredPrimitives && !choosingPrimitive && !selectedPrimitive && (
          <PrimitiveSelectionPanel
            primitives={discoveredPrimitives}
            onSelectPrimitive={handleSelectPrimitive}
            onClose={clearDiscoveredPrimitives}
          />
        )}

        {choosingPrimitive && (
          <div className={styles.interceptTypeChoice}>
            <div className={styles.panelHeader}>
              <Icon icon="fork" />
              <span>How do you want to intercept?</span>
              <Button
                variant="minimal"
                size="small"
                icon="cross"
                aria-label="Cancel"
                onClick={handleClearSelection}
              />
            </div>
            <div className={styles.choiceGrid}>
              <button
                type="button"
                className={styles.choiceCard}
                onClick={handleChooseMock}
              >
                <Icon icon="shield" size={24} />
                <div className={styles.choiceTitle}>Mock Response</div>
                <div className={styles.choiceDescription}>
                  Replace the response data with static or dynamic mock data
                </div>
              </button>
              <button
                type="button"
                className={styles.choiceCard}
                onClick={handleChooseOverride}
              >
                <Icon icon="edit" size={24} />
                <div className={styles.choiceTitle}>Override Query</div>
                <div className={styles.choiceDescription}>
                  Edit where, orderBy, pageSize, or aggregation params in
                  real-time
                </div>
              </button>
            </div>
          </div>
        )}

        {selectedPrimitive && (
          <MockEditor
            selectedPrimitive={selectedPrimitive}
            editingMock={editingMock}
            mockType={mockType}
            responseType={responseType}
            usePayload={usePayload}
            mockPayload={mockPayload}
            useResponse={useResponse}
            staticData={staticData}
            functionCode={functionCode}
            errorMessage={errorMessage}
            dispatch={dispatch}
            mockPrimitiveInfo={mockPrimitiveInfo}
            onSaveMock={handleSaveMock}
            onCancel={handleCancelMockEditor}
          />
        )}

        {selectedQuery && (
          <OverrideEditor
            selectedQuery={selectedQuery}
            whereClauseText={whereClauseText}
            orderByText={orderByText}
            pageSize={pageSize}
            groupByText={groupByText}
            selectText={selectText}
            jsonExtensions={jsonExtensions}
            theme={theme ?? "dark"}
            dispatch={dispatch}
            onApplyOverride={handleApplyOverride}
            onClearSelection={handleClearSelection}
          />
        )}

        {isShowingList && (
          <div className={styles.mainContent}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <Icon icon="shield" />
                Active Intercepts
              </h3>

              {!hasActiveIntercepts
                ? (
                  <div className={styles.emptyState}>
                    <Icon icon="search" size={40} />
                    <div>No active intercepts</div>
                    <div className={styles.emptySubtext}>
                      Select a component to mock responses or override query
                      parameters
                    </div>
                    <Button
                      intent="primary"
                      icon="style"
                      onClick={activateSelection}
                      disabled={isSelectionActive}
                    >
                      Select Component
                    </Button>
                  </div>
                )
                : (
                  <div className={styles.interceptList}>
                    {effectiveMocks.map((mock) => (
                      <MockItem
                        key={`mock-${mock.id}`}
                        mock={mock}
                        onToggle={() => handleToggleMock(mock.id)}
                        onDelete={() => handleDeleteMock(mock.id)}
                        onEdit={() => handleEditMock(mock)}
                      />
                    ))}
                    {overrideStoreOverrides.map((override) => (
                      <OverrideItem
                        key={`override-${override.bindingId}`}
                        override={override}
                        onToggle={() =>
                          handleToggleOverride(override.bindingId)}
                        onRemove={() =>
                          handleRemoveOverride(override.bindingId)}
                        onEdit={() => handleEditOverride(override)}
                      />
                    ))}
                  </div>
                )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
