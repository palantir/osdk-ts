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

import {
  ChevronDown,
  Cross,
  DoubleChevronLeft,
  DoubleChevronRight,
  More,
  Search,
  Tick,
  Undo,
} from "@blueprintjs/icons";
import React from "react";

export function IncludeIcon(): React.ReactElement {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M2 3h12M5 8h6M7 13h2" strokeLinecap="round" />
    </svg>
  );
}

export function ExcludeIcon(): React.ReactElement {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M2 3h12M5 8h6M7 13h2" strokeLinecap="round" />
      <path d="M3 14L13 2" strokeLinecap="round" />
    </svg>
  );
}

export function RemoveIcon(): React.ReactElement {
  return <Cross size={14} />;
}

export function SearchIcon(): React.ReactElement {
  return <Search size={14} />;
}

export function OverflowMenuIcon(): React.ReactElement {
  return <More size={14} />;
}

export function ChevronDownIcon(): React.ReactElement {
  return <ChevronDown size={10} />;
}

export function CollapseIcon(): React.ReactElement {
  return <DoubleChevronLeft size={14} />;
}

export function ExpandIcon(): React.ReactElement {
  return <DoubleChevronRight size={14} />;
}

export function ResetIcon(): React.ReactElement {
  return <Undo size={14} />;
}

export function CheckIcon(): React.ReactElement {
  return <Tick size={12} />;
}
