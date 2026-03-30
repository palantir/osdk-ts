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

import { Input } from "@base-ui/react/input";
import React, { useCallback } from "react";
import type { TextAreaFieldProps } from "../FormFieldApi.js";
import styles from "./BaseInput.module.css";

const TEXTAREA_STYLE: React.CSSProperties = { resize: "vertical" };

export function TextAreaField({
  id,
  value,
  onChange,
  placeholder,
  rows,
  wrap,
  minLength,
  maxLength,
}: TextAreaFieldProps): React.ReactElement {
  const renderTextarea = useCallback(
    (props: React.ComponentPropsWithRef<"textarea">) => (
      <textarea {...props} rows={rows} wrap={wrap} style={TEXTAREA_STYLE} />
    ),
    [rows, wrap],
  );

  return (
    <Input
      id={id}
      className={styles.osdkBaseInput}
      value={value ?? ""}
      onValueChange={onChange}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      render={renderTextarea}
    />
  );
}
