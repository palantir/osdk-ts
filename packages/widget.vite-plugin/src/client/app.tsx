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

import { NonIdealState, Pre, Spinner, SpinnerSize } from "@blueprintjs/core";
import React, { useEffect } from "react";
import { EntrypointIframe } from "./entrypointIframe.js";

type PageState =
  | {
    state: "loading";
  }
  | {
    state: "failed";
    error?: string;
    response?: string;
    hint?: string;
  }
  | {
    state: "success";
    isRedirecting: boolean;
  };

const POLLING_INTERVAL = 250;
const REDIRECT_DELAY = 500;

class ResponseError extends Error {
  public readonly response: string;
  public readonly hint: string | undefined;

  constructor(message: string, response: string, hint?: string) {
    super(message);
    this.response = response;
    this.hint = hint;
  }
}

export const App: React.FC = () => {
  const [entrypointPaths, setEntrypointPaths] = React.useState<string[]>([]);
  const [pageState, setPageState] = React.useState<PageState>({
    state: "loading",
  });
  const numAttempts = React.useRef(0);

  // Load entrypoints values on mount
  useEffect(() => {
    void loadEntrypoints().then(setEntrypointPaths);
  }, []);

  // Poll the finish endpoint until it returns a success or error
  useEffect(() => {
    const poll = window.setInterval(() => {
      void finish(numAttempts.current)
        .then((result) => {
          if (result.status === "pending") {
            numAttempts.current++;
            return;
          }
          if (result.status === "error") {
            if (result.response != null) {
              throw new ResponseError(
                result.error,
                result.response,
                result.hint,
              );
            }
            throw new Error(result.error);
          }

          // On success, we clear the poll and end the loading state
          window.clearInterval(poll);
          setPageState({
            state: "success",
            isRedirecting: result.redirectUrl != null,
          });

          // When running in Code Workspaces the parent app will handle the redirect
          if (result.status === "success" && result.redirectUrl != null) {
            setTimeout(() => {
              window.location.href = result.redirectUrl!;
            }, REDIRECT_DELAY);
          }
        })
        .catch((error: unknown) => {
          window.clearInterval(poll);
          // eslint-disable-next-line no-console
          console.error("Failed to finish dev mode setup:", error);
          setPageState({
            state: "failed",
            error: error instanceof Error ? error.message : undefined,
            response: error instanceof ResponseError
              ? error.response
              : undefined,
            hint: error instanceof ResponseError ? error.hint : undefined,
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
          description={
            <>
              {pageState.hint != null && (
                <div className="hint-block">{pageState.hint}</div>
              )}
              {pageState.response != null && (
                <Pre className="response-block">{pageState.response}</Pre>
              )}
              <Pre className="response-block">{pageState.error}</Pre>
            </>
          }
        />
      )}
      {/* To load the entrypoint info, we have to actually load it in the browser to get vite to follow the module graph. Since we know these files will fail, we just load them in iframes set to display: none to trigger the load hook in vite */}
      {entrypointPaths.map((entrypointPath) => (
        <EntrypointIframe src={entrypointPath} key={entrypointPath} />
      ))}
    </div>
  );
};

function loadEntrypoints(): Promise<string[]> {
  return fetch("../entrypoints").then((res) => res.json());
}

function finish(attempt: number): Promise<
  | {
    status: "success";
    redirectUrl: string | null;
  }
  | {
    status: "error";
    error: string;
    response?: string;
    hint?: string;
  }
  | {
    status: "pending";
  }
> {
  return fetch(`../finish?attempt=${attempt}`).then((res) => res.json());
}
