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

import { Button } from "@blueprintjs/core";
import type { AsyncValue, ParameterValue } from "@osdk/widget.api";
import * as React from "react";

import { getDefaultPrimitiveParameterValue } from "../getDefaultPrimitiveParameterValue.js";
import { usePreviewPresentation } from "../PreviewProvider.js";
import { BooleanParameterValueInputItem } from "./BooleanParameterInput.js";
import { DateParameterValueInputItem } from "./DateParameterInput.js";
import { getParameterValue } from "./getParameterValue.js";
import { NumberParameterValueInputItem } from "./NumberParameterInput.js";
import type {
  AsyncParameterValueProps,
  ParameterValueType,
} from "./parameterTypes.js";
import { StringParameterValueInputItem } from "./StringParameterInput.js";
import { TimestampParameterValueInputItem } from "./TimestampParameterInput.js";

export const AsyncArrayParameterInput: React.FC<
  AsyncParameterValueProps<ParameterValue.Array> & {
    subType: ParameterValue.PrimitiveType;
  }
> = ({ parameterId, parameterValue, subType, onParameterValueUpdate }) => {
  const presentation = usePreviewPresentation();
  const parameterSubType = subType;
  const handleAddItem = React.useCallback(() => {
    const currentValue = getParameterValue(parameterValue);
    onParameterValueUpdate(
      parameterId,
      "array",
      [
        ...(currentValue ?? []),
        getDefaultPrimitiveParameterValue(parameterSubType),
      ] as ParameterValueType<ParameterValue.Array>,
      parameterSubType,
    );
  }, [onParameterValueUpdate, parameterId, parameterSubType, parameterValue]);
  return (
    <div className={"osdk-widget-preview-array"}>
      <AsyncArrayParameterList
        parameterValue={parameterValue}
        parameterId={parameterId}
        subType={parameterSubType}
        onParameterValueUpdate={onParameterValueUpdate}
      />
      <Button
        fill={true}
        icon="add"
        text={presentation.strings.addItemButton}
        onClick={handleAddItem}
      />
    </div>
  );
};

type ArrayValueType<P extends ParameterValue> =
  Extract<P, ParameterValue.Array>["value"] extends AsyncValue<Array<infer T>>
    ? T
    : never;

const AsyncArrayParameterList: React.FC<
  AsyncParameterValueProps<ParameterValue.Array> & {
    subType: ParameterValue.PrimitiveType;
  }
> = ({ parameterValue, parameterId, subType, onParameterValueUpdate }) => {
  const handleParameterValueUpdate = React.useCallback(
    (index: number, value: ArrayValueType<ParameterValue.Array>) => {
      const currentValue = getParameterValue(parameterValue);
      if (currentValue == null) {
        return;
      }
      onParameterValueUpdate(
        parameterId,
        "array",
        [
          ...currentValue.slice(0, index),
          value,
          ...currentValue.slice(index + 1),
        ] as ParameterValueType<ParameterValue.Array>,
        subType,
      );
    },
    [onParameterValueUpdate, parameterId, parameterValue, subType],
  );
  const handleRemoveParameterValue = React.useCallback(
    (index: number) => {
      const currentValue = getParameterValue(parameterValue);
      if (currentValue == null) {
        return;
      }
      onParameterValueUpdate(
        parameterId,
        "array",
        [
          ...currentValue.slice(0, index),
          ...currentValue.slice(index + 1),
        ] as ParameterValueType<ParameterValue.Array>,
        subType,
      );
    },
    [onParameterValueUpdate, parameterId, parameterValue, subType],
  );
  if (
    parameterValue?.subType === "string" ||
    parameterValue?.subType === "scenario"
  ) {
    return getParameterValue(parameterValue)?.map((value, index) => (
      <StringParameterValueInputItem
        key={`${parameterId}-${index}`}
        index={index}
        parameterValue={value}
        onRemove={handleRemoveParameterValue}
        onParameterValueUpdate={handleParameterValueUpdate}
      />
    ));
  }

  if (parameterValue?.subType === "boolean") {
    return getParameterValue(parameterValue)?.map((value, index) => (
      <BooleanParameterValueInputItem
        key={`${parameterId}-${index}`}
        parameterValue={value}
        index={index}
        onRemove={handleRemoveParameterValue}
        onParameterValueUpdate={handleParameterValueUpdate}
      />
    ));
  }
  if (parameterValue?.subType === "number") {
    return getParameterValue(parameterValue)?.map((value, index) => (
      <NumberParameterValueInputItem
        key={`${parameterId}-${index}`}
        parameterValue={value}
        index={index}
        onRemove={handleRemoveParameterValue}
        onParameterValueUpdate={handleParameterValueUpdate}
      />
    ));
  }
  if (parameterValue?.subType === "date") {
    return getParameterValue(parameterValue)?.map((value, index) => (
      <DateParameterValueInputItem
        key={`${parameterId}-${index}`}
        parameterValue={value}
        index={index}
        onRemove={handleRemoveParameterValue}
        onParameterValueUpdate={handleParameterValueUpdate}
      />
    ));
  }
  if (parameterValue?.subType === "timestamp") {
    return getParameterValue(parameterValue)?.map((value, index) => (
      <TimestampParameterValueInputItem
        key={`${parameterId}-${index}`}
        parameterValue={value}
        index={index}
        onRemove={handleRemoveParameterValue}
        onParameterValueUpdate={handleParameterValueUpdate}
      />
    ));
  }
  return null;
};
