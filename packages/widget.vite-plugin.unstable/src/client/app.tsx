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

type State = {
  state: "loading";
} | {
  state: "failed";
  error?: string;
} | {
  state: "success";
};

const POLLING_INTERVAL = 250;
const REDIRECT_DELAY = 500;

export const App: React.FC = () => {
  const [entrypointPaths, setEntrypointPaths] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<State>({ state: "loading" });

  // Load entrypoints values on mount
  useEffect(() => {
    void loadEntrypoints().then(setEntrypointPaths);
  }, []);

  // Poll the finish endpoint until it returns a success or error
  useEffect(() => {
    const poll = window.setInterval(() => {
      void finish().then((result) => {
        if (result.status === "success") {
          setLoading({ state: "success" });
          setTimeout(() => {
            window.location.href = result.redirectUrl;
          }, REDIRECT_DELAY);
          window.clearInterval(poll);
        } else if (result.status === "error") {
          setLoading({ state: "failed", error: result.error });
          window.clearInterval(poll);
        }
      }).catch((error: unknown) => {
        setLoading({
          state: "failed",
          error: error instanceof Error ? error.message : undefined,
        });
        window.clearInterval(poll);
      });
    }, POLLING_INTERVAL);
    return () => window.clearInterval(poll);
  }, []);

  return (
    <div className="body">
      {loading.state === "loading" && (
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

function loadEntrypoints(): Promise<string[]> {
  return fetch("./entrypoints").then((res) => res.json());
}

function finish(): Promise<
  {
    status: "success";
    redirectUrl: string;
  } | {
    status: "error";
    error: string;
  } | {
    status: "pending";
  }
> {
  return fetch("./finish").then((res) => res.json());
}
