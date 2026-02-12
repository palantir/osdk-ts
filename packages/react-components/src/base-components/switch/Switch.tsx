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

import {
  Switch as BaseUISwitch,
  type SwitchRootProps,
  type SwitchThumbProps,
} from "@base-ui/react/switch";
import classnames from "classnames";
import React from "react";
import styles from "./Switch.module.css";

interface SwitchProps extends Omit<SwitchRootProps, "className"> {
  className?: string;
  thumbProps?: Omit<SwitchThumbProps, "className"> & {
    className?: string;
  };
}

export function Switch({
  className,
  thumbProps,
  ...rest
}: SwitchProps): React.ReactElement {
  return (
    <BaseUISwitch.Root
      className={classnames(styles.osdkSwitchRoot, className)}
      {...rest}
    >
      <BaseUISwitch.Thumb
        {...thumbProps}
        className={classnames(styles.osdkSwitchThumb, thumbProps?.className)}
      />
    </BaseUISwitch.Root>
  );
}
