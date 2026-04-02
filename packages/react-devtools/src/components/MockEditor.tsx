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

import {
  Button,
  Callout,
  Checkbox,
  FormGroup,
  HTMLSelect,
  Icon,
  Radio,
  RadioGroup,
  TextArea,
} from "@blueprintjs/core";
import React from "react";
import type { MockResponse } from "../mocking/MockManager.js";
import type { InterceptAction, MockConfiguration } from "./InterceptTab.js";
import styles from "./InterceptTab.module.scss";
import type { SelectedPrimitive } from "./PrimitiveSelectionPanel.js";

type MockWithConfig = MockResponse & { config: MockConfiguration };

interface MockEditorProps {
  selectedPrimitive: SelectedPrimitive;
  editingMock: MockWithConfig | null;
  mockType: MockConfiguration["mockType"];
  responseType: MockConfiguration["responseType"];
  usePayload: boolean;
  mockPayload: string;
  useResponse: boolean;
  staticData: string;
  functionCode: string;
  errorMessage: string;
  dispatch: React.Dispatch<InterceptAction>;
  mockPrimitiveInfo: ReturnType<typeof getMockPrimitiveInfo> | null;
  onSaveMock: () => void;
  onCancel: () => void;
}

export const MockEditor: React.FC<MockEditorProps> = ({
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
  dispatch,
  mockPrimitiveInfo,
  onSaveMock,
  onCancel,
}) => {
  return (
    <div className={styles.editorPanel}>
      <div className={styles.panelHeader}>
        <Icon icon={mockPrimitiveInfo?.icon ?? "cube"} />
        <div>
          <div className={styles.panelTitle}>
            {editingMock ? "Edit Mock" : "Create Mock"}
          </div>
          <div className={styles.panelSubtitle}>
            {mockPrimitiveInfo?.title} · {mockPrimitiveInfo?.subtitle}
          </div>
        </div>
        <Button
          variant="minimal"
          size="small"
          icon="cross"
          aria-label="Close editor"
          onClick={onCancel}
        />
      </div>

      <div className={styles.editorContent}>
        {mockPrimitiveInfo?.signature && (
          <div className={styles.primitiveSignature}>
            <code>{mockPrimitiveInfo.signature}</code>
          </div>
        )}

        <FormGroup label="Response Type" labelInfo="(required)">
          <RadioGroup
            inline={true}
            onChange={(e) =>
              dispatch({
                type: "SET_RESPONSE_TYPE",
                responseType: e.currentTarget
                  .value as MockConfiguration["responseType"],
              })}
            selectedValue={responseType}
          >
            <Radio label="Success" value="success" />
            <Radio label="Error/Failure" value="error" />
          </RadioGroup>
        </FormGroup>

        <FormGroup label="Mock Type" labelInfo="(required)">
          <HTMLSelect
            value={mockType}
            onChange={(e) =>
              dispatch({
                type: "SET_MOCK_TYPE",
                mockType: e.target.value as MockConfiguration["mockType"],
              })}
            fill={true}
            options={[
              { label: "Static Data", value: "static" },
              { label: "Function (Dynamic)", value: "function" },
              {
                label: "Pass-through (Original + Log)",
                value: "passthrough",
              },
            ]}
          />
        </FormGroup>

        {selectedPrimitive.type === "action" && (
          <>
            <Checkbox
              checked={usePayload}
              onChange={(e) =>
                dispatch({
                  type: "SET_USE_PAYLOAD",
                  usePayload: e.currentTarget.checked,
                })}
              label="Use Payload"
            />
            {usePayload && (
              <FormGroup
                label="Action Payload (JSON)"
                helperText="The parameters to pass to the action"
              >
                <TextArea
                  value={mockPayload}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_MOCK_PAYLOAD",
                      mockPayload: e.target.value,
                    })}
                  fill={true}
                  rows={4}
                  className={styles.codeEditor}
                />
              </FormGroup>
            )}
          </>
        )}

        <Checkbox
          checked={useResponse}
          onChange={(e) =>
            dispatch({
              type: "SET_USE_RESPONSE",
              useResponse: e.currentTarget.checked,
            })}
          label="Use Response"
        />

        {useResponse && (
          <>
            {responseType === "error" && (
              <FormGroup
                label="Error Message"
                helperText="The error message to return"
              >
                <TextArea
                  value={errorMessage}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_ERROR_MESSAGE",
                      errorMessage: e.target.value,
                    })}
                  fill={true}
                  rows={2}
                />
              </FormGroup>
            )}

            {mockType === "static" && responseType === "success" && (
              <FormGroup
                label="Mock Data (JSON)"
                helperText="Enter the JSON response that this mock should return"
              >
                <TextArea
                  value={staticData}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_STATIC_DATA",
                      staticData: e.target.value,
                    })}
                  fill={true}
                  rows={8}
                  className={styles.codeEditor}
                />
              </FormGroup>
            )}

            {mockType === "function" && (
              <FormGroup
                label="Mock Function"
                helperText="Write a function that generates mock data dynamically"
              >
                <TextArea
                  value={functionCode}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_FUNCTION_CODE",
                      functionCode: e.target.value,
                    })}
                  fill={true}
                  rows={10}
                  className={styles.codeEditor}
                />
              </FormGroup>
            )}
          </>
        )}

        {mockType === "passthrough" && (
          <Callout intent="primary" icon="info-sign">
            Pass-through mode will execute the real query but log all parameters
            and responses for debugging.
          </Callout>
        )}

        <div className={styles.editorActions}>
          <Button
            intent="primary"
            icon="floppy-disk"
            onClick={onSaveMock}
          >
            {editingMock ? "Update Mock" : "Create Mock"}
          </Button>
          <Button variant="minimal" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export function getMockPrimitiveInfo(primitive: SelectedPrimitive) {
  switch (primitive.type) {
    case "action":
      return {
        title: primitive.data.name,
        subtitle: "Action",
        icon: "flash" as const,
        signature: primitive.data.signature,
      };
    case "objectSet":
      return {
        title: primitive.data.type,
        subtitle: "Object Set Query",
        icon: "th-list" as const,
        signature: `useOsdkObjects(${primitive.data.type})`,
      };
    case "object":
      return {
        title: primitive.data.type,
        subtitle: "Object Query",
        icon: "cube" as const,
        signature: `useOsdkObject(${primitive.data.type}, ${
          primitive.data.primaryKey || "'...'"
        })`,
      };
    case "link":
      return {
        title: primitive.data.linkName,
        subtitle: "Link Traversal",
        icon: "link" as const,
        signature: `useLinks(..., "${primitive.data.linkName}")`,
      };
    case "query":
      return {
        title: primitive.data.hookType,
        subtitle: "Advanced Query",
        icon: "database" as const,
        signature: primitive.data.signature,
      };
    case "aggregation":
      return {
        title: primitive.data.type,
        subtitle: "Aggregation",
        icon: "grouped-bar-chart" as const,
        signature: `useOsdkAggregation(${primitive.data.type})`,
      };
  }
}

export function createMatcherFromPrimitive(primitive: SelectedPrimitive) {
  switch (primitive.type) {
    case "action":
      return { actionName: primitive.data.name };
    case "objectSet":
      return {
        objectType: primitive.data.type,
        whereClause: primitive.data.whereClause,
      };
    case "aggregation":
      return {
        objectType: primitive.data.type,
        whereClause: primitive.data.whereClause,
      };
    case "object":
      return {
        objectType: primitive.data.type,
        primaryKey: primitive.data.primaryKey,
      };
    case "link":
      return {
        objectType: primitive.data.sourceType,
        linkName: primitive.data.linkName,
      };
    case "query":
      return {};
  }
}

export function createResponseFromConfig(
  primitive: SelectedPrimitive,
  mockData: unknown,
) {
  if (primitive.type === "action") {
    return { type: "action" as const, result: mockData };
  } else if (
    primitive.type === "objectSet" || primitive.type === "link"
    || primitive.type === "aggregation"
  ) {
    return {
      type: "list" as const,
      list: Array.isArray(mockData) ? mockData : [mockData],
      hasMore: false,
    };
  } else {
    return { type: "object" as const, object: mockData };
  }
}

export interface MockItemProps {
  mock: MockResponse & { config: MockConfiguration };
  onToggle: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

export const MockItem: React.FC<MockItemProps> = React.memo(
  ({ mock, onToggle, onDelete, onEdit }) => {
    const info = mock.config
      ? getMockPrimitiveInfo(mock.config.primitive)
      : null;
    const label = {
      icon: info?.icon ?? ("help" as const),
      text: info?.title ?? "Unknown",
    };

    return (
      <div className={styles.interceptItem}>
        <div
          className={styles.interceptItemContent}
          onClick={onEdit}
          title="Click to view/edit configuration"
        >
          <div className={styles.interceptItemHeader}>
            <Icon icon={label.icon} />
            <span className={styles.interceptItemTitle}>{label.text}</span>
            <span
              className={`${styles.interceptBadge} ${styles.interceptBadgeMock}`}
            >
              mock
            </span>
            <span className={styles.interceptItemMeta}>
              {mock.config?.mockType || "static"}
            </span>
            <span className={styles.interceptItemMeta}>
              Used: {mock.usedCount}x
            </span>
          </div>
          <div className={styles.interceptItemDetails}>
            {mock.config?.responseType === "error" && (
              <span className={styles.detail}>Error Response</span>
            )}
          </div>
        </div>

        <div className={styles.interceptItemActions}>
          <Button
            variant="minimal"
            size="small"
            intent={mock.enabled ? "success" : "warning"}
            icon={mock.enabled ? "pause" : "play"}
            onClick={onToggle}
            title={mock.enabled ? "Pause mock" : "Resume mock"}
            aria-label={mock.enabled ? "Pause mock" : "Resume mock"}
          />
          <Button
            variant="minimal"
            size="small"
            intent="danger"
            icon="trash"
            onClick={onDelete}
            title="Delete mock"
            aria-label="Delete mock"
          />
        </div>
      </div>
    );
  },
);

MockItem.displayName = "MockItem";
