/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { Entry, FilterHandler, Options } from "dir-compare";
import { filterHandlers } from "dir-compare";
import type { GlobbyFilterFunction } from "globby";
import { isGitIgnoredSync } from "globby";

/**
 * Implements a custom filter that ignores files according to .gitignore rules.
 * Relies on globby library to provide the filtering logic.
 * Note that globby has some issues reported for .gitignore handling:
 * * https://github.com/sindresorhus/globby/issues/86
 * * https://github.com/sindresorhus/globby/issues/146
 * * https://github.com/sindresorhus/globby/issues/255
 * @param pathLeft This has to be the same as dir1 sent to dircompare.compare(dir1, dir2)
 * @param pathRight This has to be the same as dir2 sent to dircompare.compare(dir1, dir2)
 * @returns The filter function to be used as dircompare Option.
 */
export function gitIgnoreFilter(
  pathLeft: string,
  pathRight: string,
): FilterHandler {
  const isIgnoredLeft: GlobbyFilterFunction = isGitIgnoredSync({
    cwd: pathLeft,
  });
  const isIgnoredRight: GlobbyFilterFunction = isGitIgnoredSync({
    cwd: pathRight,
  });

  const filter: FilterHandler = (
    entry: Entry,
    relativePath: string,
    options: Options,
  ): boolean => {
    const isIgnored: GlobbyFilterFunction = entry.origin === "left"
      ? isIgnoredLeft
      : isIgnoredRight;
    // .git is not ignored by globby. We have to handle it.
    if (entry.name === ".git") {
      return false;
    }
    // Use globby to evaluate the current path
    if (isIgnored(entry.absolutePath)) {
      return false;
    }
    // Fallback on the default 'minimatch' implementation to deal with includeFilter and excludeFilter options
    return filterHandlers.defaultFilterHandler(entry, relativePath, options);
  };

  return filter;
}
