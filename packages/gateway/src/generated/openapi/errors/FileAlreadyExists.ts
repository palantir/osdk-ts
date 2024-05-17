/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { DatasetRid } from "../components/DatasetRid.js";
import type { FilePath } from "../components/FilePath.js";
import type { TransactionRid } from "../components/TransactionRid.js";

/** The given file path already exists in the dataset and transaction. */
export interface FileAlreadyExists {
  errorCode: "NOT_FOUND";
  errorName: "FileAlreadyExists";
  errorInstanceId: string;
  parameters: {
    datasetRid: DatasetRid;
    transactionRid: TransactionRid;
    path: FilePath;
  };
}
