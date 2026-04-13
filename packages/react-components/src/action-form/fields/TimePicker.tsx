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
import React, { memo } from "react";
import styles from "./TimePicker.module.css";

interface TimePickerProps {
  value: string;
  onChange: (timeString: string) => void;
  label?: string;
}

export const TimePicker: React.MemoExoticComponent<
  (props: TimePickerProps) => React.ReactElement
> = memo(function TimePicker({
  value,
  onChange,
  label = "Time",
}: TimePickerProps): React.ReactElement {
  return (
    <Input
      type="time"
      value={value}
      onValueChange={onChange}
      className={styles.osdkTimePickerInput}
      aria-label={label}
    />
  );
});
