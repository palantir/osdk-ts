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

import type * as _Core from "@osdk/foundry.core";
import type * as _Datasets from "@osdk/foundry.datasets";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * The Resource Identifier (RID) of a Connection (formerly known as a source).
 *
 * Log Safety: SAFE
 */
export type ConnectionRid = LooselyBrandedString<"ConnectionRid">;

/**
 * Log Safety: UNSAFE
 */
export interface FileImport {
  rid: FileImportRid;
  connectionRid: ConnectionRid;
  datasetRid: _Datasets.DatasetRid;
  branchName?: _Datasets.BranchName;
  displayName: FileImportDisplayName;
  fileImportFilters: Array<FileImportFilter>;
  importMode: FileImportMode;
  subfolder?: string;
}

/**
   * A custom file import filter. Custom file import filters can be fetched but cannot currently be used
when creating or updating file imports.
   *
   * Log Safety: UNSAFE
   */
export interface FileImportCustomFilter {
  config: any;
}

/**
 * Log Safety: UNSAFE
 */
export type FileImportDisplayName = LooselyBrandedString<
  "FileImportDisplayName"
>;

/**
   * Filters allow you to filter source files
before they are imported into Foundry.
   *
   * Log Safety: UNSAFE
   */
export type FileImportFilter =
  | ({ type: "customFilter" } & FileImportCustomFilter)
  | ({ type: "lastModifiedAfterFilter" } & FileLastModifiedAfterFilter)
  | ({ type: "pathMatchesFilter" } & FilePathMatchesFilter)
  | ({ type: "fileSizeFilter" } & FileSizeFilter);

/**
   * Import mode governs how raw files are read from an external system, and written into a Foundry dataset.
SNAPSHOT: Defines a new dataset state consisting only of files from a particular import execution.
APPEND: Purely additive and yields data from previous import executions in addition to newly added files.
UPDATE: Replaces existing files from previous import executions based on file names.
   *
   * Log Safety: SAFE
   */
export type FileImportMode = "SNAPSHOT" | "APPEND" | "UPDATE";

/**
 * The Resource Identifier (RID) of a FileImport (formerly known as a batch sync).
 *
 * Log Safety: SAFE
 */
export type FileImportRid = LooselyBrandedString<"FileImportRid">;

/**
 * Only import files that have been modified after a specified timestamp
 *
 * Log Safety: UNSAFE
 */
export interface FileLastModifiedAfterFilter {
  afterTimestamp?: string;
}

/**
   * Only import files whose path (relative to the root of the source) matches the regular expression.
Example
Suppose we are importing files from relative/subfolder.
relative/subfolder contains:

relative/subfolder/include-file.txt
relative/subfolder/exclude-file.txt
relative/subfolder/other-file.txt

With the relative/subfolder/include-.*.txt regex, only relative/subfolder/include-file.txt will be imported.
   *
   * Log Safety: UNSAFE
   */
export interface FilePathMatchesFilter {
  regex: string;
}

/**
   * Only import files whose size is between the specified minimum and maximum values.
At least one of greaterThan or lessThan should be present.
If both are present, the value specified for greaterThan must be strictly less than the value specified for
lessThan.
   *
   * Log Safety: SAFE
   */
export interface FileSizeFilter {
  greaterThan?: _Core.SizeBytes;
  lessThan?: _Core.SizeBytes;
}
