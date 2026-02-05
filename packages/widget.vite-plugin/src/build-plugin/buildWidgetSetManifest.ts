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

import type {
  ManifestParameterDefinition,
  ParameterDefinition,
  WidgetManifestConfig,
  WidgetSetInputSpec,
  WidgetSetManifest,
} from "@osdk/widget.api";
import type { Logger } from "vite";
import type { WidgetBuildOutputs } from "./getWidgetBuildOutputs.js";
import { validateWidgetSet } from "./validateWidgetSet.js";
import colors from "picocolors";

export function buildWidgetSetManifest(
  widgetSetRid: string,
  widgetSetVersion: string,
  widgetBuilds: WidgetBuildOutputs[],
  widgetSetInputSpec: WidgetSetInputSpec,
  logger: Logger,
): WidgetSetManifest {
  validateWidgetSet(widgetBuilds);
  return {
    manifestVersion: "1.0.0",
    widgetSet: {
      rid: widgetSetRid,
      version: widgetSetVersion,
      widgets: Object.fromEntries(
        widgetBuilds
          .map(build => buildWidgetManifest(build, logger))
          .map((widgetManifest) => [widgetManifest.id, widgetManifest]),
      ),
      inputSpec: widgetSetInputSpec,
    },
  };
}

function buildWidgetManifest(
  widgetBuild: WidgetBuildOutputs,
  logger: Logger,
): WidgetManifestConfig {
  const widgetConfig = widgetBuild.widgetConfig;
  return {
    id: widgetConfig.id,
    name: widgetConfig.name,
    description: widgetConfig.description,
    type: "workshopWidgetV1",
    entrypointJs: widgetBuild.scripts.map((script) => ({
      path: trimLeadingSlash(script.src),
      type: script.scriptType,
    })),
    entrypointCss: widgetBuild.stylesheets.map((path) => ({
      path: trimLeadingSlash(path),
    })),
    parameters: convertParameters(widgetConfig.parameters, logger),
    events: widgetConfig.events,
    permissions: widgetConfig.permissions,
  };
}

function convertParameters(
  parameters: Record<string, ParameterDefinition>,
  logger: Logger,
): Record<string, ManifestParameterDefinition> {
  return Object.fromEntries(
    Object.entries(parameters).map(([key, param]) => [
      key,
      convertParameter(param, logger),
    ]),
  );
}

function convertParameter(
  parameter: ParameterDefinition,
  logger: Logger,
): ManifestParameterDefinition {
  if (parameter.type === "objectSet") {
    // Config has already been validated so rid must be present
    const allowedType = parameter.allowedType ?? parameter.objectType;
    const allowedTypeRid = allowedType.internalDoNotUseMetadata?.rid;
    if (allowedTypeRid != null) {
      if (parameter.objectType != null) {
        logger.warn(
          colors.yellow(`Parameter "${parameter.displayName}" uses the deprecated objectType field which will be removed in the future. Please use allowedType instead.`),
        );
      }
      return {
        type: "objectSet",
        displayName: parameter.displayName,
        objectTypeRids: allowedType.type === "object" ? [allowedTypeRid] : [],
        allowedType: allowedTypeRid,
      };
    }
    throw new Error(
      "ObjectSet parameter must have either objectType or allowedType with valid metadata",
    );
  }
  return parameter;
}

function trimLeadingSlash(path: string): string {
  return path.startsWith("/") ? path.slice(1) : path;
}
