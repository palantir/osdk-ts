/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software=
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { FoundryHostEventTarget } from "@osdk/widget.client.unstable";
import React, { useContext } from "react";
export const FoundryWidgetContext = /*#__PURE__*/React.createContext({
  emitEvent: () => {},
  createOntologyClient: () => {
    throw new Error("createOntologyClient is not implemented in this context");
  },
  hostEventTarget: new FoundryHostEventTarget(),
  asyncParameterValues: {},
  parameters: {
    state: "not-started",
    values: {}
  }
});

/**
 * @returns The current FoundryWidgetClientContext, in the context of your specific parameter configuration
 */
export function useFoundryWidgetContext() {
  return useContext(FoundryWidgetContext);
}
(function (_useFoundryWidgetContext) {
  _useFoundryWidgetContext.withTypes = function () {
    return () => {
      return useFoundryWidgetContext();
    };
  };
})(useFoundryWidgetContext || (useFoundryWidgetContext = {}));
//# sourceMappingURL=context.js.map