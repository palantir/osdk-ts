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
  Disable,
  DoubleChevronLeft,
  DoubleChevronRight,
  More,
  Reset,
  Search,
  Tick,
} from "@blueprintjs/icons";
import React from "react";

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
  return <Reset size={12} />;
}

export function CheckIcon(): React.ReactElement {
  return <Tick size={12} />;
}

export function ExcludeIcon(): React.ReactElement {
  return <Disable color="currentColor" size={12} />;
}
