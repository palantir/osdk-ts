/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

export interface Template {
  id: string;
  label: string;
  envPrefix: string;
  buildDirectory: string;
  hidden?: boolean;
}

export interface TemplateContext {
  project: string;
  foundryUrl: string;
  osdkPackage: string;
  corsProxy: boolean;
}

export const TEMPLATES: readonly Template[] = [
  {
    id: "template-react",
    label: "React",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
  },
  {
    id: "template-vue",
    label: "Vue",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
  },
  {
    id: "template-next-static-export",
    label: "Next (static export)",
    envPrefix: "NEXT_PUBLIC_",
    buildDirectory: "./out",
  },
  {
    id: "template-tutorial-todo-app",
    label: "Tutorial: To do App",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    hidden: true,
  },
  {
    id: "template-tutorial-todo-aip-app",
    label: "Tutorial: To do AIP App",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    hidden: true,
  },
];
