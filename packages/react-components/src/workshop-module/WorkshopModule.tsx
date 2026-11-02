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

import { useOsdkClient } from "@osdk/react";
import { symbolClientContext } from "@osdk/shared.client";
import React from "react";

import { OsdkThemeContext } from "../theme/OsdkThemeContext.js";
import { BaseWorkshopModule } from "./BaseWorkshopModule.js";
import type { WorkshopModuleProps } from "./WorkshopModuleApi.js";

export function WorkshopModule(props: WorkshopModuleProps): React.ReactElement {
  const client = useOsdkClient();
  const theme = React.useContext(OsdkThemeContext);

  return (
    <BaseWorkshopModule
      {...props}
      foundryUrl={client[symbolClientContext].baseUrl}
      defaultTheme={theme?.theme}
    />
  );
}
