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
const POLLING_INTERVAL = 250;
const REDIRECT_DELAY = 500;
export const App = () => {
  const [entrypointPaths, setEntrypointPaths] = React.useState([]);
  const [loading, setLoading] = React.useState({
    state: "loading"
  });

  // Load entrypoints values on mount
  useEffect(() => {
    void loadEntrypoints().then(setEntrypointPaths);
  }, []);

  // Poll the finish endpoint until it returns a success or error
  useEffect(() => {
    const poll = window.setInterval(() => {
      void finish().then(result => {
        if (result.status === "success") {
          setLoading({
            state: "success"
          });
          setTimeout(() => {
            window.location.href = result.redirectUrl;
          }, REDIRECT_DELAY);
          window.clearInterval(poll);
        } else if (result.status === "error") {
          setLoading({
            state: "failed",
            error: result.error
          });
          window.clearInterval(poll);
        }
      }).catch(error => {
        setLoading({
          state: "failed",
          error: error instanceof Error ? error.message : undefined
        });
        window.clearInterval(poll);
      });
    }, POLLING_INTERVAL);
    return () => window.clearInterval(poll);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, loading.state === "loading" && /*#__PURE__*/React.createElement(NonIdealState, {
    title: "Generating developer mode manifest\u2026",
    icon: /*#__PURE__*/React.createElement(Spinner, {
      intent: "primary"
    })
  }), loading.state === "success" && /*#__PURE__*/React.createElement(NonIdealState, {
    title: "Started dev mode",
    icon: "tick-circle",
    description: /*#__PURE__*/React.createElement("div", {
      className: "description"
    }, /*#__PURE__*/React.createElement(Spinner, {
      intent: "primary",
      size: SpinnerSize.SMALL
    }), " ", "Redirecting you\u2026")
  }), loading.state === "failed" && /*#__PURE__*/React.createElement(NonIdealState, {
    title: "Failed to start dev mode",
    icon: "error",
    description: loading.error
  }), entrypointPaths.map(entrypointPath => /*#__PURE__*/React.createElement("iframe", {
    key: entrypointPath,
    src: `/${entrypointPath}`
  })));
};
function loadEntrypoints() {
  return fetch("./entrypoints").then(res => res.json());
}
function finish() {
  return fetch("./finish").then(res => res.json());
}
//# sourceMappingURL=app.js.map