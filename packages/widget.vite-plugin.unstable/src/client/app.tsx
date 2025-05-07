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

type PageState =
  | {
    state: "loading";
  }
  | {
    state: "failed";
    error?: string;
  }
  | {
    state: "success";
    isRedirecting: boolean;
  };

const POLLING_INTERVAL = 250;
const REDIRECT_DELAY = 500;

export const App: React.FC = () => {
  const [entrypointPaths, setEntrypointPaths] = React.useState<string[]>([]);
  const [pageState, setPageState] = React.useState<PageState>({
    state: "loading",
  });

  // Load entrypoints values on mount
  useEffect(() => {
    void loadEntrypoints().then(setEntrypointPaths);
  }, []);

  // Poll the finish endpoint until it returns a success or error
  useEffect(() => {
    const poll = window.setInterval(() => {
      void finish()
        .then((result) => {
          if (result.status === "pending") {
            return;
          }

          // On success or failure, we clear the poll and end the loading state
          window.clearInterval(poll);
          setPageState(
            result.status === "success"
              ? { state: "success", isRedirecting: result.redirectUrl != null }
              : { state: "failed", error: result.error },
          );

          // When running in Code Workspaces the parent app will handle the redirect
          if (result.status === "success" && result.redirectUrl != null) {
            setTimeout(() => {
              window.location.href = result.redirectUrl!;
            }, REDIRECT_DELAY);
          }
        })
        .catch((error: unknown) => {
          window.clearInterval(poll);
          setPageState({
            state: "failed",
            error: error instanceof Error ? error.message : undefined,
          });
        });
    }, POLLING_INTERVAL);
    return () => window.clearInterval(poll);
  }, []);

  return (
    <div className="body">
      {pageState.state === "loading" && (
        <NonIdealState
          title="Generating developer mode manifest…"
          icon={<Spinner intent="primary" />}
        />
      )}
      {pageState.state === "success" && (
        <NonIdealState
          title="Started dev mode"
          icon="tick-circle"
          description={
            <div className="description">
              <Spinner intent="primary" size={SpinnerSize.SMALL} />{" "}
              {pageState.isRedirecting
                ? <span>Redirecting you…</span>
                : <span>Loading preview…</span>}
            </div>
          }
        />
      )}
      {pageState.state === "failed" && (
        <NonIdealState
          title="Failed to start dev mode"
          icon="error"
          description={pageState.error}
        />
      )}
      {/* To load the entrypoint info, we have to actually load it in the browser to get vite to follow the module graph. Since we know these files will fail, we just load them in iframes set to display: none to trigger the load hook in vite */}
      {entrypointPaths.map((entrypointPath) => (
        <iframe key={entrypointPath} src={entrypointPath} />
      ))}
    </div>
  );
};

function loadEntrypoints(): Promise<string[]> {
  return fetch("../entrypoints").then((res) => res.json());
}

function finish(): Promise<
  | {
    status: "success";
    redirectUrl: string | null;
  }
  | {
    status: "error";
    error: string;
  }
  | {
    status: "pending";
  }
> {
  return fetch("../finish").then((res) => res.json());
}
