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
// 2^31 - 1, the largest z-index browsers accept.
const MAX_Z_INDEX = 2147483647;

/**
 * Returns the single mount element for the devtools UI. It lives in a shadow
 * root so devtools CSS and the page's CSS can't affect each other.
 *
 * The host `<div>` is a zero-size fixed anchor with a very high z-index: it
 * gives the panel a top-level stacking context without covering the page.
 * Style resets live in the shadow stylesheet (`:host { all: initial }`), not
 * inline, so Blueprint's `:host` base rules still win by source order.
 */
export function getDevtoolsShadowMount(): HTMLElement {
  const existingHost = document.querySelector<HTMLElement>(`#${HOST_ID}`);
  const existingMount = existingHost?.shadowRoot?.querySelector<HTMLElement>(
    `[${MOUNT_ATTR}]`
  );
  if (existingMount != null) {
    return existingMount;
  }

  const host = existingHost ?? document.createElement("div");
  host.id = HOST_ID;
  host.setAttribute("data-osdk-devtools-ignore", "");
  host.style.cssText = `position:fixed;top:0;left:0;z-index:${MAX_Z_INDEX};`;

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

  return mount;
}
