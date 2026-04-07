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
  getIconPaths,
  type IconName,
  IconSize,
  SVGIconContainer,
} from "@blueprintjs/icons";
import React, { useMemo } from "react";

export interface Icon {
  name: IconName;
  color?: string;
}

export function BlueprintIcon({
  icon,
  size = IconSize.STANDARD,
}: {
  icon: Icon;
  size?: IconSize;
}): React.ReactElement {
  const paths = useMemo(() => getIconPaths(icon.name, size), [icon.name, size]);

  return (
    <SVGIconContainer iconName={icon.name} color={icon.color}>
      {paths.map((d, i) => <path key={i} d={d} fillRule="evenodd" />)}
    </SVGIconContainer>
  );
}
