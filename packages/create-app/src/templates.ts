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

export type SdkVersion = "1.x" | "2.x";

type ModuleImportFiles = Map<
  string,
  {
    type: "base64";
    body: string;
  } | {
    type: "raw";
    body: string;
  }
>;

export interface Template {
  id: string;
  label: string;
  envPrefix: string;
  buildDirectory: string;
  hidden?: boolean;
  isBeta?: boolean;
  files: {
    [K in SdkVersion]?: () => Promise<
      ModuleImportFiles
    >;
  };
}

export interface TemplateContext {
  project: string;
  foundryUrl: string;
  osdkPackage: string;
  clientVersion: string;
  corsProxy: boolean;
}

const getPackageFiles =
  (importPromise: Promise<{ files: ModuleImportFiles }>) => async () =>
    (await importPromise).files;

export const TEMPLATES: readonly Template[] = [
  {
    id: "template-react",
    label: "React",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    files: {
      "1.x": getPackageFiles(import("@osdk/create-app.template.react")),
      "2.x": getPackageFiles(import("@osdk/create-app.template.react.beta")),
    },
  },
  {
    id: "template-vue",
    label: "Vue",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    files: {
      "1.x": getPackageFiles(import("@osdk/create-app.template.vue")),
      "2.x": getPackageFiles(import("@osdk/create-app.template.vue.v2")),
    },
  },
  {
    id: "template-next-static-export",
    label: "Next (static export)",
    envPrefix: "NEXT_PUBLIC_",
    buildDirectory: "./out",
    files: {
      "1.x": getPackageFiles(
        import("@osdk/create-app.template.next-static-export"),
      ),
      "2.x": getPackageFiles(
        import("@osdk/create-app.template.next-static-export.v2"),
      ),
    },
  },
  {
    id: "template-tutorial-todo-app",
    label: "Tutorial: To do App",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    hidden: true,
    files: {
      "1.x": getPackageFiles(
        import("@osdk/create-app.template.tutorial-todo-app"),
      ),
      "2.x": getPackageFiles(
        import("@osdk/create-app.template.tutorial-todo-app.beta"),
      ),
    },
  },
  {
    id: "template-tutorial-todo-aip-app",
    label: "Tutorial: To do AIP App",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    hidden: true,
    files: {
      "1.x": getPackageFiles(
        import("@osdk/create-app.template.tutorial-todo-aip-app"),
      ),
      "2.x": getPackageFiles(
        import("@osdk/create-app.template.tutorial-todo-aip-app.beta"),
      ),
    },
  },
];
