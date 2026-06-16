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

import { Button, Callout, Intent, Tag } from "@blueprintjs/core";
import React from "react";
import {
  type FiberCapabilities,
  type FiberFeature,
  getCapabilitiesManager,
} from "./capabilities.js";
import { onReactDetected } from "./DevtoolsHook.js";
import { validateFiberAccess } from "./validation.js";

const FEATURE_LABELS: Record<FiberFeature, string> = {
  "component-inspection": "Component Inspection",
  "hook-discovery": "Hook Discovery",
  "render-tracking": "Render Tracking",
  "state-inspection": "State Inspection",
  "metadata-extraction": "Metadata Extraction",
  "fiber-discovery": "Fiber Discovery",
};

const FEATURE_DESCRIPTIONS: Record<FiberFeature, string> = {
  "component-inspection": "View component hierarchy and props",
  "hook-discovery": "Detect OSDK hooks in components",
  "render-tracking": "Track component re-renders",
  "state-inspection": "Inspect component state and hooks",
  "metadata-extraction": "Extract OSDK hook metadata from fibers",
  "fiber-discovery": "Discover OSDK components from fiber tree",
};

export interface DegradationNoticeProps {
  onRetry?: () => void;
  showWhenHealthy?: boolean;
}

function subscribeToCapabilities(onStoreChange: () => void): () => void {
  const manager = getCapabilitiesManager();

  validateFiberAccess();

  const unsubscribe = manager.onCapabilitiesChange(() => {
    onStoreChange();
  });

  const unsubscribeReactDetected = onReactDetected(() => {
    validateFiberAccess();
  });

  return () => {
    unsubscribe();
    unsubscribeReactDetected();
  };
}

function getCapabilitiesSnapshot(): FiberCapabilities {
  return getCapabilitiesManager().getCapabilities();
}

export const DegradationNotice: React.FC<DegradationNoticeProps> = ({
  onRetry,
  showWhenHealthy = false,
}) => {
  const capabilities = React.useSyncExternalStore(
    subscribeToCapabilities,
    getCapabilitiesSnapshot,
    getCapabilitiesSnapshot,
  );

  const disabledFeatures = Array.from(capabilities.disabledFeatures);
  const hasIssues = !capabilities.fiberAccessWorking
    || disabledFeatures.length > 0;

  if (!hasIssues && !showWhenHealthy) {
    return null;
  }

  if (!hasIssues && showWhenHealthy) {
    return (
      <Callout
        intent={Intent.SUCCESS}
        icon="tick-circle"
        title="Fiber Access Healthy"
        style={{ margin: "8px" }}
      >
        <p style={{ margin: 0 }}>
          All fiber features are working correctly.
          {capabilities.detectedReactVersion && (
            <>React {capabilities.detectedReactVersion} detected.</>
          )}
        </p>
      </Callout>
    );
  }

  if (!capabilities.hookInstalled) {
    return (
      <Callout
        intent={Intent.WARNING}
        icon="warning-sign"
        title="DevTools Hook Not Installed"
        style={{ margin: "8px" }}
      >
        <p style={{ margin: "0 0 8px 0" }}>
          The React DevTools hook was not installed before React loaded. Some
          features may be unavailable.
        </p>
        <p style={{ margin: 0, fontSize: "12px", color: "#5c7080" }}>
          Ensure the devtools are imported before React in your entry point.
        </p>
      </Callout>
    );
  }

  if (!capabilities.rendererDetected) {
    return (
      <Callout
        intent={Intent.PRIMARY}
        icon="time"
        title="Waiting for React"
        style={{ margin: "8px" }}
      >
        <p style={{ margin: 0 }}>
          No React renderer detected yet. React may still be loading.
        </p>
        {onRetry && (
          <Button
            size="small"
            variant="minimal"
            intent={Intent.PRIMARY}
            onClick={onRetry}
            style={{ marginTop: "8px" }}
          >
            Check Again
          </Button>
        )}
      </Callout>
    );
  }

  if (!capabilities.fiberAccessWorking) {
    return (
      <Callout
        intent={Intent.DANGER}
        icon="error"
        title="Fiber Access Unavailable"
        style={{ margin: "8px" }}
      >
        <p style={{ margin: "0 0 8px 0" }}>
          Unable to access React&apos;s internal fiber tree. Component
          inspection and related features are disabled.
        </p>
        {capabilities.detectedReactVersion && (
          <p
            style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#5c7080" }}
          >
            React {capabilities.detectedReactVersion} detected
          </p>
        )}
        {onRetry && (
          <Button
            size="small"
            intent={Intent.PRIMARY}
            onClick={onRetry}
          >
            Retry
          </Button>
        )}
      </Callout>
    );
  }

  return (
    <Callout
      intent={Intent.WARNING}
      icon="warning-sign"
      title="Some Features Disabled"
      style={{ margin: "8px" }}
    >
      <p style={{ margin: "0 0 8px 0" }}>
        The following features have been temporarily disabled due to errors:
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
          marginBottom: "8px",
        }}
      >
        {disabledFeatures.map((feature) => (
          <Tag
            key={feature}
            intent={Intent.WARNING}
            minimal={true}
            title={FEATURE_DESCRIPTIONS[feature]}
          >
            {FEATURE_LABELS[feature]}
          </Tag>
        ))}
      </div>
      {capabilities.errorCount > 0 && (
        <p style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#5c7080" }}>
          {capabilities.errorCount}{" "}
          error{capabilities.errorCount > 1 ? "s" : ""}{" "}
          recorded. Features will auto-recover after 30 seconds of successful
          operation.
        </p>
      )}
      {onRetry && (
        <Button
          size="small"
          variant="minimal"
          intent={Intent.WARNING}
          onClick={() => {
            getCapabilitiesManager().resetAll();
            onRetry();
          }}
        >
          Reset &amp; Retry
        </Button>
      )}
    </Callout>
  );
};

function subscribeToCapabilitiesSimple(onStoreChange: () => void): () => void {
  const manager = getCapabilitiesManager();
  return manager.onCapabilitiesChange(() => {
    onStoreChange();
  });
}

export function useFiberCapabilities(): FiberCapabilities {
  return React.useSyncExternalStore(
    subscribeToCapabilitiesSimple,
    getCapabilitiesSnapshot,
    getCapabilitiesSnapshot,
  );
}
