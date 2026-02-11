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

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "intro",
    {
      type: "category",
      label: "@osdk/react",
      items: [
        "react/getting-started",
        "react/querying-data",
        "react/actions",
        "react/advanced-queries",
        "react/cache-management",
        "react/platform-apis",
      ],
    },
    {
      type: "category",
      label: "@osdk/react-components",
      items: [
        "react-components/object-table",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: ["guides/vite"],
    },
    {
      type: "category",
      label: "Examples",
      items: [],
    },
  ],
};

export default sidebars;
