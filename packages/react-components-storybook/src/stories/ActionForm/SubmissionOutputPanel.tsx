/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import React from "react";

const FORM_STORY_LAYOUT_STYLE = {
  display: "flex",
  gap: 16,
  alignItems: "flex-start",
} as const;

const SUBMISSION_OUTPUT_STYLE = {
  flex: 1,
  minWidth: 360,
} as const;

const SUBMISSION_STATUS_STYLE = {
  marginTop: 8,
  marginBottom: 8,
  fontSize: 12,
  fontWeight: 600,
} as const;

const SUBMISSION_PRE_STYLE = {
  marginTop: 8,
  padding: 12,
  background: "#f5f5f5",
  borderRadius: 4,
  fontSize: 12,
  overflow: "auto",
  maxHeight: 560,
} as const;

export type StorySubmissionStatus = "idle" | "submitting" | "success" | "error";

export interface StorySubmissionSnapshot {
  status: StorySubmissionStatus;
  submittedValues?: unknown;
  response?: unknown;
  error?: unknown;
}

interface FormStoryLayoutProps {
  children: React.ReactNode;
  output: React.ReactNode;
}

export function FormStoryLayout({
  children,
  output,
}: FormStoryLayoutProps): React.ReactElement {
  return (
    <div style={FORM_STORY_LAYOUT_STYLE}>
      <div className="osdkFormCard">{children}</div>
      {output}
    </div>
  );
}

interface SubmissionOutputPanelProps {
  idleMessage: string;
  snapshot: StorySubmissionSnapshot;
}

export function SubmissionOutputPanel({
  idleMessage,
  snapshot,
}: SubmissionOutputPanelProps): React.ReactElement {
  const responseJson =
    snapshot.status === "idle"
      ? "(no submission yet)"
      : stringifyStoryValue(buildSubmissionJson(snapshot));
  const isError = snapshot.status === "error";

  return (
    <div style={SUBMISSION_OUTPUT_STYLE}>
      <strong>Submission response (JSON):</strong>
      <div
        role={isError ? "alert" : "status"}
        style={{
          ...SUBMISSION_STATUS_STYLE,
          color: isError ? "#c23030" : "#276749",
        }}
      >
        {getSubmissionStatusText(snapshot.status, idleMessage)}
      </div>
      <pre style={SUBMISSION_PRE_STYLE}>{responseJson}</pre>
    </div>
  );
}

function getSubmissionStatusText(
  status: StorySubmissionStatus,
  idleMessage: string
): string {
  switch (status) {
    case "idle":
      return idleMessage;
    case "submitting":
      return "Submitting…";
    case "success":
      return "Submit succeeded.";
    case "error":
      return "Submit failed.";
  }
}

function buildSubmissionJson(snapshot: StorySubmissionSnapshot): unknown {
  return {
    status: snapshot.status,
    submittedValues: snapshot.submittedValues ?? null,
    response: snapshot.response ?? null,
    error: snapshot.error ?? null,
  };
}

function stringifyStoryValue(value: unknown): string {
  return JSON.stringify(value, storyJsonReplacer, 2) ?? String(value);
}

function storyJsonReplacer(_key: string, value: unknown): unknown {
  if (value instanceof Error) {
    return {
      name: value.name,
      message: value.message,
    };
  }
  // Storybook can render docs in non-browser contexts where File is not
  // defined, so guard the constructor before serializing uploaded files.
  if (typeof File !== "undefined" && value instanceof File) {
    return {
      name: value.name,
      size: value.size,
      type: value.type,
    };
  }
  if (typeof value === "bigint") {
    return value.toString();
  }
  return value;
}
