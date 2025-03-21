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

import { InterfaceDefRef, ObjectDefRef, UnderlyingOsdkObject } from "./InternalSymbols.js";
const nodejsUtilInspectCustom = Symbol.for("nodejs.util.inspect.custom");
export const OsdkCustomInspectPrototype = Object.create(null, {
  [nodejsUtilInspectCustom]: {
    value: customInspect
  }
});

/**
 * A custom `util.inspect`/`console.log` for nodejs. Not emitted in the browser version
 * @param this
 * @param _depth
 * @param options
 * @param inspect
 * @returns
 */
function customInspect(_depth, options, localInspect) {
  const newOptions = {
    ...options,
    depth: options.depth == null ? null : options.depth - 1
  };
  let ret = `Osdk<${options.stylize(this[ObjectDefRef]?.apiName ?? this[InterfaceDefRef]?.apiName ?? "", "special")}> {\n`;
  for (const k of new Set(["$apiName", "$objectType", "$primaryKey", ...Reflect.ownKeys(this)])) {
    if (typeof k === "symbol") continue;
    ret += `  ${options.stylize(k.toString(), "undefined")}: ${localInspect(this[k], newOptions)}\n`;
  }
  if (this[UnderlyingOsdkObject] !== this) {
    ret += "\n";
    ret += `  ${options.stylize("$as", "special")}: ${localInspect(this[UnderlyingOsdkObject], newOptions).replace(/\n/g, `\n  `)}`;
    ret += "\n";
  }
  ret += "}";
  return ret;
}
//# sourceMappingURL=OsdkCustomInspectPrototype.js.map