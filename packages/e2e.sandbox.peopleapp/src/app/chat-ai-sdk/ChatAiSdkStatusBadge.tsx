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

import type { ChatStatus } from "ai";
import React from "react";
import { Button } from "../../components/Button.js";

export interface ChatAiSdkStatusBadgeProps {
  status: ChatStatus;
  onClear: () => void;
}

const STATUS_CLASSES: Record<ChatStatus, string> = {
  ready: "bg-green-100 text-green-800",
  submitted: "bg-yellow-100 text-yellow-800",
  streaming: "bg-blue-100 text-blue-800",
  error: "bg-red-100 text-red-800",
};

export function ChatAiSdkStatusBadge(props: ChatAiSdkStatusBadgeProps) {
  return (
    <div className="flex items-center justify-between mb-3">
      <span
        className={`text-xs font-semibold px-2 py-1 rounded-sm ${
          STATUS_CLASSES[props.status]
        }`}
        aria-label={`chat status: ${props.status}`}
      >
        {props.status} (AI SDK)
      </span>
      <Button
        variant="secondary"
        onClick={props.onClear}
        disabled={props.status !== "ready"}
      >
        Clear conversation
      </Button>
    </div>
  );
}
