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

import { useRegisterUserAgent } from "@osdk/react";
import type { FunctionComponent } from "react";
import React from "react";
import { componentUserAgent } from "./UserAgent.js";

// `any` is required: FunctionComponent defaults to FunctionComponent<{}> which
// rejects components with required props. A generic P parameter doesn't help
// because TS can't infer both P and C simultaneously from a single argument.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withOsdkMetrics<C extends FunctionComponent<any>>(
  Component: C,
  name: string,
): C {
  const Wrapped = (props: React.ComponentProps<C>) => {
    useRegisterUserAgent(componentUserAgent(name));
    return React.createElement(Component, props);
  };
  Wrapped.displayName = `withOsdkMetrics(${name})`;
  return Wrapped as unknown as C;
}
