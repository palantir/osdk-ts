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

import type { AsyncValue, ParameterValue } from "@osdk/widget.api";

export type ParameterValueType<P extends ParameterValue> =
  P["value"] extends AsyncValue<infer T> ? T : never;

export interface AsyncParameterValueProps<P extends ParameterValue> {
  parameterId: string;
  parameterValue: P | undefined;
  onParameterValueUpdate: (
    parameterId: string,
    valueType: P["type"],
    newValue: ParameterValueType<P>,
    subType?: Extract<P, ParameterValue.Array> extends { subType: infer S }
      ? S
      : unknown,
  ) => void;
}

export interface ParameterValueProps<P extends ParameterValue> {
  parameterValue: ParameterValueType<P> | undefined;
  onParameterValueUpdate: (newValue: ParameterValueType<P>) => void;
}

export interface ParameterValueItemProps<P extends ParameterValue> {
  index: number;
  parameterValue: ParameterValueType<P> | undefined;
  onRemove: (index: number) => void;
  onParameterValueUpdate: (
    index: number,
    newValue: ParameterValueType<P>,
  ) => void;
}
