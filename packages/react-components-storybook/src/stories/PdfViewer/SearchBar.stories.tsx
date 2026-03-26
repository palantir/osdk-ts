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

import type { PdfViewerSearchBarProps } from "@osdk/react-components/experimental";
import { PdfViewerSearchBar } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

const meta: Meta<PdfViewerSearchBarProps> = {
  title: "Components/PdfViewer/Building Blocks/SearchBar",
  component: PdfViewerSearchBar,
  args: {
    query: "",
    totalMatches: 0,
    currentMatchIndex: 0,
    onQueryChange: fn(),
    onNext: fn(),
    onPrev: fn(),
    onClose: fn(),
  },
  argTypes: {
    query: {
      description: "Current search query text",
      control: "text",
    },
    totalMatches: {
      description: "Total number of matches found",
      control: { type: "number", min: 0 },
    },
    currentMatchIndex: {
      description: "Index of the currently highlighted match (0-indexed)",
      control: { type: "number", min: 0 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithMatches: Story = {
  args: {
    query: "trace",
    totalMatches: 12,
    currentMatchIndex: 3,
  },
};

export const NoResults: Story = {
  args: {
    // cspell:disable-next-line
    query: "xyznonexistent",
    totalMatches: 0,
    currentMatchIndex: 0,
  },
};
