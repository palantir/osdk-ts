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

import { LoadingCellContent } from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof LoadingCellContent> = {
  title: "Experimental/ObjectTable/Building Blocks/LoadingCellContent",
  component: LoadingCellContent,
  parameters: {
    docs: {
      description: {
        component:
          "A skeleton loading indicator without a wrapping `<td>`. Use this when you need to show a loading state inside an existing table cell or any other container.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 200 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code:
          `import { LoadingCellContent } from "@osdk/react-components/experimental/object-table";

<td>
  <LoadingCellContent />
</td>`,
      },
    },
  },
};
