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

import classNames from "classnames";
import React, { useCallback } from "react";
import styles from "./PortalDismissLayer.module.css";

interface PortalDismissLayerProps {
  className?: string;
  onDismiss: () => void;
}

export const PortalDismissLayer: React.NamedExoticComponent<
  PortalDismissLayerProps
> = React.memo(function PortalDismissLayer({
  className,
  onDismiss,
}: PortalDismissLayerProps) {
  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      // The layer exists only to close the popup; prevent label-triggered
      // focus/click behavior from immediately reopening it.
      event.preventDefault();
      onDismiss();
    },
    [onDismiss],
  );

  return (
    <div
      aria-hidden="true"
      className={classNames(styles.osdkPortalDismissLayer, className)}
      data-osdk-portal-dismiss-layer=""
      onPointerDown={handlePointerDown}
    />
  );
});
