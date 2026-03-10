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

import { NumberField } from "@base-ui/react/number-field";
import React from "react";

interface NumericInputProps {
  value: number | null;
  onChange: (value: number | null) => void;
  className?: string;
}

export function NumericInput({
  value,
  onChange,
  className,
}: NumericInputProps): React.ReactElement {
  return (
    <NumberField.Root
      value={value}
      onValueChange={onChange}
    >
      <NumberField.Input className={className} />
    </NumberField.Root>
  );
}
