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

import { createClient } from "@osdk/client";
import { OsdkProvider } from "@osdk/react";
import type { OsdkThemeMode } from "@osdk/react-components/experimental/theme";
import { OsdkThemeProvider } from "@osdk/react-components/experimental/theme";
import type { WorkshopModuleProps } from "@osdk/react-components/experimental/workshop-module";
import { WorkshopModule } from "@osdk/react-components/experimental/workshop-module";
import React, { useMemo } from "react";

export interface WorkshopModuleStoryProps extends WorkshopModuleProps {
  foundryUrl: string;
  theme: OsdkThemeMode;
}

export function WorkshopModuleStory({
  foundryUrl,
  theme,
  ...props
}: WorkshopModuleStoryProps): React.ReactElement {
  const client = useMemo(() => {
    try {
      const url = new URL(foundryUrl);
      if (url.protocol !== "https:" && url.protocol !== "http:") {
        return undefined;
      }
    } catch {
      return undefined;
    }

    // The iframe uses the Foundry browser session; the client only supplies the URL.
    return createClient(foundryUrl, "ri.ontology.main.ontology.example", () =>
      Promise.resolve(""),
    );
  }, [foundryUrl]);

  return (
    <div style={{ height: "24rem" }}>
      {client != null ? (
        <OsdkProvider client={client}>
          <OsdkThemeProvider theme={theme}>
            <WorkshopModule key={theme} {...props} />
          </OsdkThemeProvider>
        </OsdkProvider>
      ) : (
        <p>
          Set the provider's Foundry URL and a module RID in the controls below.
          Rendering requires a signed-in Foundry session.
        </p>
      )}
    </div>
  );
}
