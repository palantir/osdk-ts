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
import type { TagBadgeParameters } from "storybook-addon-tag-badges/manager-helpers";
import type { API } from "storybook/manager-api";
import { addons, types } from "storybook/manager-api";

import {
  ADDON_ID,
  PANEL_ID,
} from "./addons/brand-theme-extractor/constants.js";
import { Panel } from "./addons/brand-theme-extractor/Panel.js";
import { ThemeToolbar } from "./addons/brand-theme-extractor/ThemeToolbar.js";

addons.setConfig({
  tagBadges: [
    {
      tags: "beta",
      badge: {
        text: "Beta",
        style: {
          backgroundColor: "rgba(143, 153, 168, .15)",
          color: "#1c2127",
        },
        tooltip: "This component is in beta and may change",
      },
      display: {
        sidebar: [
          { type: "component", skipInherited: false },
          { type: "group", skipInherited: false },
        ],
        toolbar: true,
      },
    },
  ] satisfies TagBadgeParameters,
});

// Must match <Meta title="Docs/Welcome" /> in src/docs/Welcome.mdx
const WELCOME_DOCS_PATH = "/docs/docs-welcome--docs";

function redirectToWelcomeIfNoStorySelected() {
  const url = new URL(window.location.href);

  if (!url.searchParams.has("path")) {
    url.searchParams.set("path", WELCOME_DOCS_PATH);
    window.location.replace(url);
  }
}

// Redirect to the Welcome docs page if we're at the root
addons.register("redirect-to-first-story", (api: Pick<API, "on">) => {
  api.on("STORY_RENDERED", () => {
    redirectToWelcomeIfNoStorySelected();
  });

  // Allow Storybook's initial render cycle to complete
  setTimeout(() => {
    redirectToWelcomeIfNoStorySelected();
  }, 100);
});

// Brand Theme Extractor toolbar
addons.register(ADDON_ID, () => {
  addons.add(`${ADDON_ID}/theme-toolbar`, {
    type: types.TOOL,
    title: "Theme",
    match: ({ viewMode, tabId }) =>
      Boolean(viewMode?.match(/^(story|docs)$/)) && !tabId,
    render: ThemeToolbar,
  });

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Brand Theme",
    render: ({ active }) => React.createElement(Panel, { active: !!active }),
  });
});
