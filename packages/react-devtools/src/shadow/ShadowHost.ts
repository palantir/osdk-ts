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

import { devtoolsCss } from "../styles.js";

export const HOST_ID = "__osdk_react_devtools_host__";
const MOUNT_ATTR = "data-osdk-devtools-mount";

let cachedMount: HTMLElement | null = null;

/**
 * Returns the single mount element for the devtools UI, living inside a shadow
 * root so devtools styles never touch the host app and app styles never reach
 * the devtools.
 *
 * The host `<div>` is a zero-size fixed anchor with a very high z-index: it
 * establishes a top-level stacking context (keeping the panel above app
 * content) without intercepting pointer events. Inheritance protection and base
 * styling live in the shadow stylesheet (`:host { all: initial }` plus the
 * Blueprint `:host` rules), not inline, so Blueprint's own `:host` base styles
 * still win by source order.
 */
export function getDevtoolsShadowMount(): HTMLElement {
  if (cachedMount != null) {
    return cachedMount;
  }

  const existingHost = document.querySelector<HTMLElement>(`#${HOST_ID}`);
  const existingMount = existingHost?.shadowRoot?.querySelector<HTMLElement>(
    `[${MOUNT_ATTR}]`
  );
  if (existingMount != null) {
    cachedMount = existingMount;
    return existingMount;
  }

  const host = existingHost ?? document.createElement("div");
  host.id = HOST_ID;
  host.setAttribute("data-osdk-devtools-ignore", "");
  host.style.cssText = "position:fixed;top:0;left:0;z-index:2147483647;";

  const shadow = host.shadowRoot ?? host.attachShadow({ mode: "open" });

  const style = document.createElement("style");
  style.textContent = devtoolsCss;
  shadow.appendChild(style);

  const mount = document.createElement("div");
  mount.setAttribute(MOUNT_ATTR, "");
  shadow.appendChild(mount);

  if (host.parentNode == null) {
    document.body.appendChild(host);
  }

  cachedMount = mount;
  return mount;
}
