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

import type { IconName } from "@blueprintjs/icons";
import React from "react";

export interface Icon {
  name: IconName;
  color?: string;
}

interface BlueprintIconProps {
  icon: Icon;
  /** Icon size in pixels. */
  size: number;
}

export const BlueprintIcon: React.NamedExoticComponent<BlueprintIconProps> =
  React.memo(function BlueprintIconFn({
    icon,
    size,
  }: BlueprintIconProps): React.ReactElement {
    const paths = useIconPaths(icon.name, size);

    return (
      <span aria-hidden={true} data-icon={icon.name}>
        <svg
          fill={icon.color}
          data-icon={icon.name}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          role="img"
        >
          {paths != null
            && paths.map((d, i) => <path key={i} d={d} fillRule="evenodd" />)}
        </svg>
      </span>
    );
  });

type IconPaths = string[];

/**
 * Loads Blueprint icon SVG paths on demand using dynamic imports.
 * Avoids importing `Icons` or `getIconPaths` which statically pull in
 * the full icon name registry (~66 KB) and all SVG path data.
 */
function useIconPaths(icon: IconName, size: number): IconPaths | undefined {
  const [iconPaths, setIconPaths] = React.useState<IconPaths | undefined>();

  React.useEffect(
    function loadIconPaths() {
      let isMounted = true;
      void loadIcon(icon, size).then((paths) => {
        if (isMounted) {
          setIconPaths(paths);
        }
      });
      return () => {
        isMounted = false;
      };
    },
    [icon, size],
  );

  return iconPaths;
}

/**
 * Dynamically imports only the icon paths chunk needed for the given size.
 * Uses the same internal paths as Blueprint's `splitPathsBySizeLoader`.
 */
async function loadIcon(
  name: IconName,
  size: number,
): Promise<IconPaths | undefined> {
  const key = toPascalCase(name);
  const pathsModule = size >= 20
    ? await import("@blueprintjs/icons/lib/esm/generated/20px/paths")
    : await import("@blueprintjs/icons/lib/esm/generated/16px/paths");
  return pathsModule[key as keyof typeof pathsModule] as
    | IconPaths
    | undefined;
}

function toPascalCase(name: string): string {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}
