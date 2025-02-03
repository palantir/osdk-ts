/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { NonIdealState, Spinner, SpinnerSize } from "@blueprintjs/core";
import React, { useEffect } from "react";

export const App: React.FC = () => {
  const [entrypointPaths, setEntrypointPaths] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<
    | { state: "success" }
    | { state: "failed"; error: string }
    | { state: "loading" }
    | { state: "not-started" }
  >({ state: "not-started" });
  useEffect(() => {
    void fetch("./entrypoints")
      .then((res) => res.json())
      .then(({ entrypoints }: { entrypoints: string[] }) => {
        setEntrypointPaths(entrypoints);
        // Poll the manifest endpoint until all entrypoints have JS files listed for them
        const poll = window.setInterval(() => {
          void fetch("./manifest")
            .then((res) => res.json())
            .then(({ manifest }) => {
              let clearInterval = true;
              for (const entrypoint of entrypoints) {
                if (
                  manifest[entrypoint] == null
                  || manifest[entrypoint].length === 0
                ) {
                  clearInterval = false;
                }
              }
              if (clearInterval) {
                window.clearInterval(poll);
                setLoading({ state: "loading" });
                // Tell the vite server to start dev mode for the specified entrypoint
                void fetch("./finish", {
                  // TODO: Actually handle multiple entrypoints
                  body: JSON.stringify({ entrypoint: entrypoints[0] }),
                  method: "POST",
                }).then((res) => {
                  if (res.status !== 200) {
                    setLoading({ state: "failed", error: res.statusText });
                  } else {
                    setLoading({ state: "success" });
                    setTimeout(() => {
                      void res
                        .json()
                        .then(
                          (
                            { redirectUrl },
                          ) => (window.location.href = redirectUrl),
                        );
                    }, 500);
                  }
                });
              }
            });
        }, 100);
      });
  }, []);
  return (
    <div className="body">
      {(loading.state === "loading" || loading.state === "not-started") && (
        <NonIdealState
          title="Generating developer mode manifest…"
          icon={<Spinner intent="primary" />}
        />
      )}
      {loading.state === "success" && (
        <NonIdealState
          title="Started dev mode"
          icon="tick-circle"
          description={
            <div className="description">
              <Spinner intent="primary" size={SpinnerSize.SMALL} />{" "}
              Redirecting you…
            </div>
          }
        />
      )}
      {loading.state === "failed" && (
        <NonIdealState
          title="Failed to start dev mode"
          icon="error"
          description={loading.error}
        />
      )}
      {/* To load the entrypoint info, we have to actually load it in the browser to get vite to follow the module graph. Since we know these files will fail, we just load them in iframes set to display: none to trigger the load hook in vite */}
      {entrypointPaths.map((entrypointPath) => (
        <iframe key={entrypointPath} src={`/${entrypointPath}`} />
      ))}
    </div>
  );
};
