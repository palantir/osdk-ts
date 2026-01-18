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

import type {
  CheckboxIndicatorProps,
  Checkbox as BaseUICheckbox,
  type CheckboxRootProps,
} from "@base-ui/react/checkbox";
import { Minus, Tick } from "@blueprintjs/icons";
import React from "react";
import "./Checkbox.css";
import { mergeClassNames } from "@base-ui/react";

interface CheckboxProps extends Omit<CheckboxRootProps, "className"> {
  className?: string;
  indicatorProps?: Omit<CheckboxIndicatorProps, "className"> & {
    className?: string;
  };
}

export function Checkbox(
  {
    checked,
    indeterminate,
    onCheckedChange,
    className,
    indicatorProps,
    ...rest
  }: CheckboxProps,
): React.ReactElement {
  return (
    <BaseUICheckbox.Root
      className={mergeClassNames("osdk-checkbox-root", className)}
      checked={checked}
      indeterminate={indeterminate}
      onCheckedChange={onCheckedChange}
      {...rest}
    >
      <BaseUICheckbox.Indicator
        {...indicatorProps}
        className={mergeClassNames(
          "osdk-checkbox-indicator",
          indicatorProps?.className,
        )}
      >
        {/* Color is used as the "fill" attribute on the svg  */}
        {indeterminate
          ? (
            <Minus
              color={"currentColor"}
            />
          )
          : <Tick color={"currentColor"} />}
      </BaseUICheckbox.Indicator>
    </BaseUICheckbox.Root>
  );
}
