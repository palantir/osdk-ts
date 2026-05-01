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
// Using void import() so TypeScript does not emit them in .d.ts (attw cannot resolve .scss/.css).
void import("@blueprintjs/core/lib/css/blueprint.css");
void import("@blueprintjs/icons/lib/css/blueprint-icons.css");
void import("./components/MonitoringPanel.module.scss");
void import("./components/BubbleChart.module.scss");
void import("./components/ComponentCard.module.scss");
void import("./components/DebuggingTab.module.scss");
void import("./components/HookRow.module.scss");
void import("./components/InterceptTab.module.scss");
void import("./components/PrimitiveSelectionPanel.module.scss");
void import("./components/CacheInspectorTab.module.scss");
