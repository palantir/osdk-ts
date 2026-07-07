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

import { Button } from "@blueprintjs/core";
import React from "react";

import { useCopyToClipboard } from "../hooks/useCopyToClipboard.js";
import {
  buildCopyAllPrompt,
  buildCopyPrompt,
} from "../recommendations/copyPrompt.js";
import type { Recommendation } from "../utils/PerformanceRecommendationEngine.js";

export type CopyPromptButtonProps =
  | {
      recommendation: Recommendation;
      label?: string;
      variant?: "minimal" | "outlined";
    }
  | {
      recommendations: Recommendation[];
      label?: string;
      variant?: "minimal" | "outlined";
    };

export const CopyPromptButton: React.FC<CopyPromptButtonProps> = (props) => {
  const { copied, copy } = useCopyToClipboard();

  const isSingle = "recommendation" in props;
  const prompt = isSingle
    ? buildCopyPrompt(props.recommendation)
    : buildCopyAllPrompt(props.recommendations);
  const label = props.label ?? (isSingle ? "Copy prompt" : "Copy all");

  return (
    <Button
      variant={props.variant ?? "minimal"}
      size="small"
      icon={copied ? "tick" : "clipboard"}
      onClick={() => void copy(prompt)}
    >
      {label}
    </Button>
  );
};
