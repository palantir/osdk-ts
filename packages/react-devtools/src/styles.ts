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

// Side-effect style imports for vite CSS bundling.
// Static imports so Vite's `cssCodeSplit: false` consolidates them into one
// asset (`build/esm/index.css`) consumed by the dev vite plugin's <link> tag.
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./components/MonitoringPanel.module.scss";
import "./components/BubbleChart.module.scss";
import "./components/ComponentCard.module.scss";
import "./components/DebuggingTab.module.scss";
import "./components/HookRow.module.scss";
import "./components/InterceptTab.module.scss";
import "./components/PrimitiveSelectionPanel.module.scss";
import "./components/CacheInspectorTab.module.scss";
