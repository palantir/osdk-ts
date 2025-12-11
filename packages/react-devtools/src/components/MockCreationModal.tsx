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
  Card,
  Checkbox,
  Classes,
  Dialog,
  FormGroup,
  HTMLSelect,
  Icon,
  Radio,
  RadioGroup,
  TextArea,
} from "@blueprintjs/core";
import React, { useEffect, useState } from "react";
import { MockDataGenerator } from "../utils/MockDataGenerator.js";
import styles from "./MockCreationModal.module.scss";
import type { SelectedPrimitive } from "./PrimitiveSelectionPanel.js";

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

export interface MockCreationModalProps {
  isOpen: boolean;
  primitive: SelectedPrimitive | null;
  existingConfig?: MockConfiguration;
  onSave: (config: MockConfiguration) => void;
  onCancel: () => void;
}

/**
 * Modal for creating and configuring mocks for OSDK primitives.
 * Allows specifying mock data, behavior, and network simulation.
 */
export const MockCreationModal: React.FC<MockCreationModalProps> = ({
  isOpen,
  primitive,
  existingConfig,
  onSave,
  onCancel,
}) => {
  const [mockType, setMockType] = useState<MockConfiguration["mockType"]>(
    "static",
  );
  const [responseType, setResponseType] = useState<
    MockConfiguration["responseType"]
  >("success");
  const [usePayload, setUsePayload] = useState<boolean>(true);
  const [payload, setPayload] = useState<string>("{}");
  const [useResponse, setUseResponse] = useState<boolean>(true);
  const [staticData, setStaticData] = useState<string>(
    "{\n  \"status\": \"SUCCESS\",\n  \"data\": {}\n}",
  );
  const [functionCode, setFunctionCode] = useState<string>(
    "function generateMock(params) {\n  return {\n    status: \"SUCCESS\",\n    data: {}\n  };\n}",
  );
  const [errorMessage, setErrorMessage] = useState<string>(
    "Mock request failed",
  );

  // Load existing config when editing
  useEffect(() => {
    if (existingConfig) {
      setMockType(existingConfig.mockType);
      setResponseType(existingConfig.responseType);
      setUsePayload(existingConfig.usePayload ?? false);
      setPayload(existingConfig.payload || "{}");
      setUseResponse(existingConfig.useResponse ?? false);
      setStaticData(
        existingConfig.staticData
          || "{\n  \"status\": \"SUCCESS\",\n  \"data\": {}\n}",
      );
      setFunctionCode(
        existingConfig.functionCode
          || "function generateMock(params) {\n  return {\n    status: \"SUCCESS\",\n    data: {}\n  };\n}",
      );
      setErrorMessage(existingConfig.errorMessage || "Mock request failed");
    } else if (primitive) {
      // Generate static data based on primitive type
      const generatedStaticData = MockDataGenerator.generateStaticData(
        primitive,
      );
      setStaticData(generatedStaticData);

      // Generate function code based on primitive type
      const generatedFunctionCode = MockDataGenerator.generateFunctionCode(
        primitive,
      );
      setFunctionCode(generatedFunctionCode);

      // Generate payload for actions
      const generatedPayload = MockDataGenerator.generatePayload(primitive);
      setPayload(generatedPayload);

      // Reset to defaults for new mocks
      setMockType("static");
      setResponseType("success");
      setUsePayload(true);
      setUseResponse(true);
      setErrorMessage("Mock request failed");
    }
  }, [primitive, existingConfig]);

  const handleSave = () => {
    if (!primitive) return;

    const config: MockConfiguration = {
      primitive,
      mockType,
      responseType,
      usePayload: primitive.type === "action" ? usePayload : undefined,
      payload: primitive.type === "action" && usePayload ? payload : undefined,
      useResponse,
      staticData: mockType === "static" && useResponse ? staticData : undefined,
      functionCode: mockType === "function" && useResponse
        ? functionCode
        : undefined,
      errorMessage: responseType === "error" && useResponse
        ? errorMessage
        : undefined,
      enabled: true,
    };

    onSave(config);
  };

  const getPrimitiveInfo = () => {
    if (!primitive) return null;

    const { type, data } = primitive;

    switch (type) {
      case "action":
        return {
          title: (data as any).name,
          subtitle: "Action",
          icon: "flash" as const,
          signature: (data as any).signature,
        };
      case "objectSet":
        return {
          title: (data as any).type,
          subtitle: "Object Set Query",
          icon: "th-list" as const,
          signature: `useOsdkObjects(${(data as any).type})`,
        };
      case "object":
        return {
          title: (data as any).type,
          subtitle: "Object Query",
          icon: "cube" as const,
          signature: `useOsdkObject(${(data as any).type}, ${
            (data as any).primaryKey || "'...'"
          }})`,
        };
      case "link":
        return {
          title: (data as any).linkName,
          subtitle: "Link Traversal",
          icon: "link" as const,
          signature: `useLinks(..., "${(data as any).linkName}")`,
        };
      case "query":
        return {
          title: (data as any).hookType,
          subtitle: "Advanced Query",
          icon: "database" as const,
          signature: (data as any).signature,
        };
      default:
        return null;
    }
  };

  const info = getPrimitiveInfo();

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onCancel}
      title={existingConfig ? "Edit Mock" : "Create Mock"}
      icon={existingConfig ? "edit" : "cube-add"}
      className={Classes.DARK}
      style={{ width: 700 }}
      portalClassName="mock-creation-modal-portal"
      enforceFocus={true}
      usePortal={true}
    >
      <div className={Classes.DIALOG_BODY}>
        {info && (
          <Card className={styles.primitiveInfo}>
            <div className={styles.primitiveHeader}>
              <Icon icon={info.icon} size={20} />
              <div>
                <div className={styles.primitiveTitle}>{info.title}</div>
                <div className={styles.primitiveSubtitle}>{info.subtitle}</div>
              </div>
            </div>
            <div className={styles.primitiveSignature}>
              <code>{info.signature}</code>
            </div>
          </Card>
        )}

        <FormGroup label="Response Type" labelInfo="(required)">
          <RadioGroup
            inline
            onChange={(e) =>
              setResponseType(
                (e.target as HTMLInputElement)
                  .value as MockConfiguration["responseType"],
              )}
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
              setMockType(e.target.value as MockConfiguration["mockType"])}
            fill
            options={[
              { label: "Static Data", value: "static" },
              { label: "Function (Dynamic)", value: "function" },
              { label: "Pass-through (Original + Log)", value: "passthrough" },
            ]}
          />
        </FormGroup>

        {primitive?.type === "action" && (
          <>
            <Checkbox
              checked={usePayload}
              onChange={(e) =>
                setUsePayload((e.target as HTMLInputElement).checked)}
              label="Use Payload"
            />
            {usePayload && (
              <FormGroup
                label="Action Payload (JSON)"
                labelInfo="(action parameters)"
                helperText="The parameters to pass to the action"
              >
                <TextArea
                  value={payload}
                  onChange={(e) => setPayload(e.target.value)}
                  fill
                  rows={4}
                  className={styles.codeEditor}
                  style={{ fontFamily: "monospace", fontSize: 12 }}
                />
              </FormGroup>
            )}
          </>
        )}

        <Checkbox
          checked={useResponse}
          onChange={(e) =>
            setUseResponse((e.target as HTMLInputElement).checked)}
          label="Use Response"
        />

        {useResponse && (
          <>
            {responseType === "error" && (
              <FormGroup
                label="Error Message"
                labelInfo="(required for errors)"
                helperText="The error message to return"
              >
                <TextArea
                  value={errorMessage}
                  onChange={(e) => setErrorMessage(e.target.value)}
                  fill
                  rows={2}
                />
              </FormGroup>
            )}

            {mockType === "static" && responseType === "success" && (
              <FormGroup
                label="Mock Data (JSON)"
                labelInfo="(required)"
                helperText="Enter the JSON response that this mock should return"
              >
                <TextArea
                  value={staticData}
                  onChange={(e) => setStaticData(e.target.value)}
                  fill
                  rows={8}
                  className={styles.codeEditor}
                  style={{ fontFamily: "monospace", fontSize: 12 }}
                />
              </FormGroup>
            )}

            {mockType === "function" && (
              <FormGroup
                label="Mock Function"
                labelInfo="(required)"
                helperText="Write a function that generates mock data dynamically"
              >
                <TextArea
                  value={functionCode}
                  onChange={(e) => setFunctionCode(e.target.value)}
                  fill
                  rows={10}
                  className={styles.codeEditor}
                  style={{ fontFamily: "monospace", fontSize: 12 }}
                />
              </FormGroup>
            )}
          </>
        )}

        {mockType === "passthrough" && (
          <Callout intent="primary" icon="info-sign">
            Pass-through mode will execute the real query but log all parameters
            and responses for debugging. Useful for understanding actual data
            structures before creating mocks.
          </Callout>
        )}
      </div>

      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button onClick={onCancel}>Cancel</Button>
          <Button
            intent="primary"
            onClick={handleSave}
            icon="floppy-disk"
          >
            {existingConfig ? "Update Mock" : "Create Mock"}
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
