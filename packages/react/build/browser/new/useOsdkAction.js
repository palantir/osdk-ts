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

import { ActionValidationError } from "@osdk/client";
import React from "react";
import { OsdkContext2 } from "./OsdkContext2.js";
export function useOsdkAction(actionDef) {
  const {
    observableClient
  } = React.useContext(OsdkContext2);
  const [error, setError] = React.useState();
  const [data, setData] = React.useState();
  const [isPending, setPending] = React.useState(false);
  const applyAction = React.useCallback(async function (hookArgs) {
    const {
      $optimisticUpdate,
      ...args
    } = hookArgs;
    try {
      setPending(true);
      setError(undefined);
      const r = await observableClient.applyAction(actionDef, args, {
        optimisticUpdate: $optimisticUpdate
      });
      setData(r);
      return r;
    } catch (e) {
      if (e instanceof ActionValidationError) {
        setError({
          actionValidation: e
        });
      } else {
        setError({
          unknown: e
        });
      }
    } finally {
      setPending(false);
    }
  }, [observableClient, setError]);
  return {
    applyAction,
    error,
    data,
    isPending
  };
}
//# sourceMappingURL=useOsdkAction.js.map