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
import classnames from "classnames";
import React, { memo } from "react";
import styles from "./TimeFooter.module.css";

interface TimeFooterProps {
  startTimeValue: string;
  onStartTimeChange: (timeString: string) => void;
  endTimeValue?: string;
  onEndTimeChange?: (timeString: string) => void;
}

export const TimeFooter: React.MemoExoticComponent<
  (props: TimeFooterProps) => React.ReactElement
> = memo(function TimeFooter({
  startTimeValue,
  onStartTimeChange,
  endTimeValue,
  onEndTimeChange,
}: TimeFooterProps): React.ReactElement {
  const isRange = endTimeValue != null;

  if (isRange) {
    return (
      <div className={styles.osdkTimeFooterRange}>
        <div className={styles.osdkTimeFooterGroup}>
          <Input
            type="time"
            value={startTimeValue}
            onValueChange={onStartTimeChange}
            className={classnames(
              styles.osdkTimeFooterInput,
              styles.osdkTimeFooterInputRange,
            )}
            aria-label="Start time"
          />
        </div>
        <div className={styles.osdkTimeFooterGroup}>
          <Input
            type="time"
            value={endTimeValue}
            onValueChange={onEndTimeChange}
            className={classnames(
              styles.osdkTimeFooterInput,
              styles.osdkTimeFooterInputRange,
            )}
            aria-label="End time"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.osdkTimeFooter}>
      <Input
        type="time"
        value={startTimeValue}
        onValueChange={onStartTimeChange}
        className={classnames(
          styles.osdkTimeFooterInput,
          styles.osdkTimeFooterInputSingle,
        )}
        aria-label="Time"
      />
    </div>
  );
});
