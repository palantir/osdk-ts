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

import { Button, Callout, Icon, Tooltip } from "@blueprintjs/core";
import React, { useCallback, useEffect, useState } from "react";
import type { MockResponse } from "../mocking/MockManager.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { DiscoveredPrimitives } from "../utils/ComponentPrimitiveDiscovery.js";
import type { MockConfiguration } from "./MockCreationModal.js";
import { MockCreationModal } from "./MockCreationModal.js";
import styles from "./MockingTab.module.scss";
import type { SelectedPrimitive } from "./PrimitiveSelectionPanel.js";
import { PrimitiveSelectionPanel } from "./PrimitiveSelectionPanel.js";

export interface MockingTabProps {
  monitorStore: MonitorStore;
}

/**
 * Main tab for mocking features.
 * Shows selection mode activation, discovered primitives, and mock configuration.
 */
export const MockingTab: React.FC<MockingTabProps> = ({ monitorStore }) => {
  const [isSelectionActive, setIsSelectionActive] = useState(false);
  const [discoveredPrimitives, setDiscoveredPrimitives] = useState<
    DiscoveredPrimitives | null
  >(null);
  const [selectedPrimitive, setSelectedPrimitive] = useState<
    SelectedPrimitive | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mocks, setMocks] = useState<
    Array<MockResponse & { config: MockConfiguration }>
  >([]);
  const [error, setError] = useState<string | null>(null);
  const [editingMock, setEditingMock] = useState<
    (MockResponse & { config: MockConfiguration }) | null
  >(null);

  useEffect(() => {
    const handlePrimitivesDiscovered = (event: Event) => {
      const customEvent = event as CustomEvent<{
        componentId: string;
        primitives: DiscoveredPrimitives;
      }>;
      setDiscoveredPrimitives(customEvent.detail.primitives);
      setIsSelectionActive(false);
    };

    const handleSelectionModeDeactivated = () => {
      setIsSelectionActive(false);
    };

    window.addEventListener(
      "primitives-discovered",
      handlePrimitivesDiscovered,
    );
    window.addEventListener(
      "inspector-deactivated",
      handleSelectionModeDeactivated,
    );

    return () => {
      window.removeEventListener(
        "primitives-discovered",
        handlePrimitivesDiscovered,
      );
      window.removeEventListener(
        "inspector-deactivated",
        handleSelectionModeDeactivated,
      );
    };
  }, []);

  const handleActivateSelection = useCallback(() => {
    const clickToInspect = monitorStore.getClickToInspectSystem();
    if (clickToInspect) {
      clickToInspect.activate();
      setIsSelectionActive(true);
      setDiscoveredPrimitives(null);
    }
  }, [monitorStore]);

  const handleSelectPrimitive = useCallback((primitive: SelectedPrimitive) => {
    setSelectedPrimitive(primitive);
    setEditingMock(null);
    setIsModalOpen(true);
  }, []);

  const handleEditMock = useCallback((
    mock: MockResponse & { config: MockConfiguration },
  ) => {
    setEditingMock(mock);
    setSelectedPrimitive(mock.config.primitive);
    setIsModalOpen(true);
  }, []);

  const handleSaveMock = (config: MockConfiguration) => {
    const mockManager = monitorStore.getMockManager();
    const { primitive } = config;

    // Clear any previous errors
    setError(null);

    try {
      // Validate primitive structure
      if (!primitive || !primitive.type || !primitive.data) {
        setError(
          "Invalid primitive structure. Please try selecting the component again.",
        );
        return;
      }

      let mockData: unknown;
      if (!config.useResponse) {
        // No response - pass through or minimal response
        mockData = null;
      } else if (config.responseType === "error") {
        // For error responses, create an error object
        mockData = {
          error: true,
          message: config.errorMessage || "Mock request failed",
        };
      } else if (config.mockType === "static" && config.staticData) {
        try {
          mockData = JSON.parse(config.staticData);
        } catch (_jsonError) {
          setError("Invalid JSON in mock data. Please check your JSON syntax.");
          return;
        }
      }

      // Check if we're updating an existing mock
      if (editingMock) {
        // Remove the old mock
        mockManager.removeMock(editingMock.id);

        // Create updated mock with same id
        const mockResponse: MockResponse = {
          ...editingMock,
          matcher: createMatcherFromPrimitive(primitive),
          response: !config.useResponse
            ? { type: "passthrough" }
            : config.responseType === "error"
            ? {
              type: "error",
              error: config.errorMessage || "Mock request failed",
            }
            : createResponseFromConfig(primitive, mockData),
          enabled: config.enabled,
          usePayload: config.usePayload,
          payload: config.payload,
          usedCount: 0, // Reset usage count
        };

        const id = mockManager.registerMock(mockResponse);

        // Update the mocks list
        setMocks(prevMocks => {
          const updatedMocks = prevMocks.map(m =>
            m.id === editingMock.id ? { ...mockResponse, config, id } : m
          );
          return updatedMocks;
        });
      } else {
        const mockResponse: MockResponse = {
          id: crypto.randomUUID(),
          type: primitive.type === "action"
            ? "action"
            : primitive.type === "objectSet" || primitive.type === "link"
            ? "list"
            : "object",
          matcher: createMatcherFromPrimitive(primitive),
          response: !config.useResponse
            ? { type: "passthrough" as any } // Special type for no response
            : config.responseType === "error"
            ? {
              type: "error" as const,
              error: config.errorMessage || "Mock request failed",
            }
            : createResponseFromConfig(primitive, mockData),
          delay: 0, // No more network simulation
          usedCount: 0,
          enabled: config.enabled,
          usePayload: config.usePayload,
          payload: config.payload,
        };

        const id = mockManager.registerMock(mockResponse);

        // Store the config with the mock for later reference
        const newMock = { ...mockResponse, config, id };

        // Update the mocks list properly
        setMocks(prevMocks => {
          const updatedMocks = [...prevMocks, newMock];
          return updatedMocks;
        });
      }

      setIsModalOpen(false);
      setSelectedPrimitive(null);
      setDiscoveredPrimitives(null);
      setEditingMock(null);
    } catch (error) {
      const errorMessage = error instanceof Error
        ? error.message
        : "Unknown error";
      setError(`Failed to save mock: ${errorMessage}`);
      // Keep the modal open so user can fix the issue
    }
  };

  const handleToggleMock = useCallback((mockId: string) => {
    const mockManager = monitorStore.getMockManager();
    const mock = mockManager.getMock(mockId);
    if (mock) {
      const newEnabled = !mock.enabled;
      mockManager.updateMock(mockId, { enabled: newEnabled });
      setMocks(prevMocks =>
        prevMocks.map(m => m.id === mockId ? { ...m, enabled: newEnabled } : m)
      );
    }
  }, [monitorStore]);

  const handleDeleteMock = useCallback((mockId: string) => {
    const mockManager = monitorStore.getMockManager();
    mockManager.removeMock(mockId);
    // Filter out the deleted mock from our state directly
    // This is safer than re-mapping from the manager since we maintain configs locally
    setMocks(prevMocks => prevMocks.filter(m => m.id !== mockId));
  }, [monitorStore]);

  useEffect(() => {
    let mounted = true;
    const mockManager = monitorStore.getMockManager();

    const syncMocks = () => {
      if (!mounted) return;
      const currentMocks = mockManager.getMocks();
      setMocks(prevMocks => {
        // Check if anything actually changed by comparing IDs and usedCounts
        const prevIds = new Set(prevMocks.map(m => m.id));
        const currentIds = new Set(currentMocks.map(m => m.id));

        // Check for added/removed mocks
        const idsMatch = prevIds.size === currentIds.size
          && currentMocks.every(m => prevIds.has(m.id));

        // Check if any usedCount or enabled state changed
        const valuesMatch = currentMocks.every(m => {
          const prev = prevMocks.find(p => p.id === m.id);
          return prev && prev.usedCount === m.usedCount
            && prev.enabled === m.enabled;
        });

        // If nothing changed, return the same reference to avoid re-render
        if (idsMatch && valuesMatch) {
          return prevMocks;
        }

        // Something changed, rebuild the list
        return currentMocks.map(m => {
          // Find existing mock with config
          const existingMock = prevMocks.find(item => item.id === m.id);
          if (existingMock?.config) {
            // Preserve the config from the existing mock
            return { ...m, config: existingMock.config };
          }
          // New mock without config (shouldn't happen with our new flow)
          return {
            ...m,
            config: {
              primitive: { type: "action" as const, data: { name: "unknown" } },
              mockType: "static" as const,
              responseType: "success" as const,
              enabled: m.enabled,
            },
          };
        });
      });
    };

    const interval = setInterval(syncMocks, 1000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [monitorStore]);

  const createMatcherFromPrimitive = (primitive: SelectedPrimitive) => {
    if (!primitive || !primitive.data) {
      throw new Error("Invalid primitive structure");
    }

    const data = primitive.data as any;

    switch (primitive.type) {
      case "action":
        if (!data.name) {
          throw new Error("Action primitive missing 'name' property");
        }
        return { actionName: data.name };
      case "objectSet":
        if (!data.type) {
          throw new Error("ObjectSet primitive missing 'type' property");
        }
        return {
          objectType: data.type,
          whereClause: data.whereClause,
        };
      case "object":
        if (!data.type) {
          throw new Error("Object primitive missing 'type' property");
        }
        return {
          objectType: data.type,
          primaryKey: data.primaryKey,
        };
      case "link":
        if (!data.sourceType || !data.linkName) {
          throw new Error(
            "Link primitive missing 'sourceType' or 'linkName' property",
          );
        }
        return {
          objectType: data.sourceType,
          linkName: data.linkName,
        };
      default:
        return {};
    }
  };

  const createResponseFromConfig = (
    primitive: SelectedPrimitive,
    mockData: unknown,
  ) => {
    if (primitive.type === "action") {
      // For actions, mockData should already be the complete ActionEditResponse
      // It should have the shape: { type: "edits", addedObjects: [...], ... }
      return { type: "action" as const, result: mockData };
    } else if (primitive.type === "objectSet" || primitive.type === "link") {
      return {
        type: "list" as const,
        list: Array.isArray(mockData) ? mockData : [mockData],
        hasMore: false,
      };
    } else {
      return { type: "object" as const, object: mockData };
    }
  };

  return (
    <div className={styles.mockingTab}>
      <div className={styles.header}>
        {error && (
          <Callout intent="danger" icon="error" className={styles.error}>
            {error}
            <Button
              variant="minimal"
              size="small"
              icon="cross"
              onClick={() =>
                setError(null)}
              style={{ float: "right" }}
            />
          </Callout>
        )}

        <Callout intent="primary" icon="info-sign" className={styles.info}>
          <strong>Selection Mode:</strong>{" "}
          Click the paint icon to activate selection mode, then click on any
          component to discover OSDK usage.{" "}
          <Tooltip content="If you're unable to find OSDK usage where you expect try hovering over a related component">
            <Icon
              icon="info-sign"
              size={12}
              style={{ cursor: "help", verticalAlign: "middle" }}
            />
          </Tooltip>
        </Callout>

        <Button
          size="large"
          intent={isSelectionActive ? "warning" : "primary"}
          icon="style"
          onClick={handleActivateSelection}
          disabled={isSelectionActive}
          className={styles.activateButton}
        >
          {isSelectionActive
            ? "Selection Mode Active"
            : "Activate Selection Mode"}
        </Button>

        {isSelectionActive && (
          <Callout intent="warning" icon="hand">
            Selection mode is active. Click on any component to discover its
            OSDK usage. Press <kbd>Esc</kbd> to cancel.
          </Callout>
        )}
      </div>

      <div className={styles.content}>
        {discoveredPrimitives
          ? (
            <PrimitiveSelectionPanel
              primitives={discoveredPrimitives}
              onSelectPrimitive={handleSelectPrimitive}
              onClose={() => setDiscoveredPrimitives(null)}
            />
          )
          : (
            <div className={styles.mainContent}>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  <Icon icon="cube" />
                  Active Mocks
                </h3>

                {mocks.length === 0
                  ? (
                    <div className={styles.emptyState}>
                      <Icon icon="search" size={40} />
                      <div>No mocks created yet</div>
                      <div className={styles.emptySubtext}>
                        Use selection mode to discover OSDK usage and create
                        mocks
                      </div>
                    </div>
                  )
                  : (
                    <div className={styles.mockList}>
                      {mocks.map((mock) => (
                        <MockItem
                          key={mock.id}
                          mock={mock}
                          onToggle={() => handleToggleMock(mock.id)}
                          onDelete={() => handleDeleteMock(mock.id)}
                          onEdit={() => handleEditMock(mock)}
                        />
                      ))}
                    </div>
                  )}
              </div>
            </div>
          )}
      </div>

      <MockCreationModal
        isOpen={isModalOpen}
        primitive={selectedPrimitive}
        existingConfig={editingMock?.config}
        onSave={handleSaveMock}
        onCancel={() => {
          setIsModalOpen(false);
          setSelectedPrimitive(null);
          setEditingMock(null);
        }}
      />
    </div>
  );
};

interface MockItemProps {
  mock: MockResponse & { config: MockConfiguration };
  onToggle: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

const MockItem: React.FC<MockItemProps> = (
  { mock, onToggle, onDelete, onEdit },
) => {
  const getPrimitiveLabel = () => {
    if (!mock.config) {
      return { icon: "help" as const, text: "Unknown", type: mock.type };
    }

    const { type, data } = mock.config.primitive;

    switch (type) {
      case "action":
        return {
          icon: "flash" as const,
          text: (data as any).name,
          type: "action",
        };
      case "objectSet":
        return {
          icon: "th-list" as const,
          text: (data as any).type,
          type: "list",
        };
      case "object":
        return {
          icon: "cube" as const,
          text: (data as any).type,
          type: "object",
        };
      case "link":
        return {
          icon: "link" as const,
          text: (data as any).linkName,
          type: "link",
        };
      case "query":
        return {
          icon: "database" as const,
          text: (data as any).hookType,
          type: "query",
        };
      default:
        return { icon: "help" as const, text: "Unknown", type: "unknown" };
    }
  };

  const label = getPrimitiveLabel();

  return (
    <div className={styles.mockItem}>
      <div
        className={styles.mockItemContent}
        onClick={onEdit}
        style={{ cursor: "pointer" }}
        title="Click to view/edit configuration"
      >
        <div className={styles.mockItemHeader}>
          <Icon icon={label.icon} />
          <span className={styles.mockItemTitle}>{label.text}</span>
          <span className={styles.mockItemType}>
            {mock.config?.mockType || "static"}
          </span>
          <span className={styles.mockItemUsage}>Used: {mock.usedCount}x</span>
        </div>

        <div className={styles.mockItemDetails}>
          {mock.config?.responseType === "error" && (
            <span className={styles.detail}>
              Error Response
            </span>
          )}
          {mock.maxUses && (
            <span className={styles.detail}>
              Max uses: {mock.maxUses}
            </span>
          )}
        </div>
      </div>

      <div className={styles.mockItemActions}>
        <Button
          variant="minimal"
          size="small"
          intent={mock.enabled ? "success" : "warning"}
          icon={mock.enabled ? "pause" : "play"}
          onClick={onToggle}
          title={mock.enabled ? "Pause mock" : "Resume mock"}
        />
        <Button
          variant="minimal"
          size="small"
          intent="danger"
          icon="trash"
          onClick={onDelete}
          title="Delete mock"
        />
      </div>
    </div>
  );
};
