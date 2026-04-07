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
  type IconName,
  type IconPaths,
  Icons,
  type IconSize,
  SVGIconContainer,
} from "@blueprintjs/icons";
import React from "react";

export interface Icon {
  name: IconName;
  color?: string;
}

interface BlueprintIconProps {
  icon: Icon;
  size: IconSize;
}

export const BlueprintIcon: React.NamedExoticComponent<BlueprintIconProps> =
  React.memo(function BlueprintIconFn({
    icon,
    size,
  }: BlueprintIconProps): React.ReactElement {
    const paths = useIcon(icon.name, size);

    return (
      <SVGIconContainer iconName={icon.name} color={icon.color}>
        {paths != null
          ? paths.map((d, i) => <path key={i} d={d} fillRule="evenodd" />)
          : []}
      </SVGIconContainer>
    );
  });

/**
 * Loads icon paths on demand via the public `Icons.load()` API
 * instead of the static `getIconPaths()` which bundles every icon definition.
 */
function useIcon(icon: IconName, size: IconSize): IconPaths | undefined {
  const [iconPaths, setIconPaths] = React.useState<IconPaths | undefined>(() =>
    Icons.getPaths(icon, size)
  );

  React.useEffect(
    function loadIconPaths() {
      let isMounted = true;
      function loadIconIfNotLoaded() {
        if (iconPaths == null) {
          void Icons.load(icon, size).then(() => {
            if (isMounted) {
              setIconPaths(Icons.getPaths(icon, size));
            }
          });
        }
      }
      loadIconIfNotLoaded();
      return () => {
        isMounted = false;
      };
    },
    [icon, size, iconPaths],
  );

  return iconPaths;
}
