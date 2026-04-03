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

/* cspell:disable */

import type { PdfViewerMediaProps } from "@osdk/react-components/experimental";
import { PdfViewer } from "@osdk/react-components/experimental";
import { useOsdkObject } from "@osdk/react/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MEDIA_EMPLOYEE_PK } from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";

const meta: Meta<PdfViewerMediaProps> = {
  title: "Components/PdfViewer",
  component: PdfViewer,
  render: (args: PdfViewerMediaProps) => (
    <div style={{ height: "600px" }}>
      <PdfViewer {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithOsdkMedia: Story = {
  render: () => {
    const { object: employee, isLoading } = useOsdkObject(
      Employee,
      MEDIA_EMPLOYEE_PK,
    );

    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{ height: "600px" }}>Loading OSDK media…</div>;
    }

    return (
      <div style={{ height: "600px" }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `import { PdfViewer } from "@osdk/react-components/experimental";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`,
      },
    },
  },
};
