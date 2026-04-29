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
import {
  defaultConfig,
  type TagBadgeParameters,
} from "storybook-addon-tag-badges/manager-helpers";
import { addons, types } from "storybook/manager-api";
import {
  ADDON_ID,
  PANEL_ID,
} from "./addons/brand-theme-extractor/constants.js";
import { Panel } from "./addons/brand-theme-extractor/Panel.js";

addons.setConfig({
  tagBadges: [
    {
      tags: "experimental",
      badge: {
        text: "Experimental",
        style: {
          backgroundColor: "rgba(143, 153, 168, .15)",
          color: "#1c2127",
        },
        tooltip: "This component is experimental and may change",
      },
      display: {
        sidebar: [
          { type: "component", skipInherited: false },
          { type: "group", skipInherited: false },
        ],
        toolbar: true,
      },
    },
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
});

function redirectToObjectTableIfAtRoot() {
  const url = new URL(window.location.href);
  if (
    !url.searchParams.has("path")
    && window.location.pathname === "/"
  ) {
    window.location.href =
      "/?path=/story/experimental-objecttable-features--default";
  }
}

// Redirect to the object table story if we're at the root
addons.register(
  "redirect-to-first-story",
  (api: { on: (arg0: string, arg1: () => void) => void }) => {
    // Check if we're at the root path (no story selected)
    api.on("STORY_RENDERED", () => {
      redirectToObjectTableIfAtRoot();
    });

    // Also check immediately when Storybook loads
    setTimeout(() => {
      redirectToObjectTableIfAtRoot();
    }, 100);
  },
);

// Brand Theme Extractor panel
addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Brand Theme",
    render: ({ active }) => React.createElement(Panel, { active }),
  });
});
