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

import { OsdkProvider } from "@osdk/react";
import { OsdkDevTools } from "@osdk/react-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.js";
import { $ } from "./foundryClient.js";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(
    "Root element not found. Ensure index.html has <div id='root'></div>",
  );
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <OsdkProvider client={$}>
      <App />
      <OsdkDevTools />
    </OsdkProvider>
  </React.StrictMode>,
);
