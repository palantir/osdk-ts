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

import invariant from "tiny-invariant";
export function processOptionsAndAssignDefaults(url, redirect_uri, useHistory, loginPage, postLoginPage, scopes, fetchFn, ctxPath) {
  let options = {};
  if (typeof useHistory === "object") {
    !(!loginPage && !postLoginPage && !scopes && !fetchFn && !ctxPath) ? process.env.NODE_ENV !== "production" ? invariant(false, "If useHistory is an object, other options should not be provided") : invariant(false) : void 0;
    options = useHistory;
  } else {
    options = {
      useHistory,
      loginPage,
      postLoginPage,
      scopes,
      fetchFn,
      ctxPath
    };
  }
  !url ? process.env.NODE_ENV !== "production" ? invariant(false, "url is required") : invariant(false) : void 0;
  !redirect_uri ? process.env.NODE_ENV !== "production" ? invariant(false, "redirectUrl is required") : invariant(false) : void 0;

  // Assign defaults
  return {
    useHistory: options.useHistory ?? true,
    loginPage: options.loginPage,
    postLoginPage: options.postLoginPage || window.location.toString(),
    scopes: options.scopes ?? ["api:read-data", "api:write-data"],
    fetchFn: options.fetchFn ?? globalThis.fetch,
    ctxPath: options.ctxPath ?? "multipass",
    refreshTokenMarker: options.refreshTokenMarker
  };
}
//# sourceMappingURL=utils.js.map