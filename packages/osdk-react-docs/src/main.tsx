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

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider as RouterProviderComponent } from "react-router-dom";
import "./index.css";
import { router } from "./router";

// Type cast to work around React 18/19 type conflicts
const RouterProvider = RouterProviderComponent as unknown as React.ComponentType<{ router: typeof router }>;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
