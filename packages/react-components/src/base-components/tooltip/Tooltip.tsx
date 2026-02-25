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

import {
  Tooltip as BaseUITooltip,
  type TooltipPopupProps,
  type TooltipPositionerProps,
  type TooltipProviderProps,
  type TooltipRootProps,
  type TooltipTriggerProps,
} from "@base-ui/react/tooltip";
import classnames from "classnames";
import React from "react";
import styles from "./Tooltip.module.css";

export interface TooltipProps extends Omit<TooltipRootProps, "className"> {}

function TooltipRoot({
  children,
  ...rest
}: TooltipProps): React.ReactElement {
  return (
    <BaseUITooltip.Root {...rest}>
      {children}
    </BaseUITooltip.Root>
  );
}

interface TooltipProviderComponentProps
  extends Omit<TooltipProviderProps, "className">
{
  className?: string;
}

function TooltipProvider({
  children,
  ...rest
}: TooltipProviderComponentProps): React.ReactElement {
  return (
    <BaseUITooltip.Provider
      {...rest}
    >
      {children}
    </BaseUITooltip.Provider>
  );
}

interface TooltipTriggerComponentProps
  extends Omit<TooltipTriggerProps, "className">
{
  className?: string;
}

function TooltipTrigger({
  className,
  children,
  ...rest
}: TooltipTriggerComponentProps): React.ReactElement {
  return (
    <BaseUITooltip.Trigger
      className={classnames(styles.osdkTooltipTrigger, className)}
      {...rest}
    >
      {children}
    </BaseUITooltip.Trigger>
  );
}

interface TooltipPositionerComponentProps
  extends Omit<TooltipPositionerProps, "className">
{
  className?: string;
}

function TooltipPositioner({
  className,
  children,
  sideOffset = 4,
  ...rest
}: TooltipPositionerComponentProps): React.ReactElement {
  return (
    <BaseUITooltip.Positioner
      className={classnames(styles.osdkTooltipPositioner, className)}
      sideOffset={sideOffset}
      {...rest}
    >
      {children}
    </BaseUITooltip.Positioner>
  );
}

interface TooltipPopupComponentProps
  extends Omit<TooltipPopupProps, "className">
{
  className?: string;
}

function TooltipPopup({
  className,
  children,
  ...rest
}: TooltipPopupComponentProps): React.ReactElement {
  return (
    <BaseUITooltip.Popup
      className={classnames(styles.osdkTooltipPopup, className)}
      {...rest}
    >
      {children}
    </BaseUITooltip.Popup>
  );
}

export function TooltipArrow(): React.ReactElement {
  return (
    <BaseUITooltip.Arrow className={styles.osdkTooltipArrow}>
      <ArrowSvg />
    </BaseUITooltip.Arrow>
  );
}

function ArrowSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className={styles.tooltipArrowFill}
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className={styles.tooltipArrowOuterStroke}
      />
    </svg>
  );
}

export const Tooltip: {
  Root: typeof TooltipRoot;
  Provider: typeof TooltipProvider;
  Trigger: typeof TooltipTrigger;
  Portal: typeof BaseUITooltip.Portal;
  Positioner: typeof TooltipPositioner;
  Popup: typeof TooltipPopup;
  Arrow: typeof TooltipArrow;
} = {
  Root: TooltipRoot,
  Provider: TooltipProvider,
  Trigger: TooltipTrigger,
  Portal: BaseUITooltip.Portal,
  Positioner: TooltipPositioner,
  Popup: TooltipPopup,
  Arrow: TooltipArrow,
};
