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

export function buildWidgetSetManifest(widgetSetRid, widgetSetVersion, widgetBuilds) {
  return {
    manifestVersion: "1.0.0",
    widgetSet: {
      rid: widgetSetRid,
      version: widgetSetVersion,
      widgets: Object.fromEntries(widgetBuilds.map(buildWidgetManifest).map(widgetManifest => [widgetManifest.id, widgetManifest]))
    }
  };
}
function buildWidgetManifest(widgetBuild) {
  const widgetConfig = widgetBuild.widgetConfig;
  return {
    id: widgetConfig.id,
    name: widgetConfig.name,
    description: widgetConfig.description,
    type: "workshopWidgetV1",
    entrypointJs: widgetBuild.scripts.map(script => ({
      path: trimLeadingSlash(script.src),
      type: script.scriptType
    })),
    entrypointCss: widgetBuild.stylesheets.map(path => ({
      path: trimLeadingSlash(path)
    })),
    parameters: widgetConfig.parameters,
    events: widgetConfig.events
  };
}
function trimLeadingSlash(path) {
  return path.startsWith("/") ? path.slice(1) : path;
}
//# sourceMappingURL=buildWidgetSetManifest.js.map