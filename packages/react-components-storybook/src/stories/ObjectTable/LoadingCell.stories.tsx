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

import { LoadingCell } from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof LoadingCell> = {
  title: "Experimental/ObjectTable/Building Blocks/LoadingCell",
  component: LoadingCell,
  args: {
    width: 200,
  },
  argTypes: {
    width: {
      description: "The width of the cell in pixels",
      control: { type: "number", min: 50, max: 600 },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A full `<td>` element with a skeleton loading indicator. Use this when rendering a complete table cell in a custom row renderer.",
      },
    },
  },
  decorators: [
    (Story) => (
      <table>
        <tbody>
          <tr>
            <Story />
          </tr>
        </tbody>
      </table>
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
          `import { LoadingCell } from "@osdk/react-components/experimental/object-table";

<table>
  <tbody>
    <tr>
      <LoadingCell width={200} />
    </tr>
  </tbody>
</table>`,
      },
    },
  },
};
