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

import type { PdfViewerProps } from "@osdk/react-components/experimental";
import { BasePdfViewer } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { AnnotationCreatorDemo } from "./AnnotationCreator.js";

// cspell:ignore tracemonkey pldi
const SAMPLE_PDF_URL = "/compressed.tracemonkey-pldi-09.pdf";

const meta: Meta<PdfViewerProps> = {
  title: "Components/PdfViewer/Recipes/AnnotationCreator",
  component: BasePdfViewer,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AnnotationCreator: Story = {
  render: () => <AnnotationCreatorDemo src={SAMPLE_PDF_URL} />,
  parameters: {
    docs: {
      source: {
        code:
          `// Highlight text to create annotations, view and manage them in the sidebar`,
      },
    },
  },
};
